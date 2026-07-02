import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceCards from '../components/ServiceCards';
import ServiceDetails from '../components/ServiceDetails';
import PricingTable from '../components/PricingTable';
import BookingForm from '../components/BookingForm';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);

  const handleServiceSelect = (service) => {
    setSelectedService(service);
  };

  const handleBookService = (service) => {
    setSelectedService(service);
    setShowBookingForm(true);
  };

  const closeBookingForm = () => {
    setShowBookingForm(false);
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Our Services
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Comprehensive design and construction solutions for residential, commercial, and industrial spaces. 
              From interior elegance to robust framework constructions.
            </p>
          </div>

          <ServiceCards onServiceSelect={handleServiceSelect} />
          
          {selectedService && (
            <ServiceDetails 
              service={selectedService} 
              onBookService={handleBookService}
            />
          )}
          
          <PricingTable />
          
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Book a consultation with our experts and transform your space today
            </p>
            <button
              onClick={() => setShowBookingForm(true)}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Book Free Consultation
            </button>
          </div>
        </div>
      </div>

      <BookingForm
        isOpen={showBookingForm}
        onClose={closeBookingForm}
        selectedService={selectedService}
      />
      
      <Footer />
    </div>
  );
};

export default Services;