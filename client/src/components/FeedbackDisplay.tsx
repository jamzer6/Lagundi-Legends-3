import React from 'react';
import useFeedbacks from '../hooks/useFeedbacks';
import { Link } from 'react-router-dom';
import ModernFeedbackCard from './ModernFeedbackCard';

const FeedbackDisplay: React.FC = () => {
  const { feedbacks, loading, error } = useFeedbacks(true); // Only fetch approved feedbacks

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="relative py-24 px-6 md:px-20 bg-gradient-to-br from-green-50 via-green-100 to-green-200 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-green-400/20 to-transparent rounded-full blur-3xl transform rotate-12"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-green-400/20 to-transparent rounded-full blur-3xl transform -rotate-12"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="relative text-center mb-16">
          <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 rounded-lg blur opacity-25"></div>
          <h2 className="relative text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-800 to-green-600">
            Patient Testimonials
          </h2>
        </div>

        {/* Feedback Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {feedbacks.map((feedback) => (
            <div key={feedback.id} className="relative group transform transition-all duration-300 hover:scale-[1.02]">
              <ModernFeedbackCard key={feedback.id} feedback={feedback} />
            </div>
          ))}
        </div>

        {/* Share Experience Button */}
        <div className="mt-12 flex justify-center">
          <Link to="/feedback" className="group relative inline-block">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-green-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
            <button className="relative px-8 py-4 bg-green-600 text-white rounded-lg text-lg font-semibold transform transition-all duration-200 hover:bg-green-700 active:scale-95">
              Share Your Experience
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeedbackDisplay;