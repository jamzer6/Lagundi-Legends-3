import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Function to handle navigation and scrolling
  const handleSectionClick = (sectionId: string) => {
    // If we're not on the landing page, navigate to landing page with hash
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
    } else {
      // If we're already on landing page, just scroll to the section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Handle scroll when navigating from another page
  useEffect(() => {
    if (location.hash && location.pathname === '/') {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 0);
      }
    }
  }, [location]);

  return (
    <footer className="bg-green-900 text-white py-8 px-8 md:px-16">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Left Section */}
        <div className="w-full md:w-1/5 mb-4 md:mb-0">
          <h3 className="text-xl font-bold">Silan Dental Clinic</h3>
          <p className="mt-2">
            Silan Dental Clinic offers high-quality dental care in Indang.
          </p>
          <p className="mt-1">
            Clinic Hours: Mon - Sat | 10:00 AM - 5:00 PM
          </p>
        </div>

        {/* Middle Section: Resources */}
        <div className="w-full md:w-1/5 mb-4 md:mb-0 text-center">
          <h4 className="text-lg font-bold">Resources</h4>
          <ul className="mt-2">
            <li>
              <button
                onClick={() => handleSectionClick('faqs')}
                className="hover:underline cursor-pointer"
              >
                FAQs
              </button>
            </li>
          </ul>
        </div>

        {/* Middle Section: Company */}
        <div className="w-full md:w-1/5 mb-4 md:mb-0 text-center">
          <h4 className="text-lg font-bold">Company</h4>
          <ul className="mt-2">
            <li>
              <button
                onClick={() => handleSectionClick('services')}
                className="hover:underline cursor-pointer"
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => handleSectionClick('about')}
                className="hover:underline cursor-pointer"
              >
                About Us
              </button>
            </li>
            <li>
              <button
                onClick={() => handleSectionClick('contact')}
                className="hover:underline cursor-pointer"
              >
                Contact Us
              </button>
            </li>
          </ul>
        </div>

        {/* Right Section: Visit Us */}
        <div className="w-full md:w-1/5 text-center mt-4 md:mt-0">
          <h4 className="text-lg font-bold">Visit Us</h4>
          <p>Find us at:</p>
          <p>Purok 1 Tambo Kulit Indang, Cavite</p>
          <iframe
            className="mt-4 w-3/4 h-40 mx-auto"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.424399603986!2d120.8566392!3d14.1777919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd83eee8e8bd05%3A0x513b471e0cc3c52a!2sSilan%20Dental%20Clinic!5e0!3m2!1sen!2sph!4v1677412437171!5m2!1sen!2sph"
            width="300"
            height="200"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-green-700 mt-8 pt-4 flex items-center justify-between">
        {/* Copyright Section */}
        <div className="flex-1 text-center">
          <p className="text-sm">©2024 Silan Dental Clinic</p>
        </div>
        {/* Social Icons */}
        <div className="flex items-center space-x-4">
          <a
            href="https://www.facebook.com/silan.dental.clinic.2024"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-white w-6 h-6 hover:text-gray-400"
            />
          </a>
          <a href="tel:+639385951894">
            <FontAwesomeIcon
              icon={faPhone}
              className="text-white w-6 h-6 hover:text-gray-400"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;