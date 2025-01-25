export interface Feedback {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
  status: 'pending' | 'approved' | 'rejected';
  isFeatured: boolean;
}