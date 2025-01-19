import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";



const Landing: React.FC = () => {
  return (
    <>
      {/* Main Landing Section */}
      <div className="pt-40 min-h-screen bg-gradient-to-br from-[#0b2013] via-[#29643a] to-[#e6f5db] flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-20">
        {/* Left Content Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Your Smile, <br /> Our Priority
          </h1>
          <p className="text-lg md:text-xl text-white leading-relaxed">
            We provide exceptional dental care for the Indang, Cavite community.
            With decades of trusted service, we're now embracing digital
            innovation for your convenience.
          </p>

          {/* Link to login */}
          <Link to="/appointment">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-all">
              Book Your Appointment Now!
            </button>
          </Link>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="src/assets/images/silan.jpg"
            alt="Dental Clinic"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      {/* Services Offered Section */}
<div
  id="services"
  className="w- full py-8 px-20 md:px-20 relative pb-16"
  style={{
    background: "linear-gradient(to right, #c8e6c9 60%, #66bb6a 100%)",
  }}
>
  <h2 className="text-3xl md:text-6xl font-bold text-green-900 text-center mb-10">
    Services Offered
  </h2>

  {/* Scrollable Content */}
  <div
    id="scroll-container"
    className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth relative z-10 mx-16"
  >
    {/* Service Cards */}
    {[
      {
        title: "Extraction",
        description:
          "Safe and effective tooth extractions to alleviate pain and prevent infections.",
        img: "src/assets/images/extraction.png",
      },
      {
        title: "Oral Prophylaxis",
        description:
          "Professional cleaning to maintain healthy gums and teeth.",
        img: "src/assets/images/oral prophylaxis.png",
      },
      {
        title: "Dental Fillings",
        description:
          "Restore decayed or damaged teeth with durable, high-quality fillings.",
        img: "src/assets/images/dental fillings.png",
      },
      {
        title: "Dentures",
        description:
          "Custom-made dentures to restore your smile and functionality.",
        img: "src/assets/images/dentures.png",
      },
      {
        title: "Braces",
        description:
          "Straighten and align teeth with expert orthodontic care.",
        img: "src/assets/images/braces.png",
      },
    ].map((service, index) => (
      <div
        key={index}
        className="group relative min-w-[250px] h-64 bg-gray-100 rounded-lg overflow-hidden shadow-2xl flex-shrink-0 transition-all"
      >
        {/* Service Image */}
        <img
          src={service.img}
          alt={service.title}
          className="h-full w-full object-cover transition-transform duration-300 transform group-hover:scale-110"
        />

        {/* Service Title */}
        <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white bg-black bg-opacity-50 px-2 py-1 rounded-lg z-10 group-hover:hidden">
          {service.title}
        </h3>

        {/* Description on Hover */}
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white text-sm p-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 transform translate-y-full">
          {service.description}
        </div>
      </div>
    ))}
  </div>

   {/* Left Arrow */}
   <button
    className="absolute top-1/2 left-0 transform -translate-y-1/2 h-[100%] w-16 text-white flex justify-center items-center z-20 group"
    onClick={() => {
      const container = document.getElementById("scroll-container");
      const itemWidth = container?.querySelector(".group")?.clientWidth || 0;
      const scrollDistance = itemWidth * 3; // Scroll by 3 images at a time
      container?.scrollBy({
        left: -scrollDistance,
        behavior: "smooth",
      });
    }}
  >
    <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-green-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <span className="text-2xl z-10">&#x2039;</span>
  </button>

  {/* Right Arrow */}
  <button
    className="absolute top-1/2 right-0 transform -translate-y-1/2 h-[100%] w-16 text-white flex justify-center items-center z-20 group"
    onClick={() => {
      const container = document.getElementById("scroll-container");
      const itemWidth = container?.querySelector(".group")?.clientWidth || 0;
      const scrollDistance = itemWidth * 3; // Scroll by 3 images at a time
      container?.scrollBy({
        left: scrollDistance,
        behavior: "smooth",
      });
    }}
  >
    <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-l from-green-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <span className="text-2xl z-10">&#x203A;</span>
  </button>
</div>

{/* About Us Section */}
<div id="about" className="py-20 px-10 md:px-20 bg-gradient-to-br from-green-50 to-green-200">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-10">
    {/* About Us Image */}
    <div className="w-full md:w-1/2">
      <img
        src="src/assets/images/about-us.png"
        alt="About Us"
        className="w-full h-full rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
      />
    </div>

    {/* About Us Text */}
    <div className="w-full md:w-1/2 mt-4">
      <div className="p-6 bg-gradient-to-br from-green-100 to-green-200 rounded-lg shadow-md">
        <h2 className="text-5xl md:text-7xl font-extrabold text-green-900 text-center mb-16">
          About Us
        </h2>
        <p className="text-lg text-gray-800 leading-relaxed mb-6" style={{ textIndent: "1.5em" }}>
          At <span className="font-bold text-xl">Silan Dental Clinic</span>, we are committed to delivering the highest
          quality of dental care with a personal touch. Our team of experienced professionals is dedicated to ensuring every patient
          enjoys a healthy, confident smile.
        </p>
        <p className="text-lg text-gray-800 leading-relaxed mb-6">
          Established in the heart of Indang, Cavite, we have built a legacy of trust and excellence over the years. Our clinic combines modern technology with a warm and welcoming atmosphere to make your dental visits comfortable and stress-free.
        </p>
        <p className="text-lg text-gray-800 leading-relaxed">
          Your smile is our mission, and we’re here to help you every step of the way.
        </p>
      </div>
    </div>
  </div>
</div>



      {/* Contact Us Section */}
<div id="contact" className="bg-gradient-to-br from-green-100 to-green-200 py-32 px-10 flex justify-center items-center">
  <div className="relative bg-white w-full max-w-6xl rounded-[30px] shadow-xl px-10 py-12 flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-10">
    {/* Contact Form */}
    <div className="w-full md:w-1/2 space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold text-green-900">
        Get in <span className="text-green-600">Touch</span>
      </h2>
      <p className="text-lg text-gray-700">
        Have a question or feedback? We're here to help!
      </p>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Name *"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
        />
        <input
          type="text"
          placeholder="Phone number *"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
        />
        <textarea
          placeholder="Enter text here..."
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
        ></textarea>
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all"
        >
          SEND
        </button>
      </form>
      <div className="flex space-x-6 pt-4">
        {/* Phone Section */}
        <div className="text-gray-700">
          <p>
            <a href="tel:+639385951894" className="flex items-center text-green-600 hover:underline">
              <FontAwesomeIcon icon={faPhone} className="w-5 h-5 mr-2" /> PHONE
            </a>
          </p>
          <p>+639385951894</p>
        </div>

        {/* Facebook Section */}
        <div className="text-gray-700">
          <p>
            <a
              href="https://www.facebook.com/silan.dental.clinic.2024"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-green-600 hover:underline"
            >
              <FontAwesomeIcon icon={faFacebook} className="w-5 h-5 mr-2" /> FACEBOOK
            </a>
          </p>
          <p>Silan Dental Clinic</p>
        </div>
      </div>
    </div>

    {/* Google Map Section */}
    <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-md">
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



{/* FAQs Section */}
<div id="faqs" className="bg-gradient-to-br from-[#e6f5db] via-[#29643a] to-[#0b2013] py-32 px-10 md:px-20 text-white">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 animate__animated animate__fadeIn animate__delay-1s">
    FAQs
  </h2>
  <div className="max-w-4xl mx-auto space-y-6">
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
        className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 hover:rotate-2"
      >
        <h3 className="text-lg font-semibold mb-2 text-green-900 hover:text-green-600 transition-all duration-300">
          {faq.question}
        </h3>
        <p className="text-sm text-gray-700">{faq.answer}</p>
      </div>
    ))}
  </div>
</div>

{/* Feedback Section */}
<div id="feedback" className="py-16 px-10 bg-gradient-to-br from-green-100 via-green-200 to-green-400 relative">
  {/* Section Title */}
  <h2 className="text-3xl md:text-4xl font-bold text-green-900 text-center mb-10">
    What Our Clients Say
  </h2>

  {/* Feedback Cards Container */}
  <div className="relative">
    {/* Scrollable Feedback Section */}
    <div
      id="feedback-scroll-container"
      className="flex gap-6 overflow-x-auto scrollbar-hide hover:scrollbar-visible scroll-smooth relative z-10 px-10"
      
      >
      {[
        {
          name: "Joy Dimaguiba",
          feedback:
            "The dentist was amazing—professional, gentle, and made me feel at ease. My appointment was smooth and stress-free! The dentist was amazing—professional, gentle, and made me feel at ease. My appointment was smooth and stress-free! The dentist was amazing—professional, gentle, and made me feel at ease. My appointment was smooth and stress-free!",
          date: "December 14, 2024",
          image: "src/assets/images/joy_testimonial.png",
        },
        {
          name: "Anger Patalastas",
          feedback:
            "Top-notch service and a clean, modern clinic. Highly recommend for anyone looking for quality dental care!",
          date: "January 1, 2025",
          image: "src/assets/images/anger_testimonial.png",
        },
        {
          name: "Disgust Gamutan",
          feedback:
            "Friendly staff and great attention to detail. My teeth have never felt better. Will definitely come back!",
          date: "December 25, 2024",
          image: "src/assets/images/sadness_testimonial.png",
        },
        {
          name: "Joy Dimaguiba",
          feedback:
            "The dentist was amazing—professional, gentle, and made me feel at ease. My appointment was smooth and stress-free!",
          date: "December 14, 2024",
          image: "src/assets/images/joy_testimonial.png",
        },
        {
          name: "Anger Patalastas",
          feedback:
            "Top-notch service and a clean, modern clinic. Highly recommend for anyone looking for quality dental care!",
          date: "January 1, 2025",
          image: "src/assets/images/anger_testimonial.png",
        },
        {
          name: "Disgust Gamutan",
          feedback:
            "Friendly staff and great attention to detail. My teeth have never felt better. Will definitely come back!",
          date: "December 25, 2024",
          image: "src/assets/images/sadness_testimonial.png",
        },
      ].map((testimonial, index) => (
        <div
          key={index}
          className="flex flex-col bg-white p-6 rounded-xl shadow-lg w-96 h-72 flex-shrink-0 transform transition-transform hover:scale-105 hover:shadow-xl"
          style={{
            background: "linear-gradient(to bottom, #ffffff, #e6f5db)",
            position: 'relative',
          }}
        >
          {/* Enlarged and Bolder Quote Icon */}
          <div className="text-green-700 text-6xl font-extrabold mb-4 animate-bounce">
            “
          </div>

          {/* Feedback Text */}
          <p className="text-sm text-gray-700 mb-6 italic max-h-24 overflow-y-auto">{testimonial.feedback}</p>

          {/* Client Info */}
          <div className="absolute bottom-4 left-4 flex items-center">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full border-2 border-green-600 mr-3"
            />
            <div>
              <p className="text-sm font-bold text-green-900">{testimonial.name}</p>
              <p className="text-xs text-gray-500">{testimonial.date}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Left Arrow */}
    <button
  className="absolute top-1/2 left-0 transform -translate-y-1/2 h-[100%] w-16 text-white flex justify-center items-center z-20 group"
  onClick={() => {
    const container = document.getElementById("feedback-scroll-container");
    const itemWidth = container?.querySelector(".flex-col")?.clientWidth || 0;
    const scrollDistance = itemWidth * 3; // Scroll by 3 items at a time
    container?.scrollBy({
      left: -scrollDistance,
      behavior: "smooth",
    });
  }}
>
  <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-green-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  <span className="text-2xl z-10">&#x2039;</span>
</button>

<button
  className="absolute top-1/2 right-0 transform -translate-y-1/2 h-[100%] w-16 text-white flex justify-center items-center z-20 group"
  onClick={() => {
    const container = document.getElementById("feedback-scroll-container");
    const itemWidth = container?.querySelector(".flex-col")?.clientWidth || 0;
    const scrollDistance = itemWidth * 3; // Scroll by 3 items at a time
    container?.scrollBy({
      left: scrollDistance,
      behavior: "smooth",
    });
  }}
>
  <div className="absolute top-0 right-0 h-full w-full bg-gradient-to-l from-green-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  <span className="text-2xl z-10">&#x203A;</span>
</button>
  </div>

  {/* Send Feedback Button */}
  <div className="mt-12 flex justify-center">
    <Link to="/feedback">
      <button className="bg-green-600 text-white py-3 px-8 rounded-lg text-xl font-semibold hover:bg-green-700 transition-colors duration-300">
        Send Feedback
      </button>
    </Link>
  </div>
</div>


    </>
  );
};

export default Landing;
