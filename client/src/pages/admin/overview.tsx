import React, { useState, useEffect } from 'react';
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebase.config';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AdminOverview: React.FC = () => {
  const [stats, setStats] = useState({
    totalPatients: 0,
    totalAppointments: 0,
    pendingAppointments: 0,
    completedAppointments: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const patientsSnapshot = await getDocs(collection(db, 'patients'));
      const appointmentsSnapshot = await getDocs(collection(db, 'appointments'));

      const appointments = appointmentsSnapshot.docs.map(doc => doc.data());
      const pending = appointments.filter(apt => apt.status === 'pending').length;
      const completed = appointments.filter(apt => apt.status === 'completed').length;

      setStats({
        totalPatients: patientsSnapshot.size,
        totalAppointments: appointmentsSnapshot.size,
        pendingAppointments: pending,
        completedAppointments: completed,
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const appointmentData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Appointments',
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        borderColor: 'rgb(22, 163, 74)',
        tension: 0.1,
      },
    ],
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b2013] via-[#29643a] to-[#e6f5db] p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Statistics Cards */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
            <div className="relative bg-white/90 backdrop-blur-xl p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-800">Total Patients</h3>
              <p className="text-3xl font-bold text-green-600">{stats.totalPatients}</p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
            <div className="relative bg-white/90 backdrop-blur-xl p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-800">Total Appointments</h3>
              <p className="text-3xl font-bold text-green-600">{stats.totalAppointments}</p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
            <div className="relative bg-white/90 backdrop-blur-xl p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-800">Pending Appointments</h3>
              <p className="text-3xl font-bold text-yellow-600">{stats.pendingAppointments}</p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
            <div className="relative bg-white/90 backdrop-blur-xl p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-800">Completed Appointments</h3>
              <p className="text-3xl font-bold text-blue-600">{stats.completedAppointments}</p>
            </div>
          </div>
        </div>

        {/* Chart Section */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
          <div className="relative bg-white/90 backdrop-blur-xl p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Appointment Trends</h3>
            <div className="h-[300px]">
              <Line
                data={appointmentData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                    y: {
                      beginAtZero: true,
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOverview;