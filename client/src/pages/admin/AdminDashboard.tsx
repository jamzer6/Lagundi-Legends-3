import React, { useEffect, useState } from "react";
import { collection, query, where, orderBy, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase.config';
import type { Feedback } from '../../types/feedback';
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AdminNavbar from "./AdminNavbar";
import FeedbackManagement from "../../components/FeedbackManagement";

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
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [filterDate, setFilterDate] = useState<Date | null>(new Date());
  const [viewMode, setViewMode] = useState<'day' | 'month' | 'year'>('day');
  const [newAppointments] = useState<number>(2);

  useEffect(() => {
    const mockAppointments: Appointment[] = [
      { id: "1", patient: "John Doe", date: "2025-01-20", time: "10:00 AM", status: "pending" },
      { id: "2", patient: "Jane Smith", date: "2025-01-21", time: "11:00 AM", status: "pending", feedback: "First time patient" },
    ];
    setTimeout(() => {
      setAppointments(mockAppointments);
      setLoading(false);
    }, 1000);
  }, []);

  const updateStatus = (id: string, status: string) => {
    axios
      .post(`http://localhost:5000/appointments/${id}`, { status })
      .then(() => {
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

  const deleteAppointment = (id: string) => {
    if (window.confirm('Are you sure you want to delete this appointment?')) {
      setAppointments(appointments.filter(app => app.id !== id));
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0b2013] via-[#29643a] to-[#e6f5db] flex items-center justify-center">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 rounded-lg blur opacity-30 animate-pulse"></div>
          <div className="relative bg-white/90 backdrop-blur-xl rounded-lg p-6 shadow-xl">
            <div className="flex items-center space-x-3">
              <svg className="animate-spin h-5 w-5 text-green-600" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span className="text-lg font-medium text-gray-700">Loading appointments...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <AdminNavbar />
      <div className="min-h-screen bg-gradient-to-br from-[#0b2013] via-[#29643a] to-[#e6f5db] py-20 px-6 md:px-20">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-green-400 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-200 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>
        </div>

        {/* Main Content */}
        <div className="relative max-w-6xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl blur opacity-20"></div>
          <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl p-8">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-900 to-green-600">
                Secretary Dashboard
              </h1>
              {newAppointments > 0 && (
                <div className="px-4 py-2 bg-green-100 rounded-full">
                  <p className="text-green-600 font-medium">
                    {newAppointments} new appointment{newAppointments > 1 ? 's' : ''}
                  </p>
                </div>
              )}
            </div>

            {error && (
              <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
                <p className="text-red-700">{error}</p>
              </div>
            )}

            {/* Date Filter Section */}
            <div className="bg-green-50/50 rounded-xl p-6 mb-8">
              <div className="flex space-x-4 mb-6">
                {['day', 'month', 'year'].map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setViewMode(mode as 'day' | 'month' | 'year')}
                    className={`px-6 py-2.5 rounded-full font-medium transition-all duration-200 ${
                      viewMode === mode 
                        ? 'bg-green-600 text-white shadow-md' 
                        : 'bg-white text-gray-600 hover:bg-green-50'
                    }`}
                  >
                    {mode.charAt(0).toUpperCase() + mode.slice(1)} View
                  </button>
                ))}
              </div>

              <DatePicker
                selected={filterDate}
                onChange={(date) => setFilterDate(date)}
                dateFormat={viewMode === 'day' ? "yyyy-MM-dd" : viewMode === 'month' ? "yyyy-MM" : "yyyy"}
                showMonthYearPicker={viewMode === 'month'}
                showYearPicker={viewMode === 'year'}
                className="w-full px-4 py-2.5 rounded-lg border-2 border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                placeholderText={`Select ${viewMode}`}
              />
            </div>

            {/* Appointments List */}
            <div className="grid gap-6">
              {appointments.map(({ id, patient, date, time, status, feedback }) => (
                <div key={id} className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg transition-transform duration-300 group-hover:scale-[1.02]">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-gray-600">Patient:</span>
                          <span className="font-semibold text-gray-900">{patient}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-gray-600">Date:</span>
                          <span className="font-semibold text-gray-900">{date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-gray-600">Time:</span>
                          <span className="font-semibold text-gray-900">{time}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-gray-600">Status:</span>
                          <span className={`font-semibold capitalize px-3 py-1 rounded-full text-sm ${
                            status === 'approved' ? 'bg-green-100 text-green-600' :
                            status === 'denied' ? 'bg-red-100 text-red-600' :
                            'bg-yellow-100 text-yellow-600'
                          }`}>
                            {status}
                          </span>
                        </div>
                        {feedback && (
                          <div className="text-gray-600 italic mt-2">
                            "{feedback}"
                          </div>
                        )}
                      </div>
                      
                      <div className="flex space-x-3">
                        <button
                          onClick={() => updateStatus(id, "approved")}
                          disabled={status === 'approved'}
                          className={`group relative inline-flex items-center justify-center ${
                            status === 'approved' ? 'opacity-50 cursor-not-allowed' : ''
                          }`}
                        >
                          <div className="absolute -inset-px bg-gradient-to-r from-green-400 to-green-600 rounded-lg blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                          <span className="relative inline-flex items-center px-6 py-2 text-sm font-medium text-white bg-green-800 rounded-lg transition-all duration-300 group-hover:bg-green-700">
                            Approve
                          </span>
                        </button>
                        
                        <button
                          onClick={() => updateStatus(id, "denied")}
                          disabled={status === 'denied'}
                          className={`group relative inline-flex items-center justify-center ${
                            status === 'denied' ? 'opacity-50 cursor-not-allowed' : ''
                          }`}
                        >
                          <div className="absolute -inset-px bg-gradient-to-r from-red-400 to-red-600 rounded-lg blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                          <span className="relative inline-flex items-center px-6 py-2 text-sm font-medium text-white bg-red-800 rounded-lg transition-all duration-300 group-hover:bg-red-700">
                            Deny
                          </span>
                        </button>

                        <button
                          onClick={() => deleteAppointment(id)}
                          className="group relative inline-flex items-center justify-center"
                        >
                          <div className="absolute -inset-px bg-gradient-to-r from-gray-400 to-gray-600 rounded-lg blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                          <span className="relative inline-flex items-center px-6 py-2 text-sm font-medium text-white bg-gray-800 rounded-lg transition-all duration-300 group-hover:bg-gray-700">
                            Delete
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;