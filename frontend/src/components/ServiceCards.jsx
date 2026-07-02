import React from 'react';
import * as Icons from 'lucide-react';

const ServiceCards = ({ onServiceSelect }) => {
  const services = [
    // {
    //   id: 1,
    //   title: "Interior Design",
    //   description: "Transform your interiors with modern, functional designs tailored to your lifestyle and preferences.",
    //   icon: "Home",
    //   features: ["Space Planning", "Color Consultation", "Furniture Selection", "Lighting Design"],
    //   startingPrice: "₹2,50,000",
    //   duration: "2-4 weeks"
    // },
    {
      id: 2,
      title: "Exterior Design",
      description: "Create stunning facades and outdoor spaces that enhance curb appeal and property value.",
      icon: "Building",
      features: ["Facade Design", "Landscape Planning", "Outdoor Living", "Lighting Solutions"],
      startingPrice: "₹3,00,000",
      duration: "3-6 weeks"
    },
    {
      id: 3,
      title: "MS/SS Framework",
      description: "Durable mild steel and stainless steel framework solutions for structural and decorative needs.",
      icon: "Wrench",
      features: ["Structural Framework", "Staircases", "Railings", "Gates & Grills"],
      startingPrice: "₹1,50,000",
      duration: "1-3 weeks"
    },
    {
      id: 4,
      title: "Aluminium Work",
      description: "Lightweight and corrosion-resistant aluminium solutions for modern construction needs.",
      icon: "Box",
      features: ["Windows & Doors", "Partition Systems", "Curtain Walls", "Cladding"],
      startingPrice: "₹2,00,000",
      duration: "2-4 weeks"
    },
    {
      id: 5,
      title: "Glass Framework",
      description: "Elegant glass solutions combining aesthetics with functionality for contemporary spaces.",
      icon: "Square",
      features: ["Glass Railings", "Partitions", "Canopies", "Facade Systems"],
      startingPrice: "₹2,50,000",
      duration: "2-3 weeks"
    },
    // {
    //   id: 6,
    //   title: "Custom Solutions",
    //   description: "Bespoke design and construction solutions tailored to your specific requirements.",
    //   icon: "Settings",
    //   features: ["Custom Furniture", "Specialized Framework", "Unique Designs", "Personalized Service"],
    //   startingPrice: "Custom Quote",
    //   duration: "Varies"
    // }
  ];

  const arrowRightIcon = Icons?.['ArrowRight'] || Icons.HelpCircle;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
      {services.map((service) => {
        const IconComponent = Icons?.[service.icon] || Icons.HelpCircle;
        return (
          <div
            key={service.id}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
            onClick={() => onServiceSelect(service)}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                {IconComponent && <IconComponent size={24} className="text-white" />}
              </div>
              <div className="text-right">
                {/* <p className="text-sm text-slate-600">Starting from</p>
                <p className="text-lg font-semibold text-blue-600">{service.startingPrice}</p> */}
              </div>
            </div>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">{service.title}</h3>
            <p className="text-slate-600 mb-4">{service.description}</p>

            <ul className="space-y-2 mb-6">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-center text-sm text-slate-600">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="flex justify-between items-center pt-4 border-t border-slate-200">
              <span className="text-sm text-slate-500">Duration: {service.duration}</span>
              <div className="flex items-center text-blue-600 group-hover:text-blue-700 transition-colors">
                <span className="text-sm font-medium mr-1">Learn More</span>
                {arrowRightIcon && <arrowRightIcon size={16} />}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceCards;