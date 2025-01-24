import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase.config"; // Ensure that this points to the correct location

const Confirmation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Extract date and service from location state or default to empty values
  const { date, service } = location.state || {};
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle the booking of the appointment
  const handleBookAppointment = async () => {
    if (!date || !service) {
      setError("Date and service are required.");
      return;
    }

    setLoading(true);
    try {
      // Sample patient data. Replace with actual data from your app.
      const patientId = "001"; // Replace with actual patient ID if available
      const patientName = "John Doe"; // Replace with actual patient name if available

      // Add appointment to Firestore
      await addDoc(collection(db, "appointments"), {
        patientId,
        patientName,
        date,
        service,
        status: "pending", // Initial status
        createdAt: new Date().toISOString(), // Timestamp when the appointment is created
      });

      // Set loading state and navigate to a success page
      setLoading(false);
      navigate("/booked"); // Redirect to the "Booked" page after success
    } catch (err) {
      setLoading(false);
      setError("Failed to book the appointment.");
      console.error("Error booking appointment:", err); // Log the error for debugging
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
            <p className="text-green-700 text-lg">{date || "No date selected"}</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-green-900">Service:</p>
            <p className="text-green-700 text-lg">{service || "No service selected"}</p>
          </div>
          {/* Book Appointment Button */}
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="flex justify-center items-center pt-3">
              <button
                className="bg-green-600 text-white rounded-lg text-lg font-semibold hover:bg-green-700 transition-all w-[200px] px-2 py-3"
                onClick={handleBookAppointment}
              >
                Book Appointment
              </button>
            </div>
          )}
          {error && <p className="text-red-600">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
