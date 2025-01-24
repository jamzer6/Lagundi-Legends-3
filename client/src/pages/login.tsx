import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../auth/authContext";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await login(email, password);
      alert("Login successful!");
      navigate('/');
    } catch (err) {
      setError('Failed to login. Please try again.');
      console.error('Login error:', err);
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
      <div className="relative w-full max-w-5xl">
        <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl blur opacity-20"></div>
        <div className="relative flex bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden">
          {/* Left Image Section */}
          <div className="hidden md:block w-1/2 relative group">
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img
              src="src/assets/images/silan_clinic.jpg"
              alt="Dentist"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Right Form Section */}
          <div className="w-full md:w-1/2 p-8 sm:p-12">
            <div className="w-full max-w-md mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-900 to-green-600">
                  Welcome Back
                </h1>
                <p className="mt-2 text-gray-600">Login to your account</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
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
                      className="block w-full px-4 py-3 rounded-xl border border-gray-300 bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 outline-none"
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
                      className="block w-full px-4 py-3 rounded-xl border border-gray-300 bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 outline-none"
                      placeholder="Enter your password"
                    />
                  </div>
                </div>

                {error && (
                  <div className="bg-red-50 text-red-500 px-4 py-3 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="relative w-full group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-green-400 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative w-full px-6 py-3 bg-green-900 text-white rounded-xl transition-all duration-300 group-hover:bg-green-800 flex items-center justify-center">
                    {loading ? (
                      <div className="flex items-center">
                        <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Logging in...
                      </div>
                    ) : (
                      'Login'
                    )}
                  </div>
                </button>

                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Don't have an account?{" "}
                    <Link 
                      to="/signup" 
                      className="font-medium text-green-600 hover:text-green-500 transition-colors duration-300"
                    >
                      Sign up here
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

export default Login;