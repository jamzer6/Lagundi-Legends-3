import React, { useState, useEffect } from 'react';
import { collection, query, getDocs, deleteDoc, doc, updateDoc, addDoc, where } from 'firebase/firestore';
import { db } from '../../firebase/firebase.config';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Appointment {
  id: string;
  patientId: string;
  patientName: string;
  date: Date;
  time: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  notes?: string;
}

const AppointmentManagement: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [patients, setPatients] = useState<Array<{ id: string; name: string }>>([]);
  const [newAppointment, setNewAppointment] = useState({
    patientId: '',
    date: new Date(),
    time: '',
    notes: ''
  });

  useEffect(() => {
    fetchAppointments();
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const patientsQuery = query(collection(db, 'patients'));
      const querySnapshot = await getDocs(patientsQuery);
      const patientData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        name: doc.data().name
      }));
      setPatients(patientData);
    } catch (error) {
      console.error('Error fetching patients:', error);
    }
  };

  const fetchAppointments = async () => {
    try {
      const appointmentsQuery = query(collection(db, 'appointments'));
      const querySnapshot = await getDocs(appointmentsQuery);
      const appointmentData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        date: doc.data().date.toDate()
      })) as Appointment[];
      setAppointments(appointmentData);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddAppointment = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const appointmentsOnDate = appointments.filter(
        apt => apt.date.toDateString() === newAppointment.date.toDateString()
      );

      if (appointmentsOnDate.length >= 10) {
        alert('Maximum appointments reached for this date. Please select another date.');
        return;
      }

      const patient = patients.find(p => p.id === newAppointment.patientId);
      
      await addDoc(collection(db, 'appointments'), {
        ...newAppointment,
        status: 'pending',
        patientName: patient?.name,
        date: newAppointment.date
      });

      fetchAppointments();
      setNewAppointment({
        patientId: '',
        date: new Date(),
        time: '',
        notes: ''
      });
    } catch (error) {
      console.error('Error adding appointment:', error);
    }
  };

  const handleDeleteAppointment = async (appointmentId: string) => {
    if (window.confirm('Are you sure you want to delete this appointment?')) {
      try {
        await deleteDoc(doc(db, 'appointments', appointmentId));
        fetchAppointments();
      } catch (error) {
        console.error('Error deleting appointment:', error);
      }
    }
  };

  const handleUpdateAppointment = async (appointmentId: string, updates: Partial<Appointment>) => {
    try {
      await updateDoc(doc(db, 'appointments', appointmentId), updates);
      fetchAppointments();
    } catch (error) {
      console.error('Error updating appointment:', error);
    }
  };

  const filteredAppointments = selectedDate
    ? appointments.filter(apt => apt.date.toDateString() === selectedDate.toDateString())
    : appointments;

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b2013] via-[#29643a] to-[#e6f5db] p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Appointment Management</h2>

          {/* Add Appointment Form */}
          <form onSubmit={handleAddAppointment} className="mb-8 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select
                value={newAppointment.patientId}
                onChange={(e) => setNewAppointment({ ...newAppointment, patientId: e.target.value })}
                className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                required
              >
                <option value="">Select Patient</option>
                {patients.map(patient => (
                  <option key={patient.id} value={patient.id}>{patient.name}</option>
                ))}
              </select>

              <DatePicker
                selected={newAppointment.date}
                onChange={(date: Date | null) => date && setNewAppointment({ ...newAppointment, date })}
                className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 w-full"
                minDate={new Date()}
                dateFormat="MMMM d, yyyy"
                required
              />

              <input
                type="time"
                value={newAppointment.time}
                onChange={(e) => setNewAppointment({ ...newAppointment, time: e.target.value })}
                className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                required
              />

              <input
                type="text"
                placeholder="Notes (optional)"
                value={newAppointment.notes}
                onChange={(e) => setNewAppointment({ ...newAppointment, notes: e.target.value })}
                className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Add Appointment
            </button>
          </form>

          {/* Date Filter */}
          <div className="mb-8">
            <DatePicker
              selected={selectedDate}
              onChange={setSelectedDate}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              placeholderText="Filter by date..."
              dateFormat="MMMM d, yyyy"
              isClearable
            />
          </div>

          {/* Appointments List */}
          <div className="grid gap-6">
            {filteredAppointments.map((appointment) => (
              <div key={appointment.id} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
                <div className="relative bg-white p-6 rounded-lg">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-gray-800">{appointment.patientName}</h3>
                      <p className="text-gray-600">
                        {appointment.date.toLocaleDateString()} at {appointment.time}
                      </p>
                      {appointment.notes && (
                        <p className="text-gray-600 italic">"{appointment.notes}"</p>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <select
                        value={appointment.status}
                        onChange={(e) => handleUpdateAppointment(appointment.id, { status: e.target.value as 'pending' | 'confirmed' | 'cancelled' })}
                        className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                      >
                        <option value="pending">Pending</option>
                        <option value="confirmed">Confirmed</option>
                        <option value="cancelled">Cancelled</option>
                      </select>

                      <button
                        onClick={() => handleDeleteAppointment(appointment.id)}
                        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                      >
                        Delete
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
  );
};

export default AppointmentManagement;