import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMapMarkerAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const ContactSection: React.FC = () => {
  return (
    <div className="relative py-24 px-6 md:px-20 bg-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-green-100/50 to-transparent rounded-full blur-3xl transform rotate-12"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-green-100/50 to-transparent rounded-full blur-3xl transform -rotate-12"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-800 to-green-600 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions or ready to schedule your visit? Reach out to us today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
              <div className="relative bg-white/90 backdrop-blur-xl p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-800 to-green-600">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <FontAwesomeIcon icon={faPhone} className="text-green-600" />
                    <span>+63 938 595 1894</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-green-600" />
                    <span>Indang, Cavite</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <FontAwesomeIcon icon={faFacebook} className="text-green-600" />
                    <a href="https://facebook.com/silandental" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors">
                      facebook.com/silandental
                    </a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <FontAwesomeIcon icon={faEnvelope} className="text-green-600" />
                    <span>contact@silandental.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
            <div className="relative bg-white/90 backdrop-blur-xl p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-800 to-green-600">
                Business Hours
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium">Monday - Friday</span>
                  <span className="text-green-600">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium">Saturday</span>
                  <span className="text-green-600">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium">Sunday</span>
                  <span className="text-red-500">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map or Additional Information */}
        <div className="mt-12">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
            <div className="relative bg-white/90 backdrop-blur-xl p-6 rounded-xl">
              <p className="text-center text-gray-600">
                Visit us at our clinic in Indang, Cavite. We're committed to providing the best dental care for you and your family.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;