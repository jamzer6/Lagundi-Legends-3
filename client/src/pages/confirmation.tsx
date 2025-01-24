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
    <div>
      <div className="min-h-screen bg-gradient-to-br from-[#c8e6c9] via-[#3d8652] to-[#143b23] flex flex-col gap-y-7 justify-center items-center pt-24">
        <div className="text-5xl font-bold text-white">Booking Confirmation</div>
        <div className="bg-white h-auto w-[350px] p-7 flex flex-col gap-y-5 justify-center rounded-lg shadow-xl">
          <p className="text-xl font-semibold text-green-900">Booking Details</p>
          <div>
            <p className="text-lg font-semibold text-green-900">Date:</p>
            <p className="text-green-700 text-lg">
              {date ? format(new Date(date), 'MMMM d, yyyy h:mm a') : "No date selected"}
            </p>
          </div>
          <div>
            <p className="text-lg font-semibold text-green-900">Service:</p>
            <p className="text-green-700 text-lg">{service || "No service selected"}</p>
          </div>
          {!currentUser && (
            <p className="text-amber-600">Please login to book an appointment</p>
          )}
          {loading ? (
            <div className="flex flex-col items-center gap-2">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
              <p>Booking your appointment...</p>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              <button
                className="bg-green-600 text-white rounded-lg text-lg font-semibold hover:bg-green-700 transition-all w-full px-2 py-3"
                onClick={handleBookAppointment}
                disabled={!currentUser}
              >
                Book Appointment
              </button>
              <Link 
                to="/appointment" 
                className="text-center text-green-600 hover:text-green-700 transition-all"
              >
                Go Back
              </Link>
            </div>
          )}
          {error && <p className="text-red-600">{error}</p>}
        </div>

        {showConfirmDialog && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-md">
              <h3 className="text-xl font-bold text-green-900 mb-4">Confirm Booking</h3>
              <p className="text-gray-700 mb-4">Are you sure you want to book this appointment?</p>
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setShowConfirmDialog(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmBooking}
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Confirmation;