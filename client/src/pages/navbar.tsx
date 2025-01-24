import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/authContext";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthenticated, logout } = useAuth();

  // Detecting scroll state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to handle smooth scrolling or navigation
  const handleSmoothScroll = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    // If we are not on the landing page, navigate to it with the section hash
    if (location.pathname !== "/") {
      navigate(`/#${targetId}`);
    } else {
      // If we are on the landing page, just scroll to the section
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  // Scroll to top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="bg-green-800 text-white px-8 md:px-16 py-4 h-[80px] flex items-center justify-between fixed top-0 w-full z-50">
      <div className="flex items-center space-x-4">
        <Link to="/">
          <img
            src="src/assets/images/Silan Dental Clinic.png"
            alt="Silan Dental Clinic"
            style={{ width: "120px", height: "auto" }}
            className="h-10"
          />
        </Link>
      </div>

      <ul className="hidden md:flex space-x-6 text-sm">
        {[
          { id: "services", label: "Services" },
          { id: "about", label: "About Us" },
          { id: "contact", label: "Contact Us" },
          { id: "faqs", label: "FAQs" },
        ].map((item) => (
          <li key={item.id}>
            <div className="relative h-12 w-40 overflow-hidden text-white shadow-2xl transition-all duration-200 before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-0 before:bg-green-900 before:duration-300 before:ease-out hover:text-black hover:bg-white hover:shadow-none hover:before:h-40 hover:before:w-40 hover:before:opacity-10 flex items-center justify-center rounded-full">
              <a
                href={`#${item.id}`}
                onClick={(e) => handleSmoothScroll(e, item.id)}
                className="relative z-10 py-2 px-4 text-sm"
              >
                {item.label}
              </a>
            </div>
          </li>
        ))}
      </ul>

      <div>
        {!isAuthenticated ? (
          <>
            {location.pathname !== "/signup" && (
              <div className="border-2 border-transparent rounded-lg mr-4">
                <Link
                  to="/signup"
                  className="bg-white text-green-900 py-2 px-4 rounded-lg hover:bg-black hover:text-white text-sm"
                >
                  Don't Have an Account? Sign Up Here →
                </Link>
              </div>
            )}

            {location.pathname === "/signup" && (
              <div className="border-2 border-transparent rounded-lg mr-4">
                <Link
                  to="/login"
                  className="bg-white text-green-900 py-2 px-4 rounded-lg hover:bg-black hover:text-white text-sm"
                >
                  Login
                </Link>
              </div>
            )}
          </>
        ) : (
          <button
            onClick={() => {
              if (window.confirm("Are you sure you want to log out?")) {
                logout();
                navigate("/");
              }
            }}
            className="bg-white text-green-900 py-2 px-4 rounded-lg hover:bg-black hover:text-white text-sm"
          >
            Logout
          </button>
        )}
      </div>

      {isScrolled && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-green-800 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-all duration-200"
        >
          ↑
        </button>
      )}
    </nav>
  );
};

export default Navbar;
