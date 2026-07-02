import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';

const FeaturedProjects = () => {
  const [projects, setProjects] = useState([]);
  const arrowRightIcon = Icons?.['ArrowRight'] || Icons.HelpCircle;

  useEffect(() => {
    // TODO: Connect to the backend API when ready.
    // const fetchFeaturedProjects = async () => {
    //   try {
    //     const response = await fetch('/api/projects/featured');
    //     const data = await response.json();
    //     setProjects(data);
    //   } catch (error) {
    //     console.error('Error fetching featured projects:', error);
    //   }
    // };
    // fetchFeaturedProjects();

    // Using mock data for now
    const mockProjects = [
      {
        id: 1,
        title: "Modern Living Space",
        category: "Residential Interior",
        description: "Contemporary design with smart space utilization",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop"
      },
      {
        id: 2,
        title: "Corporate Office Makeover",
        category: "Commercial Interior",
        description: "Ergonomically designed workspace for productivity",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop"
      },
      {
        id: 3,
        title: "Luxury Villa Exterior",
        category: "Exterior Design",
        description: "Stunning facade with modern architectural elements",
        image: "https://images.unsplash.com/photo-1558882224-dda166733031?w=600&h=400&fit=crop"
      },
      {
        id: 4,
        title: "Restaurant Interior",
        category: "Hospitality Design",
        description: "Warm and inviting ambiance for dining experience",
        image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&h=400&fit=crop"
      }
    ];
    setProjects(mockProjects);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore our portfolio of stunning interior and exterior transformations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <span className="text-sm text-blue-600 font-medium">{project.category}</span>
                <h3 className="text-xl font-semibold text-slate-800 mt-2 mb-3">{project.title}</h3>
                <p className="text-slate-600 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/projects"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105"
          >
            View All Projects
            {arrowRightIcon && <arrowRightIcon size={20} className="ml-2" />}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;