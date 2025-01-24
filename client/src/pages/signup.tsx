import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase/firebase.config";

const Signup: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      await setDoc(doc(db, "users", user.uid), {
        name,
        email
      });

      navigate('/login');
    } catch (err) {
      setError('Failed to create an account. Please try again.');
      console.error('Signup error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-[#0b2013] via-[#29643a] to-[#e6f5db] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-400 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-200 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Main Container */}
      <div className="relative w-full max-w-3xl mx-auto">
        <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl blur opacity-20"></div>
        <div className="relative flex bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden">
          {/* Left Image Section */}
          <div className="hidden md:block w-5/12 relative group">
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img
              src="src/assets/images/silan_clinic.jpg"
              alt="Dentist"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Right Form Section */}
          <div className="w-full md:w-7/12 p-6">
            <div className="w-full max-w-md mx-auto">
              <div className="text-center mb-6">
                <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-900 to-green-600">
                  Create Your Account
                </h1>
                <p className="mt-1 text-sm text-gray-600">Join Silan Dental Clinic today</p>
              </div>

              <form onSubmit={handleSignup} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-1 relative group">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="block w-full px-3 py-2 rounded-lg border border-gray-300 bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 outline-none"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-1 relative group">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="block w-full px-3 py-2 rounded-lg border border-gray-300 bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 outline-none"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-1 relative group">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="block w-full px-3 py-2 rounded-lg border border-gray-300 bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 outline-none"
                      placeholder="Enter your password"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Confirm Password <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-1 relative group">
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      className="block w-full px-3 py-2 rounded-lg border border-gray-300 bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 outline-none"
                      placeholder="Confirm your password"
                    />
                  </div>
                </div>

                {error && (
                  <div className="bg-red-50 text-red-500 px-3 py-2 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="relative w-full group mt-2"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-green-400 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative w-full px-4 py-2 bg-green-900 text-white rounded-lg transition-all duration-300 group-hover:bg-green-800 flex items-center justify-center">
                    {loading ? (
                      <div className="flex items-center">
                        <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Creating Account...
                      </div>
                    ) : (
                      'Sign Up'
                    )}
                  </div>
                </button>

                <div className="text-center mt-4">
                  <p className="text-sm text-gray-600">
                    Already have an account?{" "}
                    <Link 
                      to="/login" 
                      className="font-medium text-green-600 hover:text-green-500 transition-colors duration-300"
                    >
                      Login here
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;