import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex justify-between w-full">
      <div className="text-white">© CLEVER PROJECTS 2024</div>

      <div className="flex  gap-8">
        <Link
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center mb-4 md:mb-0"
        >
          <FaFacebook className="text-[#1877F2] text-2xl" />
        </Link>
        <Link
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center mb-4 md:mb-0"
        >
          <FaInstagram className="text-[#E4405F] text-2xl" />
        </Link>
        <Link
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center mb-4 md:mb-0"
        >
          <FaYoutube className="text-[#FF0000] text-2xl" />
        </Link>
        <Link
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center mb-4 md:mb-0"
        >
          <FaLinkedin className="text-[#0077B5] text-2xl" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
