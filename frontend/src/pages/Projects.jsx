import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectFilter from '../components/ProjectFilter';
import ProjectGrid from '../components/ProjectGrid';
import ProjectModal from '../components/ProjectModal';
import Pagination from '../components/Pagination';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const projectsPerPage = 9;

  useEffect(() => {
    // TODO: Connect to the backend API when ready.
    // const fetchProjects = async () => {
    //   try {
    //     const response = await fetch('/api/projects');
    //     const data = await response.json();
    //     setProjects(data);
    //     setFilteredProjects(data);
    //   } catch (error) {
    //     console.error('Error fetching projects:', error);
    //   }
    // };
    // fetchProjects();

    // Using mock data for now
    const mockProjects = [
      {
        id: 1,
        title: "Modern Living Room",
        category: "Interior Design",
        subcategory: "Residential",
        description: "Contemporary living space with smart storage solutions and premium finishes.",
        materials: ["MS Framework", "Glass Panels", "Premium Wood"],
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
        completionDate: "2024-01-15",
        location: "Chennai",
        budget: "₹15-20 Lakhs"
      },
      {
        id: 2,
        title: "Corporate Office Exterior",
        category: "Exterior Design",
        subcategory: "Commercial",
        description: "Modern glass facade with aluminium framework and energy-efficient design.",
        materials: ["Aluminium Framework", "Glass Panels", "SS Fixtures"],
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
        completionDate: "2024-02-20",
        location: "Chennai",
        budget: "₹25-30 Lakhs"
      },
      {
        id: 3,
        title: "Restaurant Interior",
        category: "Interior Design",
        subcategory: "Hospitality",
        description: "Warm and inviting restaurant design with custom lighting and furniture.",
        materials: ["MS Framework", "Custom Furniture", "LED Lighting"],
        image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=600&fit=crop",
        completionDate: "2023-12-10",
        location: "Chennai",
        budget: "₹10-15 Lakhs"
      },
      {
        id: 4,
        title: "Luxury Villa Facade",
        category: "Exterior Design",
        subcategory: "Residential",
        description: "Stunning villa exterior with glass railings and aluminium cladding.",
        materials: ["Glass Railings", "Aluminium Cladding", "SS Fixtures"],
        image: "https://images.unsplash.com/photo-1558882224-dda166733031?w=800&h=600&fit=crop",
        completionDate: "2024-03-05",
        location: "Chennai",
        budget: "₹35-40 Lakhs"
      },
      {
        id: 5,
        title: "Retail Store Interior",
        category: "Interior Design",
        subcategory: "Commercial",
        description: "Modern retail space with glass displays and aluminium fixtures.",
        materials: ["Glass Displays", "Aluminium Fixtures", "LED Lighting"],
        image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&h=600&fit=crop",
        completionDate: "2024-01-28",
        location: "Chennai",
        budget: "₹8-12 Lakhs"
      },
      {
        id: 6,
        title: "Office Partition System",
        category: "Framework Construction",
        subcategory: "MS/SS Framework",
        description: "Modular office partitions with glass panels and MS framework.",
        materials: ["MS Framework", "Glass Panels", "SS Hinges"],
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
        completionDate: "2024-02-15",
        location: "Chennai",
        budget: "₹5-8 Lakhs"
      },
      {
        id: 7,
        title: "Balcony Glass Railing",
        category: "Framework Construction",
        subcategory: "Glass Framework",
        description: "Safety glass railings with aluminium framework for residential balconies.",
        materials: ["Tempered Glass", "Aluminium Framework", "SS Fixtures"],
        image: "https://images.unsplash.com/photo-1558882224-dda166733031?w=800&h=600&fit=crop",
        completionDate: "2024-03-12",
        location: "Chennai",
        budget: "₹3-5 Lakhs"
      },
      {
        id: 8,
        title: "Shopping Mall Atrium",
        category: "Exterior Design",
        subcategory: "Commercial",
        description: "Large atrium space with glass ceiling and aluminium framework.",
        materials: ["Glass Ceiling", "Aluminium Framework", "SS Supports"],
        image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&h=600&fit=crop",
        completionDate: "2023-11-20",
        location: "Chennai",
        budget: "₹45-50 Lakhs"
      },
      {
        id: 9,
        title: "Hotel Lobby Interior",
        category: "Interior Design",
        subcategory: "Hospitality",
        description: "Luxurious hotel lobby with custom furniture and lighting design.",
        materials: ["Custom Furniture", "Chandelier Lighting", "Premium Fabrics"],
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
        completionDate: "2024-01-08",
        location: "Chennai",
        budget: "₹20-25 Lakhs"
      }
    ];
    setProjects(mockProjects);
    setFilteredProjects(mockProjects);
  }, []);

  const handleFilterChange = (filters) => {
    let filtered = [...projects];

    if (filters.category && filters.category !== 'all') {
      filtered = filtered.filter(project => project.category === filters.category);
    }

    if (filters.subcategory && filters.subcategory !== 'all') {
      filtered = filtered.filter(project => project.subcategory === filters.subcategory);
    }

    if (filters.searchTerm) {
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(filters.searchTerm.toLowerCase())
      );
    }

    setFilteredProjects(filtered);
    setCurrentPage(1);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Our Projects
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Explore our comprehensive portfolio of interior/exterior designs and framework constructions
            </p>
          </div>

          <ProjectFilter onFilterChange={handleFilterChange} />
          
          <ProjectGrid 
            projects={currentProjects}
            onProjectClick={handleProjectClick}
          />
          
          {filteredProjects.length > projectsPerPage && (
            <Pagination
              projectsPerPage={projectsPerPage}
              totalProjects={filteredProjects.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          )}
        </div>
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
      
      <Footer />
    </div>
  );
};

export default Projects;