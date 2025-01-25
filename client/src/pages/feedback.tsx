import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase.config';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await addDoc(collection(db, 'feedback'), {
        ...formData,
        status: 'pending',
        isFeatured: false,
        createdAt: new Date().toISOString(),
      });

      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Error submitting feedback:', err);
      setError('Failed to submit feedback. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b2013] via-[#29643a] to-[#e6f5db] py-16 px-4 md:px-8 relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-green-400/30 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-green-300/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-green-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
            Your Voice Matters
          </h2>
          <p className="text-green-100 text-lg font-light max-w-xl mx-auto">
            Help us create better experiences for everyone
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
          <div className="relative bg-white/95 backdrop-blur-2xl rounded-2xl shadow-2xl p-6">
            {error && (
              <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-3 rounded-lg animate-shake">
                <p className="text-red-700">{error}</p>
              </div>
            )}

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="block w-full px-3 py-2 rounded-xl border border-gray-200 bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 outline-none hover:border-green-300"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="block w-full px-3 py-2 rounded-xl border border-gray-200 bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 outline-none hover:border-green-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="block w-full px-3 py-2 rounded-xl border border-gray-200 bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 outline-none resize-none hover:border-green-300"
                    placeholder="Share your thoughts with us..."
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full overflow-hidden"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-green-400 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                    <div className="relative w-full px-6 py-2.5 bg-green-900 text-white rounded-xl transition-all duration-300 group-hover:bg-green-800 flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 w-3 bg-white transform skew-x-[20deg] group-hover:animate-shine"></div>
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </div>
                      ) : (
                        <span className="relative z-10 text-base font-medium tracking-wide">
                          Send Feedback
                        </span>
                      )}
                    </div>
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="mb-6">
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center animate-bounce-slow">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-600 text-base max-w-md mx-auto">
                  Your feedback has been received. We value your input and will use it to enhance our services.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 px-4 py-2 text-green-600 hover:text-green-700 font-medium transition-colors duration-300 rounded-lg hover:bg-green-50"
                >
                  Send another feedback
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;