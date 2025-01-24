import React, { useEffect, useState } from "react";
import axios from "axios";

interface Appointment {
  id: string;
  patient: string;
  date: string;
  time: string;
  status: string;
}

const AdminDashboard: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const mockAppointments: Appointment[] = [
      { id: "1", patient: "John Doe", date: "2025-01-20", time: "10:00 AM", status: "pending" },
      { id: "2", patient: "Jane Smith", date: "2025-01-21", time: "11:00 AM", status: "pending" },
    ];
    setTimeout(() => {
      setAppointments(mockAppointments);
      setLoading(false);
    }, 1000);

  }, []);
  

  const updateStatus = (id: string, status: string) => {
    // Update appointment status in the backend
    axios
      .post(`http://localhost:5000/appointments/${id}`, { status })
      .then(() => {
        // Update the local state
        setAppointments((prev) =>
          prev.map((appointment) =>
            appointment.id === id ? { ...appointment, status } : appointment
          )
        );
      })
      .catch((err) => {
        console.error("Error updating appointment status:", err);
        setError(err.response?.data?.message || "Failed to update appointment status.");
          });
      };
      

  if (loading) {
    return <p>Loading appointments...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Secretary Dashboard</h1>
      <ul className="space-y-4">
        {appointments.map(({ id, patient, date, time, status }) => (
          <li
            key={id}
            className="p-4 border rounded shadow flex justify-between items-center"
          >
            <div>
              <p>
                <strong>Patient:</strong> {patient}
              </p>
              <p>
                <strong>Date:</strong> {date}
              </p>
              <p>
                <strong>Time:</strong> {time}
              </p>
              <p>
                <strong>Status:</strong> {status}
              </p>
            </div>
            <div className="space-x-2">
              <button
                onClick={() => updateStatus(id, "approved")}
                className="px-4 py-2 bg-green-500 text-white rounded"
              >
                Approve
              </button>
              <button
                onClick={() => updateStatus(id, "denied")}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Deny
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
