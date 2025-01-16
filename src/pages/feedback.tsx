import React, { useState } from 'react';

const SendFeedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would normally send the form data to your server or API
    console.log('Feedback Submitted:', formData);
    setIsSubmitted(true);
    // Optionally, clear the form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="pt-40 py-16 px-10 bg-gradient-to-br from-green-100 via-green-200 to-green-400">
      <h2 className="text-3xl md:text-4xl font-bold text-green-900 text-center mb-10">
        Send Us Your Feedback
      </h2>

      {/* Feedback Form */}
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block text-lg font-semibold text-green-900 mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border-2 border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-lg font-semibold text-green-900 mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border-2 border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-lg font-semibold text-green-900 mb-2">
              Your Feedback
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border-2 border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              rows={5}
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-green-600 text-white py-3 px-8 rounded-lg text-xl font-semibold hover:bg-green-700 transition-colors duration-300"
            >
              Send Feedback
            </button>
          </div>
        </form>
      </div>

      {isSubmitted && (
        <div className="mt-8 text-center text-green-900 font-semibold">
          <p>Thank you for your feedback! We will get back to you soon.</p>
        </div>
      )}
    </div>
  );
};
    
export default SendFeedback;
