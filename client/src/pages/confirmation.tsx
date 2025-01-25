import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useAuth } from "../auth/authContext";
import AppointmentService from "../services/booking.service";
import { format } from "date-fns";
import { User } from 'firebase/auth';
import { Appointment } from "../services/booking.service";

const Confirmation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const auth = useAuth();
  const { currentUser } = auth;

  if (!currentUser) {
    return <div>Please log in to continue</div>;
  }
  
  const user = currentUser;
  const { date, service } = location.state || {};
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  useEffect(() => {
    if (!date || !service) {
      navigate("/appointment");
    }
    setError("");
  }, [date, service, navigate]);

  const isValidDate = () => {
    if (!date) return false;
    const appointmentDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return appointmentDate >= today;
  };

  const handleBookAppointment = async () => {
    setError("");

    if (!date || !service) {
      setError("Date and service are required.");
      return;
    }

    if (!currentUser) {
      setError("Please login to book an appointment.");
      return;
    }

    if (!isValidDate()) {
      setError("Please select a future date for your appointment.");
      return;
    }

    setShowConfirmDialog(true);
  };

  const confirmBooking = async () => {
    if (!currentUser) {
      setError("Please login to book an appointment.");
      return;
    }

    try {
      setLoading(true);
      const appointment = {
        patientId: currentUser.uid,
        patientName: currentUser.displayName || currentUser.email || '',
        email: currentUser.email || '',
        phoneNumber: currentUser.phoneNumber || '',
        date: date,
        service: service,
        status: "pending" as "pending",
        createdAt: new Date().toISOString()
      };

      await AppointmentService.addAppointment(appointment);
      setLoading(false);
      navigate("/booked");
    } catch (err: any) {
      setLoading(false);
      setError(err.message || "Failed to book the appointment. Please try again.");
      console.error("Error booking appointment:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b2013] via-[#29643a] to-[#e6f5db] py-24 px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-green-400/30 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-green-300/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-green-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4 tracking-tight">
            Confirm Your Appointment
          </h1>
          <p className="text-green-100 text-lg font-light">
            Please review your booking details
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
          <div className="relative bg-white/95 backdrop-blur-2xl rounded-2xl shadow-2xl p-6">
          <div className="space-y-6">
  <div className="grid gap-4">
    {/* Patient Name */}
    <div className="space-y-2">
      <h3 className="text-lg font-semibold text-gray-800">Patient Name</h3>
      <p className="text-gray-600 bg-green-50/50 p-3 rounded-xl border border-green-100">
        {currentUser.displayName || "No name provided"}
      </p>
    </div>

    {/* Patient Email */}
    <div className="space-y-2">
      <h3 className="text-lg font-semibold text-gray-800">Email</h3>
      <p className="text-gray-600 bg-green-50/50 p-3 rounded-xl border border-green-100">
        {currentUser.email || "No email provided"}
      </p>
    </div>

    {/* Date & Time */}
    <div className="space-y-2">
      <h3 className="text-lg font-semibold text-gray-800">Date & Time</h3>
      <p className="text-gray-600 bg-green-50/50 p-3 rounded-xl border border-green-100">
        {date ? format(new Date(date), 'MMMM d, yyyy h:mm a') : "No date selected"}
      </p>
    </div>

    {/* Service */}
    <div className="space-y-2">
      <h3 className="text-lg font-semibold text-gray-800">Service</h3>
      <p className="text-gray-600 bg-green-50/50 p-3 rounded-xl border border-green-100">
        {service || "No service selected"}
      </p>
    </div>
  </div>


              {!user && (
                <div className="bg-amber-50 border-l-4 border-amber-500 p-3 rounded-lg">
                  <p className="text-amber-700 text-sm font-medium">
                    Please login to book an appointment
                  </p>
                </div>
              )}

              {error && (
                <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded-lg animate-shake">
                  <p className="text-red-700 text-sm">{error}</p>
                </div>
              )}

              <div className="pt-4 space-y-3">
                {loading ? (
                  <div className="flex flex-col items-center gap-3 py-2">
                    <div className="w-8 h-8 border-3 border-green-200 border-t-green-600 rounded-full animate-spin"></div>
                    <p className="text-gray-600 text-sm">Processing your booking...</p>
                  </div>
                ) : (
                  <>
                    <button
                      onClick={handleBookAppointment}
                      disabled={!user}
                      className="group relative w-full overflow-hidden"
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-green-400 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                      <div className="relative w-full px-6 py-3 bg-green-900 text-white rounded-xl transition-all duration-300 group-hover:bg-green-800 flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 w-3 bg-white transform skew-x-[20deg] group-hover:animate-shine"></div>
                        <span className="relative z-10 text-base font-medium tracking-wide">
                          Confirm Booking
                        </span>
                      </div>
                    </button>
                    <Link 
                      to="/appointment"
                      className="block text-center py-2 text-green-600 hover:text-green-700 font-medium transition-colors duration-300"
                    >
                      ← Go Back
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Dialog */}
      {showConfirmDialog && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl blur opacity-20"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Confirm Your Booking</h3>
              <p className="text-gray-600 mb-6">
                Are you sure you want to book this appointment for{' '}
                <span className="font-semibold text-gray-900">
                  {format(new Date(date), 'MMMM d, yyyy h:mm a')}
                </span>
                ?
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => setShowConfirmDialog(false)}
                  className="flex-1 px-6 py-3 text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors duration-300"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmBooking}
                  className="flex-1 px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors duration-300"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Confirmation;