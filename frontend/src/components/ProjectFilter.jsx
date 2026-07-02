import React, { useState } from 'react';
import * as Icons from 'lucide-react';

const ProjectFilter = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    category: 'all',
    subcategory: 'all',
    searchTerm: ''
  });

  const searchIcon = Icons?.['Search'] || Icons.HelpCircle;
  const filterIcon = Icons?.['Filter'] || Icons.HelpCircle;

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'Interior Design', label: 'Interior Design' },
    { value: 'Exterior Design', label: 'Exterior Design' },
    { value: 'Framework Construction', label: 'Framework Construction' }
  ];

  const subcategories = {
    all: [{ value: 'all', label: 'All Subcategories' }],
    'Interior Design': [
      { value: 'all', label: 'All Interior' },
      { value: 'Residential', label: 'Residential' },
      { value: 'Commercial', label: 'Commercial' },
      { value: 'Hospitality', label: 'Hospitality' }
    ],
    'Exterior Design': [
      { value: 'all', label: 'All Exterior' },
      { value: 'Residential', label: 'Residential' },
      { value: 'Commercial', label: 'Commercial' }
    ],
    'Framework Construction': [
      { value: 'all', label: 'All Framework' },
      { value: 'MS/SS Framework', label: 'MS/SS Framework' },
      { value: 'Aluminium Framework', label: 'Aluminium Framework' },
      { value: 'Glass Framework', label: 'Glass Framework' }
    ]
  };

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <div className="flex items-center mb-4">
        {filterIcon && <filterIcon size={20} className="text-slate-600 mr-2" />}
        <h3 className="text-lg font-semibold text-slate-800">Filter Projects</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative">
          <div className="relative">
            {searchIcon && (
              <searchIcon size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
            )}
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={filters.searchTerm}
              onChange={(e) => handleFilterChange('searchTerm', e.target.value)}
            />
          </div>
        </div>

        <div>
          <select
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={filters.category}
            onChange={(e) => {
              handleFilterChange('category', e.target.value);
              handleFilterChange('subcategory', 'all');
            }}
          >
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <select
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={filters.subcategory}
            onChange={(e) => handleFilterChange('subcategory', e.target.value)}
            disabled={filters.category === 'all'}
          >
            {subcategories[filters.category]?.map((subcategory) => (
              <option key={subcategory.value} value={subcategory.value}>
                {subcategory.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProjectFilter;