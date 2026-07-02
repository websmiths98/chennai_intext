import React from 'react';

const CompanyStory = () => {
  return (
    <div className="mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Our Story</h2>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              Founded in 2014, Chennai Interiors And Exteriors began with a simple vision: to transform 
              spaces into inspiring environments that enhance quality of life. What started as a small 
              interior design studio has grown into a comprehensive design and construction company 
              serving residential, commercial, and industrial clients across Chennai.
            </p>
            <p>
              Over the past decade, we have successfully completed over 850 projects, ranging from 
              cozy residential interiors to large-scale commercial developments. Our journey has been 
              marked by continuous innovation, adoption of new technologies, and a commitment to 
              sustainable building practices.
            </p>
            <p>
              Today, we stand as one of Chennai's most trusted names in interior and exterior design, 
              known for our attention to detail, quality craftsmanship, and customer-centric approach.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-w-16 aspect-h-12 bg-gradient-to-br from-blue-100 to-slate-100 rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
              alt="Company workspace"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-6 max-w-xs">
            <h3 className="font-semibold text-slate-800 mb-2">Our Commitment</h3>
            <p className="text-sm text-slate-600">
              Delivering exceptional quality with every project, ensuring client satisfaction through innovative solutions and meticulous attention to detail.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyStory;