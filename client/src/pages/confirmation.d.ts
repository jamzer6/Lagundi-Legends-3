import { User } from 'firebase/auth';

declare interface AppointmentData {
  patientId: string;
  patientName: string;
  email: string;
  date: string;
  service: string;
  status: string;
  createdAt: string;
}