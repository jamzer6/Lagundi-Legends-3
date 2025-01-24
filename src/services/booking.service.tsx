import { db } from "../../firebase.config";
import { collection, addDoc, getDocs, query, where, doc, getDoc, updateDoc, deleteDoc, DocumentReference, DocumentData } from "firebase/firestore";

interface Appointment {
  id?: string;
  date: string;
  time: string;
  patientName: string;
  patientEmail: string;
  [key: string]: any; // Allow additional properties
}

const appointmentCollectionRef = collection(db, "appointments");

class AppointmentService {
  addAppointment = (newAppointment: Appointment): Promise<DocumentReference<DocumentData>> => {
    return addDoc(appointmentCollectionRef, newAppointment);
  }

  updateAppointment = (id: string, updatedAppointment: Partial<Appointment>): Promise<void> => {
    const appointmentDoc = doc(db, "appointments", id);
    return updateDoc(appointmentDoc, updatedAppointment);
  }

  deleteAppointment = (id: string): Promise<void> => {
    const appointmentDoc = doc(db, "appointments", id);
    return deleteDoc(appointmentDoc);
  };
  
  getAllAppointments = (): Promise<DocumentData[]> => {
    return getDocs(appointmentCollectionRef).then(snapshot => {
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    });
  }

  getAppointmentById = (id: string): Promise<DocumentData | undefined> => {
    const appointmentDoc = doc(db, "appointments", id);
    return getDoc(appointmentDoc).then(doc => {
      if (doc.exists()) {
        return { id: doc.id, ...doc.data() };
      } else {
        return undefined;
      }
    });
  }
}

export default new AppointmentService();