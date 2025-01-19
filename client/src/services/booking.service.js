import { db } from "../firebase.config";

import { collection, addDoc, getDocs, query, where, doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";

const appointmentCollectionRef = collection(db, "appointments");
class AppointmentService {
    addAppointment = (newAppointment) => {
        return addDoc(appointmentCollectionRef, newAppointment);
    }

    updateAppointment = (id, updatedAppointment) => {
        const appointmentDoc = doc(db, "appointments", id);
        return updateDoc(appointmentDoc, updatedAppointment);
    }

    deleteAppointment = (id) => {
        const appointmentDoc = doc(db, "appointments", id);
        return deleteDoc(appointmentDoc);
    };
    
    getAllAppointments = () => {
        return getDocs(appointmentCollectionRef);
    }

    getAppointmentById = (id) => {
        const appointmentDoc = doc(db, "appointments", id);
        return getDoc(appointmentDoc);
    }
}

export default new AppointmentService();