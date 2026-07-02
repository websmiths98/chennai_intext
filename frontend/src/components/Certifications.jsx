import React from 'react';
import * as Icons from 'lucide-react';

const Certifications = () => {
  const awardIcon = Icons?.['Award'] || Icons.HelpCircle;
  const checkCircleIcon = Icons?.['CheckCircle'] || Icons.HelpCircle;
  const starIcon = Icons?.['Star'] || Icons.HelpCircle;

  const certifications = [
    {
      title: "ISO 9001:2015",
      issuer: "International Organization for Standardization",
      description: "Quality Management Systems certification ensuring consistent quality in our services",
      year: "2018",
      icon: "Shield"
    },
    {
      title: "Green Building Certification",
      issuer: "Indian Green Building Council",
      description: "Recognized for sustainable building practices and eco-friendly design solutions",
      year: "2020",
      icon: "Leaf"
    },
    {
      title: "Safety Excellence Award",
      issuer: "Construction Industry Federation",
      description: "Outstanding safety record and commitment to workplace safety standards",
      year: "2022",
      icon: "HardHat"
    },
    {
      title: "Innovation in Design",
      issuer: "Interior Design Association of India",
      description: "Excellence in innovative design solutions and creative space utilization",
      year: "2021",
      icon: "Lightbulb"
    }
  ];

  const affiliations = [
    "Indian Institute of Interior Designers (IIID)",
    "Construction Industry Development Council (CIDC)",
    "Confederation of Real Estate Developers' Associations of India (CREDAI)",
    "Tamil Nadu Chamber of Commerce and Industry"
  ];

  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Certifications & Recognition</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Our commitment to quality, safety, and excellence is validated through industry certifications and recognitions
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {certifications.map((cert, index) => {
          const IconComponent = Icons?.[cert.icon] || Icons.HelpCircle;
          return (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  {awardIcon && <awardIcon size={24} className="text-white" />}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-slate-800">{cert.title}</h3>
                    <span className="text-sm text-blue-600 font-medium">{cert.year}</span>
                  </div>
                  <p className="text-sm text-blue-600 font-medium mb-2">{cert.issuer}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{cert.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8">
        <h3 className="text-2xl font-semibold text-slate-800 mb-6 text-center">Professional Affiliations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {affiliations.map((affiliation, index) => (
            <div key={index} className="flex items-center p-4 bg-white rounded-lg">
              {checkCircleIcon && <checkCircleIcon size={20} className="text-green-600 mr-3 flex-shrink-0" />}
              <span className="text-slate-700">{affiliation}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center p-6 bg-white rounded-xl shadow-lg">
          <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
            {starIcon && <starIcon size={32} className="text-yellow-500" />}
          </div>
          <h4 className="text-xl font-semibold text-slate-800 mb-2">Quality Assurance</h4>
          <p className="text-slate-600 text-sm">
            Every project undergoes rigorous quality checks to ensure the highest standards of workmanship
          </p>
        </div>

        <div className="text-center p-6 bg-white rounded-xl shadow-lg">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            {Icons?.ShieldCheck && <Icons.ShieldCheck size={32} className="text-green-500" />}
          </div>
          <h4 className="text-xl font-semibold text-slate-800 mb-2">Safety First</h4>
          <p className="text-slate-600 text-sm">
            Committed to maintaining the highest safety standards across all our construction sites and operations
          </p>
        </div>

        <div className="text-center p-6 bg-white rounded-xl shadow-lg">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            {Icons?.TrendingUp && <Icons.TrendingUp size={32} className="text-blue-500" />}
          </div>
          <h4 className="text-xl font-semibold text-slate-800 mb-2">Continuous Improvement</h4>
          <p className="text-slate-600 text-sm">
            Regular training and skill development programs to stay updated with latest industry standards and technologies
          </p>
        </div>
      </div>
    </div>
  );
};

export default Certifications;