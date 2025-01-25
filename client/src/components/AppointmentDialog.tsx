import React from 'react';
import { useState } from 'react';
import { doc, updateDoc, collection, query, getDocs, where } from 'firebase/firestore';
import { db } from '../firebase/firebase.config';
import AdminPanel from '../pages/AdminDashboard';

interface AppointmentDialogProps {
  isOpen: boolean;
  onClose: () => void;
  appointment: {
    id: string;
    patientName: string;
    date: string;
    time: string;
    status: string;
  };
  onUpdate: () => void;
}

const AppointmentDialog: React.FC<AppointmentDialogProps> = ({
  isOpen,
  onClose,
  appointment,
  onUpdate
}) => {
  const [date, setDate] = useState(appointment.date);
  const [time, setTime] = useState(appointment.time);
  const [status, setStatus] = useState(appointment.status);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Check if there are already appointments at this time
      const appointmentsRef = collection(db, 'appointments');
      const q = query(appointmentsRef, 
        where('date', '==', date),
        where('time', '==', time),
        where('status', '!=', 'cancelled')
      );
      const querySnapshot = await getDocs(q);
      
      // If there are existing appointments (excluding the current one being edited)
      // and they exceed capacity, show error
      const existingAppointments = querySnapshot.docs
        .filter(doc => doc.id !== appointment.id);
      
      if (existingAppointments.length >= 1) {
        setError('This time slot is already booked. Please select another time.');
        return;
      }

      const appointmentRef = doc(db, 'appointments', appointment.id);
      await updateDoc(appointmentRef, {
        date,
        time,
        status
      });
      onUpdate();
      onClose();
    } catch (err) {
      setError('Failed to update appointment');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4">Edit Appointment</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-1">Time</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-1">Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="pending">Pending</option>
              <option value="confirmed">Confirmed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentDialog;