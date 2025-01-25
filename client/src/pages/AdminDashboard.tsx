import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/authContext';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/firebase.config';

interface Patient {
  id: string;
  name: string;
  email: string;
}

interface Appointment {
  id: string;
  patientName: string;
  date: string;
  time: string;
  status: string;
}

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [patients, setPatients] = useState<Patient[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Check if user is admin
  useEffect(() => {
    const checkAdminAccess = () => {
      if (!currentUser) {
        navigate('/login');
        return;
      }
      if (!currentUser.email?.endsWith('@silandental.com')) {
        setError('Access denied. This area is restricted to admin users only.');
        navigate('/');
        return;
      }
      setError(null);
      setLoading(false);
    };
    checkAdminAccess();
  }, [currentUser, navigate]);

  // Fetch patients and appointments
  useEffect(() => {
    const fetchData = async () => {
      try {
        const patientsSnapshot = await getDocs(collection(db, 'patients'));
        const appointmentsSnapshot = await getDocs(collection(db, 'appointments'));

        setPatients(
          patientsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Patient))
        );

        setAppointments(
          appointmentsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Appointment))
        );
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to fetch data.');
      }
    };
    if (!loading) fetchData();
  }, [loading]);

  // Add new patient
  const addPatient = async (name: string, email: string) => {
    try {
      const docRef = await addDoc(collection(db, 'patients'), { name, email });
      setPatients((prev) => [...prev, { id: docRef.id, name, email }]);
    } catch (err) {
      console.error('Error adding patient:', err);
    }
  };

  // Delete patient
  const deletePatient = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'patients', id));
      setPatients((prev) => prev.filter((patient) => patient.id !== id));
    } catch (err) {
      console.error('Error deleting patient:', err);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      {/* Patients Section */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Manage Patients</h2>
        <div className="mb-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => addPatient('John Doe', 'johndoe@example.com')}
          >
            Add Sample Patient
          </button>
        </div>
        <ul>
          {patients.map((patient) => (
            <li key={patient.id} className="flex justify-between items-center mb-2">
              <span>{patient.name} ({patient.email})</span>
              <button
                className="px-2 py-1 bg-red-500 text-white rounded"
                onClick={() => deletePatient(patient.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* Appointments Section */}
      <section>
        <h2 className="text-xl font-bold mb-4">Manage Appointments</h2>
        <ul>
          {appointments.map((appointment) => (
            <li key={appointment.id} className="mb-2">
              {appointment.patientName} - {appointment.date} at {appointment.time} ({appointment.status})
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default AdminDashboard;
