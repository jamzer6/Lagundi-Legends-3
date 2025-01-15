import { Link, useLocation } from "react-router-dom"; // Import Link and useLocation

const Navbar = () => {
  const location = useLocation(); // Get the current location (path)

  return (
    <nav className="bg-green-900 text-white px-8 md:px-16 py-4 h-[80px] flex items-center justify-between fixed top-0 w-full z-50">
      {/* Logo and Clinic Name */}
      <div className="flex items-center space-x-4">
        <img
          src="src/assets/images/Silan Dental Clinic.png"
          alt="Silan Dental Clinic"
          style={{ width: "80px", height: "auto" }}
          className="h-10"
        />
        <span className="text-lg font-semibold">Silan Dental Clinic</span>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-6 text-sm">
        <li>
          <div className="relative h-12 w-40 overflow-hidden border border-green-900 text-white shadow-2xl transition-all duration-200 before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-0 before:bg-green-700 before:duration-300 before:ease-out hover:text-black hover:bg-white hover:shadow-none hover:before:h-40 hover:before:w-40 hover:before:opacity-10 flex items-center justify-center rounded-full">
            <a href="#services" className="relative z-10 py-2 px-4 text-sm">
              Services
            </a>
          </div>
        </li>
        <li>
          <div className="relative h-12 w-40 overflow-hidden border border-green-900 text-white shadow-2xl transition-all duration-200 before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-0 before:bg-green-700 before:duration-300 before:ease-out hover:text-black hover:bg-white hover:shadow-none hover:before:h-40 hover:before:w-40 hover:before:opacity-10 flex items-center justify-center rounded-full">
            <a href="#about" className="relative z-10 py-2 px-4 text-sm">
              About Us
            </a>
          </div>
        </li>
        <li>
          <div className="relative h-12 w-40 overflow-hidden border border-green-900 text-white shadow-2xl transition-all duration-200 before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-0 before:bg-green-700 before:duration-300 before:ease-out hover:text-black hover:bg-white hover:shadow-none hover:before:h-40 hover:before:w-40 hover:before:opacity-10 flex items-center justify-center rounded-full">
            <a href="#contact" className="relative z-10 py-2 px-4 text-sm">
              Contact Us
            </a>
          </div>
        </li>
        <li>
          <div className="relative h-12 w-40 overflow-hidden border border-green-900 text-white shadow-2xl transition-all duration-200 before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-0 before:bg-green-700 before:duration-300 before:ease-out hover:text-black hover:bg-white hover:shadow-none hover:before:h-40 hover:before:w-40 hover:before:opacity-10 flex items-center justify-center rounded-full">
            <a href="#faqs" className="relative z-10 py-2 px-4 text-sm">
              FAQs
            </a>
          </div>
        </li>
      </ul>

      {/* Call-to-Action Buttons */}
      <div>
        {location.pathname === "/" && (
          // Show the "Sign Up Here" button only on the Login page
          <div className="border-2 border-transparent rounded-lg">
            <Link
              to="/signup" // Navigate to the signup page
              className="bg-white text-green-900 py-2 px-4 rounded-lg hover:bg-black hover:text-white text-sm"
            >
              Don't Have an Account? Sign Up Here →
            </Link>
          </div>
        )}

        {location.pathname === "/signup" && (
          // Show Login button only on the SignUp page
          <div className="border-2 border-transparent rounded-lg mr-4">
            <Link
              to="/" // Navigate to the login page
              className="bg-white text-green-900 py-2 px-4 rounded-lg hover:bg-black hover:text-white text-sm"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
