import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';

const ContactCTA = () => {
  const phoneIcon = Icons?.['Phone'] || Icons.HelpCircle;
  const mailIcon = Icons?.['Mail'] || Icons.HelpCircle;
  const mapPinIcon = Icons?.['MapPin'] || Icons.HelpCircle;

  return (
    <section className="py-20 bg-gradient-to-r from-slate-800 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss your project and bring your vision to life with our expert design solutions.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                {phoneIcon && <phoneIcon size={20} className="text-blue-300" />}
                <span className="text-blue-100">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                {mailIcon && <mailIcon size={20} className="text-blue-300" />}
                <span className="text-blue-100">info@chennaiinteriors.com</span>
              </div>
              <div className="flex items-center space-x-3">
                {mapPinIcon && <mapPinIcon size={20} className="text-blue-300" />}
                <span className="text-blue-100">Chennai, Tamil Nadu</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-slate-800 font-semibold rounded-lg hover:bg-slate-100 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Get Free Consultation
              {Icons?.ArrowRight && <Icons.ArrowRight size={20} className="ml-2" />}
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-6">Why Choose Us?</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                <span className="text-blue-100">Over 10 years of experience in interior and exterior design</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                <span className="text-blue-100">Award-winning design team with industry recognition</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                <span className="text-blue-100">End-to-end project management from concept to completion</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                <span className="text-blue-100">Transparent pricing with no hidden costs</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;