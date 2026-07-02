import React from 'react';
import * as Icons from 'lucide-react';

const ProjectModal = ({ isOpen, onClose, project }) => {
  const closeIcon = Icons?.['X'] || Icons.HelpCircle;
  const calendarIcon = Icons?.['Calendar'] || Icons.HelpCircle;
  const mapPinIcon = Icons?.['MapPin'] || Icons.HelpCircle;
  const dollarSignIcon = Icons?.['DollarSign'] || Icons.HelpCircle;
  const tagIcon = Icons?.['Tag'] || Icons.HelpCircle;

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
          >
            {closeIcon && <closeIcon size={24} className="text-slate-600" />}
          </button>
          
          <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-t-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium">
                {project.category}
              </span>
            </div>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-4">{project.title}</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">{project.description}</p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center text-slate-600">
                  {tagIcon && <tagIcon size={20} className="mr-3 text-blue-600" />}
                  <span className="font-medium">{project.subcategory}</span>
                </div>
                <div className="flex items-center text-slate-600">
                  {calendarIcon && <calendarIcon size={20} className="mr-3 text-blue-600" />}
                  <span>Completed on {new Date(project.completionDate).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <div className="flex items-center text-slate-600">
                  {mapPinIcon && <mapPinIcon size={20} className="mr-3 text-blue-600" />}
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center text-slate-600">
                  {dollarSignIcon && <dollarSignIcon size={20} className="mr-3 text-blue-600" />}
                  <span className="font-semibold">Budget: {project.budget}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Materials Used</h3>
              <div className="space-y-3 mb-6">
                {project.materials.map((material, index) => (
                  <div key={index} className="flex items-center p-3 bg-slate-50 rounded-lg">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                    <span className="text-slate-700">{material}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-6">
                <h4 className="font-semibold text-slate-800 mb-2">Project Details</h4>
                <p className="text-sm text-slate-600">
                  This project showcases our expertise in {project.category.toLowerCase()} with premium materials and attention to detail. 
                  The use of {project.materials.join(', ')} ensures durability and aesthetic appeal.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row gap-4">
            <button
              onClick={onClose}
              className="px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-colors font-medium"
            >
              Close Details
            </button>
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all font-medium">
              Request Similar Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;