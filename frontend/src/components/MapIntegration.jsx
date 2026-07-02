import React from 'react';
import * as Icons from 'lucide-react';

const MapIntegration = () => {
  const externalLinkIcon = Icons?.['ExternalLink'] || Icons.HelpCircle;
  const navigationIcon = Icons?.['Navigation'] || Icons.HelpCircle;

  const locations = [
    {
      name: "Head Office - Anna Nagar",
      lat: 13.0827,
      lng: 80.2707,
      address: "123, Interior Street, Anna Nagar, Chennai - 600040",
      description: "Main office with full service capabilities and design studio"
    },
    {
      name: "South Branch - Adyar",
      lat: 13.0067,
      lng: 80.2206,
      address: "456, Design Avenue, Adyar, Chennai - 600020",
      description: "Convenient location for South Chennai clients"
    },
    {
      name: "West Branch - Porur",
      lat: 13.0324,
      lng: 80.1562,
      address: "789, Framework Plaza, Porur, Chennai - 600116",
      description: "Specialized in framework and structural work"
    }
  ];

  const getDirections = (lat, lng) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-semibold text-slate-800">Find Us</h3>
        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-blue-600 hover:text-blue-700 text-sm"
        >
          Open in Google Maps
          {externalLinkIcon && <externalLinkIcon size={16} className="ml-1" />}
        </a>
      </div>

      {/* Map Placeholder */}
      <div className="relative bg-gradient-to-br from-blue-100 to-slate-100 rounded-xl h-96 mb-6 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              {navigationIcon && <navigationIcon size={32} className="text-blue-600" />}
            </div>
            <p className="text-slate-600 font-medium mb-2">Interactive Map</p>
            <p className="text-slate-500 text-sm">Click on locations below for directions</p>
          </div>
        </div>
        
        {/* Map Markers Simulation */}
        <div className="absolute top-1/4 left-1/3 bg-blue-600 text-white px-2 py-1 rounded text-xs shadow-lg">
          Anna Nagar
        </div>
        <div className="absolute bottom-1/3 right-1/4 bg-blue-600 text-white px-2 py-1 rounded text-xs shadow-lg">
          Adyar
        </div>
        <div className="absolute top-2/3 left-1/2 bg-blue-600 text-white px-2 py-1 rounded text-xs shadow-lg">
          Porur
        </div>
      </div>

      {/* Location List */}
      <div className="space-y-4">
        {locations.map((location, index) => (
          <div key={index} className="p-4 border border-slate-200 rounded-lg hover:border-blue-300 transition-colors">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-semibold text-slate-800">{location.name}</h4>
              <button
                onClick={() => getDirections(location.lat, location.lng)}
                className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors flex items-center"
              >
                {navigationIcon && <navigationIcon size={14} className="mr-1" />}
                Directions
              </button>
            </div>
            <p className="text-slate-600 text-sm mb-2">{location.address}</p>
            <p className="text-slate-500 text-xs">{location.description}</p>
          </div>
        ))}
      </div>

      {/* Service Area Info */}
      <div className="mt-6 p-4 bg-slate-50 rounded-lg">
        <h4 className="font-semibold text-slate-800 mb-2">Our Service Areas</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-slate-600">
          <span>• Anna Nagar</span>
          <span>• Adyar</span>
          <span>• Porur</span>
          <span>• Nungambakkam</span>
          <span>• T. Nagar</span>
          <span>• Mylapore</span>
          <span>• Velachery</span>
          <span>• OMR</span>
        </div>
        <p className="text-xs text-slate-500 mt-2">
          and surrounding areas within 50km radius of Chennai city center
        </p>
      </div>
    </div>
  );
};

export default MapIntegration;