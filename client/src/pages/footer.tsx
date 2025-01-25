import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSectionClick = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

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
    <footer className="relative bg-gradient-to-br from-green-900 to-green-800 text-white py-16 px-6 md:px-20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-green-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-200 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-100 to-white">
              Silan Dental Clinic
            </h3>
            <p className="text-green-100 leading-relaxed">
              Offering high-quality dental care in Indang with a commitment to excellence and patient comfort.
            </p>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-4 inline-block">
              <p className="text-sm font-medium">
                Clinic Hours:
                <br />
                Mon - Sat | 10:00 AM - 5:00 PM
              </p>
            </div>
          </div>

          {/* Resources Section */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-green-100">Resources</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleSectionClick('faqs')}
                  className="text-green-200 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <span className="relative">
                    FAQs
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </button>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-green-100">Company</h4>
            <ul className="space-y-2">
              {['services', 'about', 'contact'].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => handleSectionClick(section)}
                    className="text-green-200 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="relative capitalize">
                      {section === 'contact' ? 'Contact Us' : section}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Location Section */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-green-100">Visit Us</h4>
            <p className="text-green-200">Purok 1 Tambo Kulit Indang, Cavite</p>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative rounded-xl overflow-hidden">
                <iframe
                  className="w-full h-48 transform transition duration-500 group-hover:scale-105"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.424399603986!2d120.8566392!3d14.1777919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd83eee8e8bd05%3A0x513b471e0cc3c52a!2sSilan%20Dental%20Clinic!5e0!3m2!1sen!2sph!4v1677412437171!5m2!1sen!2sph"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-green-700/50 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-sm text-green-200">
            ©2024 Silan Dental Clinic. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6">
            <a
              href="https://www.facebook.com/silan.dental.clinic.2024"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="relative p-2 rounded-full bg-white bg-opacity-10 backdrop-blur-lg transition-all duration-300 group-hover:bg-opacity-20">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="w-5 h-5 text-green-200 transition-colors duration-300 group-hover:text-white"
                />
              </div>
            </a>
            <a
              href="tel:+639385951894"
              className="group"
            >
              <div className="relative p-2 rounded-full bg-white bg-opacity-10 backdrop-blur-lg transition-all duration-300 group-hover:bg-opacity-20">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="w-5 h-5 text-green-200 transition-colors duration-300 group-hover:text-white"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;