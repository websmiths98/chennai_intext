import React from 'react';
import * as Icons from 'lucide-react';

const ServiceDetails = ({ service, onBookService }) => {
  const checkIcon = Icons?.['Check'] || Icons.HelpCircle;
  const starIcon = Icons?.['Star'] || Icons.HelpCircle;

  const processSteps = [
    "Initial Consultation & Site Visit",
    "Design Concept & Proposal",
    "Material Selection & Costing",
    "Project Execution & Monitoring",
    "Quality Check & Handover",
    "Post-Service Support"
  ];

  const whyChooseUs = [
    "2+ Years of Industry Experience",
    "Certified & Skilled Professionals",
    "Premium Quality Materials",
    "On-Time Project Delivery",
    "Transparent Pricing",
    "24/7 Customer Support"
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold text-slate-800 mb-6">{service.title}</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Our Process</h3>
            <div className="space-y-3">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-slate-700">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => onBookService(service)}
            className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Book This Service
          </button>
        </div>

        <div>
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Service Features</h3>
            <div className="space-y-3">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  {checkIcon && <checkIcon size={20} className="text-green-600 mr-3 flex-shrink-0" />}
                  <span className="text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Why Choose Us?</h3>
            <div className="space-y-3">
              {whyChooseUs.map((reason, index) => (
                <div key={index} className="flex items-center">
                  {starIcon && <starIcon size={16} className="text-yellow-500 mr-3 flex-shrink-0" />}
                  <span className="text-slate-700 text-sm">{reason}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Note:</strong> Prices may vary based on project scope, materials selected, and site conditions. 
              Contact us for a detailed quote tailored to your requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;