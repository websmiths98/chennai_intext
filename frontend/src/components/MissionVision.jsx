import React from 'react';
import * as Icons from 'lucide-react';

const MissionVision = () => {
  const targetIcon = Icons?.['Target'] || Icons.HelpCircle;
  const eyeIcon = Icons?.['Eye'] || Icons.HelpCircle;
  const heartIcon = Icons?.['Heart'] || Icons.HelpCircle;
  const leafIcon = Icons?.['Leaf'] || Icons.HelpCircle;

  const coreValues = [
    {
      title: "Innovation",
      description: "Constantly exploring new design trends and construction technologies",
      icon: "Lightbulb"
    },
    {
      title: "Integrity",
      description: "Transparent communication and honest business practices",
      icon: "Shield"
    },
    {
      title: "Excellence",
      description: "Commitment to delivering the highest quality in every project",
      icon: "Award"
    },
    {
      title: "Sustainability",
      description: "Eco-friendly practices and sustainable building solutions",
      icon: "Leaf"
    }
  ];

  return (
    <div className="mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mr-4">
              {targetIcon && <targetIcon size={24} className="text-white" />}
            </div>
            <h3 className="text-2xl font-bold text-slate-800">Our Mission</h3>
          </div>
          <p className="text-slate-600 leading-relaxed mb-4">
            To transform spaces into inspiring environments that enhance quality of life, 
            combining innovative design with superior craftsmanship while maintaining the 
            highest standards of quality, safety, and sustainability.
          </p>
          <p className="text-slate-600 leading-relaxed">
            We are committed to delivering exceptional value to our clients through transparent 
            processes, timely delivery, and solutions that exceed expectations while staying 
            within budget constraints.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-slate-600 to-slate-700 rounded-lg flex items-center justify-center mr-4">
              {eyeIcon && <eyeIcon size={24} className="text-white" />}
            </div>
            <h3 className="text-2xl font-bold text-slate-800">Our Vision</h3>
          </div>
          <p className="text-slate-600 leading-relaxed mb-4">
            To be the most trusted and innovative design-build company in South India, 
            recognized for transforming spaces and creating environments that inspire, 
              function beautifully, and stand the test of time.
          </p>
          <p className="text-slate-600 leading-relaxed">
            We envision a future where every space tells a unique story, combining 
            aesthetic appeal with practical functionality, all delivered with uncompromising 
            quality and attention to detail.
          </p>
        </div>
      </div>

      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Core Values</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          The principles that guide every decision and action we take
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {coreValues.map((value, index) => {
          const IconComponent = Icons?.[value.icon] || Icons.HelpCircle;
          return (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                {IconComponent && <IconComponent size={32} className="text-blue-600" />}
              </div>
              <h4 className="text-lg font-semibold text-slate-800 mb-2">{value.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-12 bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            {leafIcon && <leafIcon size={32} className="text-green-600" />}
          </div>
          <h3 className="text-2xl font-semibold text-slate-800 mb-4">Our Construction Philosophy</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h4 className="text-lg font-semibold text-slate-800 mb-3">Sustainable Practices</h4>
            <p className="text-slate-600 text-sm">
              We incorporate eco-friendly materials and energy-efficient solutions in all our projects, 
              minimizing environmental impact while maximizing efficiency.
            </p>
          </div>
          <div className="text-center">
            <h4 className="text-lg font-semibold text-slate-800 mb-3">Quality First</h4>
            <p className="text-slate-600 text-sm">
              Every material is carefully selected, every measurement is precise, and every finish is 
              perfect. Quality is not just a promise - it's our standard operating procedure.
            </p>
          </div>
          <div className="text-center">
            <h4 className="text-lg font-semibold text-slate-800 mb-3">Client-Centric Approach</h4>
            <p className="text-slate-600 text-sm">
              Your vision drives our execution. We listen, understand, and then create spaces that 
              reflect your personality, needs, and aspirations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;