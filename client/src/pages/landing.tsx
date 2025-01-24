import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Landing: React.FC = () => {
  return (
    <>
      {/* Main Landing Section - Updated with modern gradient and layout */}
      <div className="pt-40 min-h-screen bg-gradient-to-br from-[#0b2013] via-[#29643a] to-[#e6f5db] flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-green-400 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-200 rounded-full filter blur-3xl"></div>
        </div>

        {/* Left Content Section - Enhanced typography and spacing */}
        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-8 text-left z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight">
            Your Smile, <br /> 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-200 to-white">
              Our Priority
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-green-100 leading-relaxed max-w-xl">
            We provide exceptional dental care for the Indang, Cavite community.
            With decades of trusted service, we're now embracing digital
            innovation for your convenience.
          </p>

          {/* Updated button design */}
          <Link to="/login">
            <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-green-600 rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 shadow-lg hover:shadow-xl transform hover:scale-105">
              <span>Book Your Appointment Now!</span>
              <svg className="w-5 h-5 ml-2 -mr-1 transition-transform duration-200 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </button>
          </Link>
        </div>

        {/* Right Image Section - Enhanced with modern card design */}
        <div className="w-full md:w-1/2 mt-12 md:mt-0 z-10">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-green-400 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <img
              src="src/assets/images/silan.jpg"
              alt="Dental Clinic"
              className="relative w-full h-auto rounded-lg shadow-2xl transform transition duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Services Section - Modernized cards and animations */}
      <div 
        id="services"
        className="w-full py-20 px-6 md:px-20 relative"
        style={{
          background: "linear-gradient(135deg, #c8e6c9 0%, #66bb6a 100%)",
          minHeight: "800px",
        }}
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQ9Ik0zMCAzMG0tMjggMGEyOCwyOCAwIDEsMSA1NiwwYTI4LDI4IDAgMSwxIC01NiwwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz4KPC9zdmc+')] opacity-10"></div>

        <h2 className="text-4xl md:text-7xl font-bold text-green-900 text-center mb-16 relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-900 to-green-600">
            Services Offered
          </span>
        </h2>

        {/* Updated scrollable container */}
        <div
          id="scroll-container"
          className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth relative z-10 mx-auto pb-8"
          style={{ maxWidth: "90%" }}
        >
          {/* Service Cards - Enhanced with glassmorphism effect */}
          {[
            {
              title: "Extraction",
              description: "Safe and effective tooth extractions to alleviate pain and prevent infections.",
              img: "src/assets/images/extraction.png",
            },
            {
              title: "Oral Prophylaxis",
              description: "Professional cleaning to maintain healthy gums and teeth.",
              img: "src/assets/images/oral prophylaxis.png",
            },
            {
              title: "Dental Fillings",
              description: "Restore decayed or damaged teeth with durable, high-quality fillings.",
              img: "src/assets/images/dental fillings.png",
            },
            {
              title: "Dentures",
              description: "Custom-made dentures to restore your smile and functionality.",
              img: "src/assets/images/dentures.png",
            },
            {
              title: "Braces",
              description: "Straighten and align teeth with expert orthodontic care.",
              img: "src/assets/images/braces.png",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="group relative min-w-[300px] h-[400px] rounded-2xl overflow-hidden shadow-2xl flex-shrink-0 transition-all duration-500 hover:transform hover:scale-105"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-60"></div>
              <img
                src={service.img}
                alt={service.title}
                className="h-full w-full object-cover transition-transform duration-500 transform group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500">
                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-green-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Arrows - Enhanced with better visibility */}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-green-800 bg-opacity-50 hover:bg-opacity-75 rounded-full p-4 text-white z-20 transition-all duration-300"
          onClick={() => {
            const container = document.getElementById("scroll-container");
            const itemWidth = container?.querySelector(".group")?.clientWidth || 0;
            container?.scrollBy({ left: -itemWidth * 3, behavior: "smooth" });
          }}
        >
          <span className="text-3xl">‹</span>
        </button>

        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-green-800 bg-opacity-50 hover:bg-opacity-75 rounded-full p-4 text-white z-20 transition-all duration-300"
          onClick={() => {
            const container = document.getElementById("scroll-container");
            const itemWidth = container?.querySelector(".group")?.clientWidth || 0;
            container?.scrollBy({ left: itemWidth * 1, behavior: "smooth" });
          }}
        >
          <span className="text-3xl">›</span>
        </button>
      </div>

      {/* About Us Section - Enhanced with modern card design */}
      <div id="about" className="py-32 px-6 md:px-20 bg-gradient-to-br from-green-50 to-green-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQ9Ik0zMCAzMG0tMjggMGEyOCwyOCAwIDEsMSA1NiwwYTI4LDI4IDAgMSwxIC01NiwwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz4KPC9zdmc+')] opacity-10"></div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center space-y-12 md:space-y-0 md:space-x-16 relative z-10">
          <div className="w-full md:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-green-400 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <img
                src="src/assets/images/about-us.png"
                alt="About Us"
                className="relative rounded-2xl shadow-2xl transform transition duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="p-8 bg-white bg-opacity-90 backdrop-blur-lg rounded-2xl shadow-xl">
              <h2 className="text-5xl md:text-7xl font-extrabold text-green-900 mb-8">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-900 to-green-600">
                  About Us
                </span>
              </h2>
              <div className="space-y-6 text-lg text-gray-700">
                <p className="leading-relaxed" style={{ textIndent: "1.5em" }}>
                  At <span className="font-bold text-xl text-green-800">Silan Dental Clinic</span>, we are committed to delivering the highest
                  quality of dental care with a personal touch. Our team of experienced professionals is dedicated to ensuring every patient
                  enjoys a healthy, confident smile.
                </p>
                <p className="leading-relaxed">
                  Established in the heart of Indang, Cavite, we have built a legacy of trust and excellence over the years. Our clinic combines modern technology with a warm and welcoming atmosphere to make your dental visits comfortable and stress-free.
                </p>
                <p className="leading-relaxed">
                  Your smile is our mission, and we're here to help you every step of the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section - Reduced size and adjusted spacing */}
      <div id="contact" className="bg-gradient-to-br from-green-100 to-green-200 py-20 px-6 md:px-20">
        <div className="relative bg-white bg-opacity-90 backdrop-blur-lg max-w-4xl mx-auto rounded-3xl shadow-2xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-start space-y-8 md:space-y-0 md:space-x-8">
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-900 to-green-600">
                  Get in Touch
                </span>
              </h2>
              <p className="text-lg text-gray-600">
                Have a question or feedback? We're here to help!
              </p>
              
              <form className="space-y-4">
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Name *"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
                  />
                  <input
                    type="text"
                    placeholder="Phone number *"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
                  />
                  <textarea
                    placeholder="Enter text here..."
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold text-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  SEND MESSAGE
                </button>
              </form>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 pt-4">
                <div className="text-gray-700">
                  <a href="tel:+639385951894" className="flex items-center text-green-600 hover:text-green-700 transition-colors duration-300">
                    <FontAwesomeIcon icon={faPhone} className="w-5 h-5 mr-2" />
                    <span className="font-semibold">PHONE</span>
                  </a>
                  <p className="mt-1 text-lg">+639385951894</p>
                </div>

                <div className="text-gray-700">
                  <a
                    href="https://www.facebook.com/silan.dental.clinic.2024"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-green-600 hover:text-green-700 transition-colors duration-300"
                  >
                    <FontAwesomeIcon icon={faFacebook} className="w-5 h-5 mr-2" />
                    <span className="font-semibold">FACEBOOK</span>
                  </a>
                  <p className="mt-1 text-lg">Silan Dental Clinic</p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.424399603986!2d120.8566392!3d14.1777919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd83eee8e8bd05%3A0x513b471e0cc3c52a!2sSilan%20Dental%20Clinic!5e0!3m2!1sen!2sph!4v1677412437171!5m2!1sen!2sph"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs Section - Enhanced with modern card design */}
      <div id="faqs" className="bg-gradient-to-br from-[#e6f5db] via-[#29643a] to-[#0b2013] py-32 px-6 md:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-100 to-white">
              Frequently Asked Questions
            </span>
          </h2>
          
          <div className="space-y-6">
            {[
              {
                question: "What services do you offer?",
                answer: "We offer extractions, oral prophylaxis, dental fillings, dentures, braces, and more!",
              },
              {
                question: "How can I book an appointment?",
                answer: "You can book an appointment online through our website or call us directly at our clinic.",
              },
              {
                question: "Do you accept walk-ins?",
                answer: "Yes, we do accept walk-ins, but we recommend booking an appointment to avoid waiting times.",
              },
              {
                question: "What are your clinic hours?",
                answer: "Our clinic is open from 9:00 AM to 6:00 PM, Monday to Saturday.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="group bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105"
              >
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-green-200 transition-colors duration-300">
                  {faq.question}
                </h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Feedback Section - Adjusted container size and restored names */}
      <div id="feedback" className="py-20 px-6 md:px-20 bg-gradient-to-br from-green-100 via-green-200 to-green-400 relative">
        {/* Background pattern remains the same */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQ9Ik0zMCAzMG0tMjggMGEyOCwyOCAwIDEsMSA1NiwwYTI4LDI4IDAgMSwxIC01NiwwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz4KPC9zdmc+')] opacity-10"></div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 relative z-10">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-900 to-green-600">
            What Our Clients Say
          </span>
        </h2>

        <div className="relative">
          <div
            id="feedback-scroll-container"
            className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth relative z-10 px-6 pb-8"
          >
            {[
              {
                name: "Anger Patalastas",
                feedback: "Anxious ako about my front teeth kasi by accident, nabangga ako sa mirror tapos nagkabiyak or nagcrack yung teeth ko. Pero sobrang saya ko kasi tinulungan ako ni Doc Silan. Grabe, super galing! Ngiting tagumpay ako.",
                date: "December 14, 2024",
                image: "src/assets/images/anger_testimonial.png",
              },
              {
                name: "Joy Gamutan",
                feedback: "Nagpabrace ako sa ibang dentist way back pre-pandemic, pero imbis na magkaintact yung ngipin ko, lalong humiwalay Kaya inulit ni Doc yung braces ko, in-adjust niya para magpantay. Dahil doon, lumipat na ako ng dentist. Super recommended ko si Doc, kasi finally, mapapantay na rin yung ngipin ko!",
                date: "January 1, 2025",
                image: "src/assets/images/joy_testimonial.png",
              },
              {
                name: "Sadness Patalastas",
                feedback: "Sobrang takot ng anak ko magpabunot, ayaw na ayaw niya, pero wala kaming choice kasi sobrang sakit ng ngipin niya. Pumunta kami kay Doc Silan, sobrang haba ng pila, pero worth it daw sabi ng anak ko kasi sobrang gaan ng kamay ni Doc, hindi niya namalayan nabunot na pala. Kinabukasan, naglalaro na siya, kaya super worth it! Medyo mahirap lang makakuha ng schedule kay Doc kasi laging fully booked!",
                date: "December 25, 2024",
                image: "src/assets/images/sadness_testimonial.png",
              },
              {
                name: "Fear Patalastas",
                feedback: "Hindi siya masakit magbunot, super galing!",
                date: "December 14, 2024",
                image: "src/assets/images/joy_testimonial.png",
              },
              {
                name: "Disgust Gamutan",
                feedback: "Top-notch service and a clean, modern clinic. Highly recommend for anyone looking for quality dental care!",
                date: "January 1, 2025",
                image: "src/assets/images/anger_testimonial.png",
              },
              {
                name: "Joy Patalastas",
                feedback: "Friendly staff and great attention to detail. My teeth have never felt better. Will definitely come back!",
                date: "December 25, 2024",
                image: "src/assets/images/sadness_testimonial.png",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="group relative flex flex-col bg-white bg-opacity-90 backdrop-blur-lg p-6 rounded-2xl shadow-xl w-80 h-80 flex-shrink-0 transform transition-all duration-300 hover:scale-105"
              >
                <div className="text-green-600 text-6xl font-serif mb-4 animate-bounce">"</div>
                
                <p className="text-gray-700 leading-relaxed mb-6 flex-grow overflow-y-auto scrollbar-hide">
                  {testimonial.feedback}
                </p>

                <div className="flex items-center mt-auto">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border-2 border-green-500 p-1"
                  />
                  <div className="ml-3">
                    <p className="font-semibold text-green-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll buttons */}
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-green-800 bg-opacity-50 hover:bg-opacity-75 rounded-full p-4 text-white z-20 transition-all duration-300"
            onClick={() => {
              const container = document.getElementById("feedback-scroll-container");
              const itemWidth = container?.querySelector(".group")?.clientWidth || 0;
              container?.scrollBy({ left: -itemWidth * 3, behavior: "smooth" });
            }}
          >
            <span className="text-3xl">‹</span>
          </button>

          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-green-800 bg-opacity-50 hover:bg-opacity-75 rounded-full p-4 text-white z-20 transition-all duration-300"
            onClick={() => {
              const container = document.getElementById("feedback-scroll-container");
              const itemWidth = container?.querySelector(".group")?.clientWidth || 0;
              container?.scrollBy({ left: itemWidth * 3, behavior: "smooth" });
            }}
          >
            <span className="text-3xl">›</span>
          </button>
        </div>

        {/* Send Feedback Button */}
        <div className="mt-16 text-center relative z-10">
          <Link to="/feedback">
            <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-green-600 rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 shadow-lg hover:shadow-xl transform hover:scale-105">
              <span>Send Feedback</span>
              <svg className="w-5 h-5 ml-2 -mr-1 transition-transform duration-200 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Landing;