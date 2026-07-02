import React, { useState, useEffect } from 'react';
import * as Icons from 'lucide-react';

const TestimonialCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const chevronLeftIcon = Icons?.['ChevronLeft'] || Icons.HelpCircle;
  const chevronRightIcon = Icons?.['ChevronRight'] || Icons.HelpCircle;

  const clients = [
    {
      logo: "/images/KEC_LOGO.png",
      alt: "KEC Logo"
    },
    {
      logo: "/images/L&T_LOGO.webp",
      alt: "L&T Logo"
    },
    {
      logo: "/images/logo-bnr.jpg",
      alt: "BNR Logo"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % clients.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + clients.length) % clients.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Authorized Vendor
          </h2>
        </div>

        <div className="relative">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 shadow-lg min-h-[300px] flex items-center justify-center">

            <div className="flex justify-center items-center w-full h-full">
              <img
                src={`${clients[currentSlide].logo}?t=${Date.now()}`}
                alt={clients[currentSlide].alt}
                className="max-h-32 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
            >
              {chevronLeftIcon && <chevronLeftIcon size={20} className="text-slate-600" />}
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
            >
              {chevronRightIcon && <chevronRightIcon size={20} className="text-slate-600" />}
            </button>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {clients.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full border border-yellow-400 transition-all duration-200 ${index === currentSlide ? 'bg-yellow-400' : 'bg-transparent'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;