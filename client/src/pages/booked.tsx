import 'react-datepicker/dist/react-datepicker.css';
import { Link } from "react-router-dom";

const Booked: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b2013] via-[#29643a] to-[#e6f5db] py-24 px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-green-400/30 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-green-300/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-green-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-md mx-auto text-center">
        <div className="mb-8">
          <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center animate-bounce-slow">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
          <div className="relative bg-white/95 backdrop-blur-2xl rounded-2xl shadow-2xl p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              You're All Set!
            </h1>
            <p className="text-gray-600 mb-8">
              Thank you for booking your appointment. Please allow 1-2 hours for approval. 
              You will receive an email confirmation once your appointment is finalized.
            </p>
            <Link to="/">
              <button className="group relative w-full overflow-hidden">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-green-400 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <div className="relative w-full px-6 py-3 bg-green-900 text-white rounded-xl transition-all duration-300 group-hover:bg-green-800 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 w-3 bg-white transform skew-x-[20deg] group-hover:animate-shine"></div>
                  <span className="relative z-10 text-base font-medium tracking-wide">
                    Return Home
                  </span>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booked;