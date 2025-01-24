import React, { useEffect, useState } from "react";
import axios from "axios";
import { format } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Appointment {
  id: string;
  patient: string;
  date: string;
  time: string;
  status: string;
  feedback?: string;
}

const AdminDashboard: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filterDate, setFilterDate] = useState<Date | null>(null);
  const [filterMonth, setFilterMonth] = useState<Date | null>(null);
  const [filterYear, setFilterYear] = useState<Date | null>(null);
  const [viewMode, setViewMode] = useState<'day' | 'month' | 'year'>('day');
  const [newAppointments, setNewAppointments] = useState<number>(0);

  useEffect(() => {
    fetchAppointments();
    // Set up polling for new appointments
    const pollInterval = setInterval(checkNewAppointments, 30000); // Check every 30 seconds
    return () => clearInterval(pollInterval);
  }, [filterDate, filterMonth, filterYear, viewMode]);

  const fetchAppointments = async () => {
    try {
      let url = 'http://localhost:5000/appointments';
      let params = {};

      if (viewMode === 'day' && filterDate) {
        params = { date: format(filterDate, 'yyyy-MM-dd') };
      } else if (viewMode === 'month' && filterMonth) {
        params = { month: format(filterMonth, 'yyyy-MM') };
      } else if (viewMode === 'year' && filterYear) {
        params = { year: format(filterYear, 'yyyy') };
      }

      const response = await axios.get(url, { params });
      setAppointments(response.data);
      setLoading(false);
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to fetch appointments");
      setLoading(false);
    }
  };

  const checkNewAppointments = async () => {
    try {
      const response = await axios.get('http://localhost:5000/appointments/new');
      setNewAppointments(response.data.count);
    } catch (err) {
      console.error("Error checking new appointments:", err);
    }
  };

  const updateStatus = async (id: string, status: string) => {
    try {
      await axios.put(`http://localhost:5000/appointments/${id}`, { status });
      fetchAppointments(); // Refresh the list after update
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to update appointment status");
    }
  };

  const deleteAppointment = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this appointment?')) {
      try {
        await axios.delete(`http://localhost:5000/appointments/${id}`);
        fetchAppointments(); // Refresh the list after deletion
      } catch (err: any) {
        setError(err.response?.data?.message || "Failed to delete appointment");
      }
    }
  };

  if (loading) return <div className="p-6">Loading appointments...</div>;
  if (error) return <div className="p-6 text-red-500">{error}</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      
      {newAppointments > 0 && (
        <div className="mb-4 p-2 bg-yellow-100 rounded">
          <p className="text-yellow-800">You have {newAppointments} new appointment(s)!</p>
        </div>
      )}

      <div className="mb-6">
        <div className="flex space-x-4 mb-4">
          <button
            onClick={() => setViewMode('day')}
            className={`px-4 py-2 rounded ${viewMode === 'day' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Daily View
          </button>
          <button
            onClick={() => setViewMode('month')}
            className={`px-4 py-2 rounded ${viewMode === 'month' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Monthly View
          </button>
          <button
            onClick={() => setViewMode('year')}
            className={`px-4 py-2 rounded ${viewMode === 'year' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Yearly View
          </button>
        </div>

        {viewMode === 'day' && (
          <DatePicker
            selected={filterDate}
            onChange={(date) => setFilterDate(date)}
            dateFormat="yyyy-MM-dd"
            className="border p-2 rounded"
            placeholderText="Select date"
          />
        )}
        {viewMode === 'month' && (
          <DatePicker
            selected={filterMonth}
            onChange={(date) => setFilterMonth(date)}
            dateFormat="yyyy-MM"
            showMonthYearPicker
            className="border p-2 rounded"
            placeholderText="Select month"
          />
        )}
        {viewMode === 'year' && (
          <DatePicker
            selected={filterYear}
            onChange={(date) => setFilterYear(date)}
            dateFormat="yyyy"
            showYearPicker
            className="border p-2 rounded"
            placeholderText="Select year"
          />
        )}
      </div>

      <div className="space-y-4">
        {appointments.map((appointment) => (
          <div key={appointment.id} className="border rounded-lg p-4 shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <p><strong>Patient:</strong> {appointment.patient}</p>
                <p><strong>Date:</strong> {appointment.date}</p>
                <p><strong>Time:</strong> {appointment.time}</p>
                <p><strong>Status:</strong> <span className={`${
                  appointment.status === 'approved' ? 'text-green-600' :
                  appointment.status === 'denied' ? 'text-red-600' :
                  'text-yellow-600'
                }`}>{appointment.status}</span></p>
                {appointment.feedback && (
                  <p><strong>Feedback:</strong> {appointment.feedback}</p>
                )}
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => updateStatus(appointment.id, 'approved')}
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                  disabled={appointment.status === 'approved'}
                >
                  Approve
                </button>
                <button
                  onClick={() => updateStatus(appointment.id, 'denied')}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  disabled={appointment.status === 'denied'}
                >
                  Deny
                </button>
                <button
                  onClick={() => deleteAppointment(appointment.id)}
                  className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
