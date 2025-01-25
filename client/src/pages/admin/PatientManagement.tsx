import React, { useState, useEffect } from 'react';
import { collection, query, getDocs, deleteDoc, doc, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase.config';

interface Patient {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  appointments: any[];
}

const PatientManagement: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [newPatient, setNewPatient] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    password: ''
  });

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const patientsQuery = query(collection(db, 'patients'));
      const querySnapshot = await getDocs(patientsQuery);
      const patientData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Patient[];
      setPatients(patientData);
    } catch (error) {
      console.error('Error fetching patients:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddPatient = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'patients'), {
        ...newPatient,
        appointments: []
      });
      fetchPatients();
      setNewPatient({ name: '', email: '', phoneNumber: '', password: '' });
    } catch (error) {
      console.error('Error adding patient:', error);
    }
  };

  const handleDeletePatient = async (patientId: string) => {
    if (window.confirm('Are you sure you want to delete this patient?')) {
      try {
        await deleteDoc(doc(db, 'patients', patientId));
        fetchPatients();
      } catch (error) {
        console.error('Error deleting patient:', error);
      }
    }
  };

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    patient.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Patient Management</h2>

          {/* Add Patient Form */}
          <form onSubmit={handleAddPatient} className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              value={newPatient.name}
              onChange={(e) => setNewPatient({ ...newPatient, name: e.target.value })}
              className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={newPatient.email}
              onChange={(e) => setNewPatient({ ...newPatient, email: e.target.value })}
              className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={newPatient.phoneNumber}
              onChange={(e) => setNewPatient({ ...newPatient, phoneNumber: e.target.value })}
              className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={newPatient.password}
              onChange={(e) => setNewPatient({ ...newPatient, password: e.target.value })}
              className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              required
            />
            <button
              type="submit"
              className="md:col-span-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Add Patient
            </button>
          </form>

          {/* Search Bar */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search patients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Patients List */}
          <div className="grid gap-6">
            {filteredPatients.map((patient) => (
              <div key={patient.id} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
                <div className="relative bg-white p-6 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{patient.name}</h3>
                      <p className="text-gray-600">{patient.email}</p>
                      <p className="text-gray-600">{patient.phoneNumber}</p>
                    </div>
                    <button
                      onClick={() => handleDeletePatient(patient.id)}
                      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                  {patient.appointments && patient.appointments.length > 0 && (
                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Appointment History</h4>
                      <ul className="space-y-2">
                        {patient.appointments.map((appointment, index) => (
                          <li key={index} className="text-gray-600">
                            {new Date(appointment.date).toLocaleDateString()} - {appointment.time}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientManagement;