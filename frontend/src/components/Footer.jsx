import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';

const Footer = () => {
  const phoneIcon = Icons?.['Phone'] || Icons.HelpCircle;
  const mailIcon = Icons?.['Mail'] || Icons.HelpCircle;
  const mapPinIcon = Icons?.['MapPin'] || Icons.HelpCircle;

  const socialLinks = [
    { name: 'Facebook', icon: 'Facebook' },
    { name: 'Instagram', icon: 'Instagram' },
    { name: 'Linkedin', icon: 'Linkedin' }
  ];

  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-white p-1 rounded-lg">
                <img
                  src="/images/logo1.png"
                  alt="Chennai Interiors & Exteriors"
                  className="h-8 w-auto object-contain"
                />
              </div>
              <span className="font-bold text-lg">Chennai Interiors & Exteriors</span>
            </div>
            <p className="text-slate-400 text-sm">
              Transforming spaces with innovative interior and exterior design solutions.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-slate-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/projects" className="text-slate-400 hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors">About</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-3">
                {phoneIcon && <phoneIcon size={16} className="text-slate-400 shrink-0" />}
                <span className="text-slate-400">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                {mailIcon && <mailIcon size={16} className="text-slate-400 shrink-0" />}
                <span className="text-slate-400">info@chennaiinteriors.com</span>
              </li>
              <li className="flex items-center space-x-3">
                {mapPinIcon && <mapPinIcon size={16} className="text-slate-400 shrink-0" />}
                <span className="text-slate-400">Chennai, Tamil Nadu</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = Icons?.[social.icon] || Icons.HelpCircle;
                return (
                  <a
                    key={social.name}
                    href="#"
                    className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                  >
                    {IconComponent && <IconComponent size={20} />}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm text-slate-400">
          <p>&copy; 2024 Chennai Interiors And Exteriors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;