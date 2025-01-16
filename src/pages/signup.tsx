import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Signup: React.FC = () => {
  return (
    <div>
      {/* Main Signup Section */}
      <div className="pt-40 min-h-screen bg-gradient-to-br from-green-500 via-green-600 to-green-900 flex items-center justify-center py-20">
        {/* Main Container */}
        <div className="flex w-[90%] max-w-5xl overflow-hidden rounded-lg shadow-lg bg-white">
          {/* Left Image Section */}
          <div className="w-1/2 relative">
            <img
              src="src/assets/images/silan_clinic.jpg"
              alt="Dentist"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-green-900 opacity-30"></div>
          </div>

          {/* Right Form Section */}
          <div className="w-1/2 flex items-center justify-center p-10">
            <div className="w-full max-w-md">
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-green-900">
                  Silan Dental Clinic
                </h1>
                <p className="text-lg text-gray-600">Create Your Account</p>
              </div>
              <form>
                {/* Name Input */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                {/* Email Input */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                {/* Password Input */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter your password"
                    required
                  />
                </div>

                {/* Confirm Password Input */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Confirm Password <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Confirm your password"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 bg-green-900 text-white rounded-md hover:bg-green-700"
                >
                  SIGN UP
                </button>
              </form>

              {/* Redirect to Login */}
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">
                  Already have an account?{" "}
                  <Link to="/" className="text-green-600 hover:underline">
                    Login here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
