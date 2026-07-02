import React from 'react';
import * as Icons from 'lucide-react';

const ProjectGrid = ({ projects, onProjectClick }) => {
  const externalLinkIcon = Icons?.['ExternalLink'] || Icons.HelpCircle;
  const calendarIcon = Icons?.['Calendar'] || Icons.HelpCircle;
  const mapPinIcon = Icons?.['MapPin'] || Icons.HelpCircle;

  if (projects.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-600 text-lg">No projects found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
          onClick={() => onProjectClick(project)}
        >
          <div className="relative overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                {project.category}
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                {externalLinkIcon && <externalLinkIcon size={24} className="text-white" />}
              </div>
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">{project.title}</h3>
            <p className="text-slate-600 text-sm mb-4 line-clamp-2">{project.description}</p>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-slate-500">
                {calendarIcon && <calendarIcon size={16} className="mr-2" />}
                <span>{new Date(project.completionDate).toLocaleDateString('en-IN')}</span>
              </div>
              <div className="flex items-center text-sm text-slate-500">
                {mapPinIcon && <mapPinIcon size={16} className="mr-2" />}
                <span>{project.location}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.materials.slice(0, 2).map((material, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full"
                >
                  {material}
                </span>
              ))}
              {project.materials.length > 2 && (
                <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">
                  +{project.materials.length - 2} more
                </span>
              )}
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-slate-200">
              <span className="text-sm font-semibold text-blue-600">{project.budget}</span>
              <span className="text-sm text-slate-500">{project.subcategory}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;