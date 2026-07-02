import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';

const ServicesOverview = () => {
  const services = [
    // {
    //   icon: 'Home',
    //   title: 'Interior Design',
    //   description: 'Transform your interiors with modern, functional designs tailored to your lifestyle.',
    //   features: ['Space Planning', 'Color Consultation', 'Furniture Selection', 'Lighting Design']
    // },
    {
      icon: 'Building',
      title: 'Exterior Design',
      description: 'Create stunning facades and outdoor spaces that enhance curb appeal and value.',
      features: ['Facade Design', 'Landscape Planning', 'Outdoor Living', 'Lighting Solutions']
    },
    {
      icon: 'Briefcase',
      title: 'Commercial Spaces',
      description: 'Design productive and inspiring workspaces that reflect your brand identity.',
      features: ['Office Layout', 'Brand Integration', 'Ergonomic Design', 'Space Optimization']
    },
    // {
    //   icon: 'Palette',
    //   title: 'Custom Solutions',
    //   description: 'Bespoke design solutions for unique spaces and specific requirements.',
    //   features: ['Custom Furniture', 'Bespoke Lighting', 'Unique Finishes', 'Personalized Design']
    // }
  ];

  return (
    <section
      className="relative py-20 bg-fixed bg-cover bg-center"
      style={{ backgroundImage: 'url("/images/logo2.png")' }}
    >
      {/* Dark Overlay for better text contrast */}
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 drop-shadow-sm">
            Our Services
          </h2>
          <p className="text-lg text-slate-800 max-w-2xl mx-auto">
            Comprehensive design solutions for residential and commercial spaces
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, index) => {
            const IconComponent = Icons?.[service.icon] || Icons.HelpCircle;
            return (
              <div
                key={index}
                className="w-full max-w-sm bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mb-4">
                  {IconComponent && <IconComponent size={24} className="text-white" />}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-slate-700 to-slate-800 text-white font-semibold rounded-lg hover:from-slate-800 hover:to-slate-900 transition-all duration-200 transform hover:scale-105"
          >
            Explore All Services
            {Icons?.ArrowRight && <Icons.ArrowRight size={20} className="ml-2" />}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;