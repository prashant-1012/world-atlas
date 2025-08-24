import React from "react";
import { IoCallSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { TbMail } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-950 to-black text-gray-300">
      <div className="max-w-7xl mx-auto px-8 py-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Location */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <MdPlace className="text-blue-400 text-3xl" />
            <div>
              <p className="text-blue-400 font-bold text-lg">Find Us</p>
              <p>Pune, Maharashtra</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <IoCallSharp className="text-blue-400 text-3xl" />
            <div>
              <p className="text-blue-400 font-bold text-lg">Call Us</p>
              <p>+91 9898980000</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <TbMail className="text-blue-400 text-3xl" />
            <div>
              <p className="text-blue-400 font-bold text-lg">Mail Us</p>
              <p>world-atlas@mail.com</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} World Atlas. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
