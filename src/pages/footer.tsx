import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
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
              <a href="#" className="hover:underline">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Middle Section: Company */}
        <div className="w-full md:w-1/5 mb-4 md:mb-0 text-center">
          <h4 className="text-lg font-bold">Company</h4>
          <ul className="mt-2">
            <li>
              <a href="#" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section: Book an Appointment 
        <div className="w-full md:w-1/5 text-center md:text-right">
          <h4 className="text-lg font-bold">Book an Appointment</h4>
          <p className="mt-2">Book your smile with Silan today!</p>
          <button className="mt-4 px-4 py-2 bg-green-700 text-white rounded hover:bg-green-600">
            Get Started →
          </button>
        </div>
        */
        }
        

        {/* Right Section: Visit Us */}
        <div className="w-full md:w-1/5 text-center mt-4 md:mt-0">
          <h4 className="text-lg font-bold">Visit Us</h4>
          <p>Find us at:</p>
          <p>Indang, Cavite, Philippines</p>
          <iframe
            className="mt-4 w-3/4 h-40 mx-auto"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.147992609872!2d120.91895069999999!3d14.1550454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b9b9a25dfd4b1f%3A0x8c6539b9b9b98b6e!2sSilan%20Dental%20Clinic!5e0!3m2!1sen!2sph!4v1677412437171!5m2!1sen!2sph"
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
        {/* Facebook Icon */}
        <div>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-white w-6 h-6 hover:text-gray-400"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
