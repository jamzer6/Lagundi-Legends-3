export interface Appointment {
  patientId: string;
  patientName: string;
  email: string;
  phoneNumber?: string;
  date: string;
  service: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
}