import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const arrowRightIcon = Icons?.['ArrowRight'] || Icons.HelpCircle;
  const chevronLeftIcon = Icons?.['ChevronLeft'] || Icons.HelpCircle;
  const chevronRightIcon = Icons?.['ChevronRight'] || Icons.HelpCircle;

  const slides = [
    {
      title: "ACP Facade Installation",
      subtitle: "Innovative Building Exteriors Transforming commercial spaces",
      image: "/images/hero-1.jpg"
    },
    {
      title: "Glass & Aluminium Facade",
      subtitle: "Aesthetics & Precision Elegant, durable, transparent",
      image: "/images/hero-2.jpg"
    },
    {
      title: "Modern Steel Louver Installation",
      subtitle: "Architectural Form & Function Advanced sun shading systems",
      image: "/images/hero-3.jpg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 to-blue-900/50 z-10" />
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
              {slides[currentSlide].title}
            </h1>
            <h2 className="text-xl md:text-2xl text-blue-200 mb-6 animate-fade-in-delay">
              {slides[currentSlide].subtitle}
            </h2>
            <p className="text-lg text-slate-200 mb-8 animate-fade-in-delay-2">
              {slides[currentSlide].description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105"
              >
                Get Started
                {arrowRightIcon && <arrowRightIcon size={20} className="ml-2" />}
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-200"
      >
        {chevronLeftIcon && <chevronLeftIcon size={24} className="text-white" />}
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-200"
      >
        {chevronRightIcon && <chevronRightIcon size={24} className="text-white" />}
      </button>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroBanner;