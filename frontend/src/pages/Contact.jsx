import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
// import OfficeLocations from '../components/OfficeLocations';
// import MapIntegration from '../components/MapIntegration';
import BusinessHours from '../components/BusinessHours';

const Contact = () => {
  const [selectedService, setSelectedService] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />

      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Get In Touch
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Ready to transform your space? Contact us for a free consultation and let's discuss how we can bring your vision to life.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-lg">📞</span>
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Phone</h3>
              <p className="text-slate-600">+91 98765 43210</p>
              <p className="text-slate-600">+91 87654 32109</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-lg">✉️</span>
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Email</h3>
              <p className="text-slate-600">info@chennaiinteriors.com</p>
              <p className="text-slate-600">projects@chennaiinteriors.com</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-lg">🕒</span>
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Response Time</h3>
              <p className="text-slate-600">Within 2 hours</p>
              <p className="text-slate-600">During business hours</p>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <ContactForm selectedService={selectedService} />
            </div>
            <div className="space-y-8">
              <BusinessHours />
              {/* <OfficeLocations /> */}
            </div>
          </div>

          {/* Map Section */}
          {/* <div className="mb-16">
            <MapIntegration />
          </div> */}

          {/* FAQ Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="border-b border-slate-200 pb-4">
                <h3 className="text-lg font-semibold text-slate-800 mb-2">How long does a typical project take?</h3>
                <p className="text-slate-600">
                  Project timelines vary based on scope and complexity. Interior design projects typically take 2-6 weeks,
                  while framework construction can take 1-4 weeks. We provide detailed timelines during consultation.
                </p>
              </div>
              <div className="border-b border-slate-200 pb-4">
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Do you offer free consultations?</h3>
                <p className="text-slate-600">
                  Yes, we offer free initial consultations where we discuss your requirements, assess the space,
                  and provide preliminary recommendations and cost estimates.
                </p>
              </div>
              <div className="border-b border-slate-200 pb-4">
                <h3 className="text-lg font-semibold text-slate-800 mb-2">What areas do you serve?</h3>
                <p className="text-slate-600">
                  We primarily serve Chennai and surrounding areas. For larger projects, we also work in
                  other parts of Tamil Nadu. Contact us to discuss your location-specific requirements.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Do you provide warranties?</h3>
                <p className="text-slate-600">
                  Yes, we provide warranties on our work. Interior design projects come with a 1-year warranty,
                  while framework constructions have warranties ranging from 5-15 years depending on materials used.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;