import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CompanyStory from '../components/CompanyStory';
import TeamMembers from '../components/TeamMembers';
import Certifications from '../components/Certifications';
import MissionVision from '../components/MissionVision';

const About = () => {
  const [companyInfo, setCompanyInfo] = useState(null);

  useEffect(() => {
    // TODO: Connect to the backend API when ready.
    // const fetchCompanyInfo = async () => {
    //   try {
    //     const response = await fetch('/api/company/info');
    //     const data = await response.json();
    //     setCompanyInfo(data);
    //   } catch (error) {
    //     console.error('Error fetching company info:', error);
    //   }
    // };
    // fetchCompanyInfo();

    // Using mock data for now
    const mockCompanyInfo = {
      name: "Chennai Interiors And Exteriors",
      established: 2014,
      projectsCompleted: 850,
      satisfiedClients: 780,
      teamSize: 45,
      specializations: ["Interior Design", "Exterior Design", "MS/SS Framework", "Aluminium Work", "Glass Framework"]
    };
    setCompanyInfo(mockCompanyInfo);
  }, []);

  if (!companyInfo) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Header />
        <div className="pt-20 flex items-center justify-center h-64">
          <div className="text-slate-600">Loading company information...</div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              About Chennai Interiors
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Transforming spaces since 2014 with innovative design solutions and expert craftsmanship. 
              We specialize in creating environments that inspire, function beautifully, and stand the test of time.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">{companyInfo.established}</div>
              <div className="text-slate-600">Year Established</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">{companyInfo.projectsCompleted}+</div>
              <div className="text-slate-600">Projects Completed</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">{companyInfo.satisfiedClients}+</div>
              <div className="text-slate-600">Satisfied Clients</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">{companyInfo.teamSize}+</div>
              <div className="text-slate-600">Team Members</div>
            </div>
          </div>

          <CompanyStory />
          <MissionVision />
          <TeamMembers />
          <Certifications />

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-slate-800 to-blue-900 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Space?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-slate-800 font-semibold rounded-lg hover:bg-slate-100 transition-colors">
                Schedule Consultation
              </button>
              <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-800 transition-all">
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;