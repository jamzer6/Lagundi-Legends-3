import { useState, useEffect } from 'react';
import { collection, query, where, orderBy, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase.config';
import type { Feedback } from '../types/feedback';

export const useFeedbacks = (approvedOnly: boolean = false) => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        let feedbackQuery = query(
          collection(db, 'feedback'),
          orderBy('createdAt', 'desc')
        );

        if (approvedOnly) {
          feedbackQuery = query(
            collection(db, 'feedback'),
            where('status', '==', 'approved'),
            orderBy('createdAt', 'desc')
          );
        }

        const querySnapshot = await getDocs(feedbackQuery);
        const feedbackData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        })) as Feedback[];

        setFeedbacks(feedbackData);
        setError(null);
      } catch (err) {
        console.error('Error fetching feedbacks:', err);
        setError('Failed to load feedbacks');
      } finally {
        setLoading(false);
      }
    };

    fetchFeedbacks();
  }, [approvedOnly]);

  return { feedbacks, loading, error };
};

export default useFeedbacks;