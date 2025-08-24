import React from "react";

const Contact = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault(); // default reload ko rokta hai
    const formData = new FormData(e.target);
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  };

  return (
    <section className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-lg bg-gray-900 border border-gray-800 rounded-xl shadow-lg p-8">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-400">
          Contact Us
        </h2>

        {/* Form */}
        <form onSubmit={handleFormSubmit} className="space-y-5">
          {/* Name */}
          <input
            type="text"
            placeholder="Enter your name"
            name="username"
            required
            autoComplete="off"
            className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 
                       text-white placeholder-gray-400 focus:outline-none 
                       focus:ring-2 focus:ring-blue-500"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            required
            autoComplete="off"
            className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 
                       text-white placeholder-gray-400 focus:outline-none 
                       focus:ring-2 focus:ring-blue-500"
          />

          {/* Message */}
          <textarea
            rows="6"
            placeholder="Enter your message"
            name="message"
            required
            autoComplete="off"
            className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 
                       text-white placeholder-gray-400 focus:outline-none 
                       focus:ring-2 focus:ring-blue-500 resize-none"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold 
                       py-3 rounded-lg shadow-md transition transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
