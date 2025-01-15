const Navbar = () => {
  return (
    <nav className="bg-green-900 text-white px-8 md:px-16 py-4 flex items-center justify-between fixed top-0 w-full z-50">
      {/* Logo and Clinic Name */}
      <div className="flex items-center space-x-4">
        <img
          src="/src/assets/images/silan_clinic.jpg"
          alt="Silan Dental Clinic"
          className="h-10"
        />
        <span className="text-lg font-semibold">Silan Dental Clinic</span>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-6 text-sm">
        <li>
          <a href="#services" className="hover:text-gray-300">
            Services
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-gray-300">
            About Us
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-gray-300">
            Contact Us
          </a>
        </li>
        <li>
          <a href="#faqs" className="hover:text-gray-300">
            FAQs
          </a>
        </li>
      </ul>

      {/* Call-to-Action Button */}
      <div>
        <a
          href="#signup"
          className="bg-white text-green-900 py-2 px-4 rounded-lg hover:bg-gray-100 text-sm"
        >
          Don't Have an Account? Sign Up Here →
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
