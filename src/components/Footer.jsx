import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1C2A16] text-white font-['Plus_Jakarta_Sans',sans-serif] pt-16 pb-8 border-t border-[#B88A3E]/20">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-gray-700/50">
        {/* Brand Col */}
        <div className="space-y-4">
          <img
            src="/logo.png"
            alt="EHI Homes & Properties Ltd Logo"
            width="180"
            height="60"
            className="h-14 w-auto object-contain bg-white/90 p-2 rounded-lg"
          />
          <p className="text-gray-300 text-sm leading-relaxed">
            EHI Homes &amp; Properties Ltd is a premier real estate company in Lagos, Nigeria. We are committed to providing genuine, affordable, and well-documented land and housing investments built on trust.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-[#B88A3E] mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>
              <a href="#home" className="hover:text-[#B88A3E] transition" title="Home Page">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-[#B88A3E] transition" title="About EHI Homes">About Us</a>
            </li>
            <li>
              <a href="#why-us" className="hover:text-[#B88A3E] transition" title="Our Core Values">Why Choose Us</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#B88A3E] transition" title="Contact Us">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Real Estate Services */}
        <div>
          <h3 className="text-lg font-semibold text-[#B88A3E] mb-4">Our Services</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>Land Acquisition &amp; Sales</li>
            <li>Property Development</li>
            <li>Real Estate Advisory</li>
            <li>Property Documentation</li>
            <li>Real Estate Investment</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-[#B88A3E] mb-4">Contact Information</h3>
          <address className="space-y-3 text-sm text-gray-300 not-italic block">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-[#B88A3E] shrink-0 mt-0.5" />
              <span>Five Point Business Hub, Opp. Community Primary School, Isheri, Lagos, Nigeria.</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-[#B88A3E] shrink-0" />
              <div>
                <a href="tel:+2349037125053" className="hover:text-[#B88A3E] transition">+234 903 712 5053</a>
                <span className="mx-1">|</span>
                <a href="tel:+2349161966606" className="hover:text-[#B88A3E] transition">+234 916 196 6606</a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-[#B88A3E] shrink-0" />
              <a href="mailto:ehihomesandpropertiesltd@gmail.com" className="hover:text-[#B88A3E] transition break-all">
                ehihomesandpropertiesltd@gmail.com
              </a>
            </div>
          </address>
        </div>
      </div>

      <div className="w-[90%] mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
        <p>&copy; {new Date().getFullYear()} EHI Homes &amp; Properties Ltd. All Rights Reserved.</p>
        <p>Building Lifestyles, Creating Values.</p>
      </div>
    </footer>
  );
};

export default Footer;
