import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/authContext";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthenticated, logout } = useAuth();

  // Hide navbar on admin dashboard
  if (location.pathname === '/admin') {
    return null;
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate(`/#${targetId}`);
    } else {
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-green-900/90 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link to="/" className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 rounded-lg blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <img
                src="src/assets/images/logo.png"
                alt="Silan Dental Clinic"
                className="relative h-12 w-auto transform transition duration-300 group-hover:scale-105"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {["services", "about", "contact", "faqs"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={(e) => handleSmoothScroll(e, item)}
                className="relative group text-white text-sm font-medium"
              >
                <span className="relative z-10 px-4 py-2">
                  {item === "faqs" ? "FAQs" : item.charAt(0).toUpperCase() + item.slice(1)}
                </span>
                <div className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300">
                  <div className="h-full w-full bg-white/10 rounded-lg backdrop-blur-sm"></div>
                </div>
              </a>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center">
            {isAuthenticated ? (
              <button
                onClick={logout}
                className="group relative inline-flex items-center justify-center"
              >
                <div className="absolute -inset-px bg-gradient-to-r from-green-400 to-green-600 rounded-lg blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <span className="relative inline-flex items-center px-6 py-2 text-sm font-medium text-white bg-green-800 rounded-lg transition-all duration-300 group-hover:bg-green-700">
                  Logout
                </span>
              </button>
            ) : (
              <>
                {location.pathname !== "/signup" ? (
                  <Link
                    to="/signup"
                    className="group relative inline-flex items-center justify-center"
                  >
                    <div className="absolute -inset-px bg-gradient-to-r from-green-400 to-green-600 rounded-lg blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <span className="relative inline-flex items-center px-6 py-2 text-sm font-medium text-white bg-green-800 rounded-lg transition-all duration-300 group-hover:bg-green-700">
                      Don't Have an Account?
                      <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                        Sign Up →
                      </span>
                    </span>
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    className="group relative inline-flex items-center justify-center"
                  >
                    <div className="absolute -inset-px bg-gradient-to-r from-green-400 to-green-600 rounded-lg blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <span className="relative inline-flex items-center px-6 py-2 text-sm font-medium text-white bg-green-800 rounded-lg transition-all duration-300 group-hover:bg-green-700">
                      Login
                    </span>
                  </Link>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {isScrolled && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-green-800/80 backdrop-blur-sm text-white rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-110 group"
        >
          <span className="block transition-transform duration-300 group-hover:-translate-y-1">↑</span>
        </button>
      )}
    </nav>
  );
};

export default Navbar;