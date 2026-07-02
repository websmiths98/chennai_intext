import React, { useState } from 'react';
import * as Icons from 'lucide-react';

const PricingTable = () => {
  const [selectedCategory, setSelectedCategory] = useState('framework');

  const checkIcon = Icons?.['Check'] || Icons.HelpCircle;
  const arrowRightIcon = Icons?.['ArrowRight'] || Icons.HelpCircle;

  const pricingData = {
    interior: {
      title: "Interior Design Packages",
      description: "Complete interior solutions for residential and commercial spaces",
      packages: [
        {
          name: "Basic",
          price: "₹2,50,000",
          timeline: "2-3 weeks",
          features: [
            "Space Planning & Layout",
            "Color Scheme Selection",
            "Basic Furniture Sourcing",
            "Lighting Plan",
            "2D Design Visualizations",
            "Material Consultation"
          ],
          popular: false
        },
        {
          name: "Premium",
          price: "₹5,00,000",
          timeline: "4-6 weeks",
          features: [
            "Everything in Basic",
            "3D Design Visualizations",
            "Custom Furniture Design",
            "Premium Material Selection",
            "Project Management",
            "Site Supervision",
            "Styling & Accessories",
            "2 Revisions Included"
          ],
          popular: true
        },
        {
          name: "Luxury",
          price: "₹10,00,000+",
          timeline: "6-10 weeks",
          features: [
            "Everything in Premium",
            "Unlimited Revisions",
            "Bespoke Furniture",
            "Smart Home Integration",
            "Art Curation",
            "Lighting Design",
            "Textile Selection",
            "Post-Completion Support"
          ],
          popular: false
        }
      ]
    },
    framework: {
      title: "Framework Construction Rates",
      description: "MS/SS, Aluminium, and Glass framework solutions",
      packages: [
        {
          name: "MS Framework",
          price: "₹2,500/sqft",
          timeline: "1-2 weeks",
          features: [
            "Structural Steel Work",
            "Gates & Grills",
            "Staircase Framework",
            "Safety Railings",
            "Powder Coating",
            "5-Year Warranty"
          ],
          popular: false
        },
        {
          name: "Aluminium Work",
          price: "₹3,200/sqft",
          timeline: "1-3 weeks",
          features: [
            "Windows & Doors",
            "Partition Systems",
            "Curtain Walls",
            "Cladding Work",
            "Anodized Finish",
            "10-Year Warranty"
          ],
          popular: true
        },
        {
          name: "Glass Framework",
          price: "₹4,500/sqft",
          timeline: "2-3 weeks",
          features: [
            "Tempered Glass Panels",
            "Structural Glazing",
            "Glass Railings",
            "Canopy Systems",
            "SS Fixtures",
            "15-Year Warranty"
          ],
          popular: false
        }
      ]
    }
  };

  const currentData = pricingData[selectedCategory];

  return (
    <div className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
          Pricing & Packages
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Transparent pricing with no hidden costs. Choose the package that best fits your needs and budget.
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <div className="bg-white rounded-lg p-1 shadow-md">
          {/* <button
            onClick={() => setSelectedCategory('interior')}
            className={`px-6 py-2 rounded-md transition-all ${
              selectedCategory === 'interior'
                ? 'bg-blue-600 text-white'
                : 'text-slate-600 hover:text-slate-800'
            }`}
          >
            Interior Design
          </button> */}
          <button
            onClick={() => setSelectedCategory('framework')}
            className={`px-6 py-2 rounded-md transition-all ${selectedCategory === 'framework'
                ? 'bg-blue-600 text-white'
                : 'text-slate-600 hover:text-slate-800'
              }`}
          >
            Framework Work
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold text-slate-800 mb-2">{currentData.title}</h3>
          <p className="text-slate-600">{currentData.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentData.packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 ${pkg.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''
                }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h4 className="text-xl font-semibold text-slate-800 mb-2">{pkg.name}</h4>
                <div className="text-3xl font-bold text-blue-600 mb-1">{pkg.price}</div>
                <div className="text-sm text-slate-500">Timeline: {pkg.timeline}</div>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    {checkIcon && <checkIcon size={16} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />}
                    <span className="text-slate-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* <button className="w-full px-4 py-3 bg-gradient-to-r from-slate-700 to-slate-800 text-white rounded-lg hover:from-slate-800 hover:to-slate-900 transition-all duration-200 font-medium">
                Get Quote
                {arrowRightIcon && <arrowRightIcon size={16} className="ml-2 inline" />}
              </button> */}
            </div>
          ))}
        </div>

        {/* <div className="mt-12 p-6 bg-blue-50 rounded-xl">
          <div className="text-center">
            <h4 className="text-lg font-semibold text-slate-800 mb-2">Need a Custom Quote?</h4>
            <p className="text-slate-600 mb-4">
              Every project is unique. Contact us for a personalized quote tailored to your specific requirements.
            </p>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Request Custom Quote
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default PricingTable;