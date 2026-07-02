import React from 'react';
import * as Icons from 'lucide-react';

const OfficeLocations = () => {
  const mapPinIcon = Icons?.['MapPin'] || Icons.HelpCircle;
  const phoneIcon = Icons?.['Phone'] || Icons.HelpCircle;
  const clockIcon = Icons?.['Clock'] || Icons.HelpCircle;
  const mailIcon = Icons?.['Mail'] || Icons.HelpCircle;

  const locations = [
    {
      title: "Head Office",
      address: "123, Interior Street, Anna Nagar, Chennai - 600040",
      phone: "+91 98765 43210",
      email: "headoffice@chennaiinteriors.com",
      services: ["All Services", "Design Consultation", "Project Management"],
      isMain: true
    },
    {
      title: "South Chennai Branch",
      address: "456, Design Avenue, Adyar, Chennai - 600020",
      phone: "+91 87654 32109",
      email: "south@chennaiinteriors.com",
      services: ["Interior Design", "Exterior Design", "Site Visits"],
      isMain: false
    },
    {
      title: "West Chennai Branch",
      address: "789, Framework Plaza, Porur, Chennai - 600116",
      phone: "+91 76543 21098",
      email: "west@chennaiinteriors.com",
      services: ["MS/SS Framework", "Aluminium Work", "Glass Framework"],
      isMain: false
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="text-xl font-semibold text-slate-800 mb-6">Our Locations</h3>
      <div className="space-y-6">
        {locations.map((location, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg border ${location.isMain ? 'border-blue-200 bg-blue-50' : 'border-slate-200'}`}
          >
            <div className="flex justify-between items-start mb-3">
              <h4 className="font-semibold text-slate-800">{location.title}</h4>
              {location.isMain && (
                <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded-full">
                  Main Office
                </span>
              )}
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex items-start">
                {mapPinIcon && <mapPinIcon size={16} className="text-slate-400 mr-2 mt-0.5 flex-shrink-0" />}
                <span className="text-slate-600">{location.address}</span>
              </div>

              <div className="flex items-center">
                {phoneIcon && <phoneIcon size={16} className="text-slate-400 mr-2 flex-shrink-0" />}
                <a href={`tel:${location.phone}`} className="text-blue-600 hover:underline">
                  {location.phone}
                </a>
              </div>

              <div className="flex items-start">
                {mailIcon && <Icons.Mail size={16} className="text-slate-400 mr-2 mt-0.5 flex-shrink-0" />}
                <a href={`mailto:${location.email}`} className="text-blue-600 hover:underline">
                  {location.email}
                </a>
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-slate-200">
              <p className="text-xs text-slate-500 mb-2">Services Available:</p>
              <div className="flex flex-wrap gap-1">
                {location.services.map((service, serviceIndex) => (
                  <span
                    key={serviceIndex}
                    className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <p className="text-sm text-blue-800">
          <strong>Note:</strong> Site visits and consultations available at all locations.
          Please call ahead to schedule an appointment.
        </p>
      </div>
    </div>
  );
};

export default OfficeLocations;