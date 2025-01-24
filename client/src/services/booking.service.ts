// booking.service.ts
import { db } from "../firebase/firebase.config";
import { collection, addDoc, getDocs, query, where, doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";

interface Appointment {
  patientId: string;
  patientName: string;
  date: string;
  service: string;
  status: string;
  createdAt: string;
}

const AppointmentService = {
  async addAppointment(appointment: Appointment): Promise<void> {
    try {
      const appointmentsRef = collection(db, "appointments");
      await addDoc(appointmentsRef, appointment);
    } catch (error) {
      console.error("Error adding appointment: ", error);
      throw error;
    }
  },

  async getAppointments(): Promise<Appointment[]> {
    try {
      const appointmentsRef = collection(db, "appointments");
      const querySnapshot = await getDocs(appointmentsRef);
      return querySnapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          patientId: data.patientId,
          patientName: data.patientName,
          date: data.date,
          service: data.service,
          status: data.status,
          createdAt: data.createdAt
        } as Appointment;
      });
    } catch (error) {
      console.error("Error getting appointments: ", error);
      throw error;
    }
  },

  async updateAppointment(id: string, data: Partial<Appointment>): Promise<void> {
    try {
      const appointmentRef = doc(db, "appointments", id);
      await updateDoc(appointmentRef, data);
    } catch (error) {
      console.error("Error updating appointment: ", error);
      throw error;
    }
  },

  async deleteAppointment(id: string): Promise<void> {
    try {
      const appointmentRef = doc(db, "appointments", id);
      await deleteDoc(appointmentRef);
    } catch (error) {
      console.error("Error deleting appointment: ", error);
      throw error;
    }
  }
};

export default AppointmentService;
