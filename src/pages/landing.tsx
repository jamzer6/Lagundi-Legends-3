import React from "react";
import { Link } from "react-router-dom";

const Landing: React.FC = () => {
  return (
    <div>
      {/* Landing Section */}
      <div className="min-h-screen bg-gradient-to-br from-lime-300 via-green-500 to-green-800 flex items-center justify-center py-20">
        {/* Main Container */}
        <div className="flex flex-col md:flex-row items-center w-[90%] max-w-5xl overflow-hidden rounded-lg shadow-lg bg-white">
          {/* Left Content Section */}
          <div className="w-full md:w-1/2 p-10 flex flex-col items-center justify-center text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-green-900 mb-6">
              Your Smile, Our Priority
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              We provide exceptional dental care for the Indang, Cavite community.
              With decades of trusted service, we're now embracing digital innovation
              for your convenience.
            </p>
            <Link to="/appointment">
              <button className="bg-green-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-green-700 transition-all">
                Book Your Appointment Now!
              </button>
            </Link>
          </div>

          {/* Right Image Section */}
          <div className="w-full md:w-1/2 relative">
            <img
              src="src\assets\images\silan.jpg"
              alt="Dental Clinic"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-green-900 opacity-30"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
