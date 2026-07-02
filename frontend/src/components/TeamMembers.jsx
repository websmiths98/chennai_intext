import React from 'react';
import * as Icons from 'lucide-react';

const TeamMembers = () => {
  const linkedinIcon = Icons?.['Linkedin'] || Icons.HelpCircle;
  const mailIcon = Icons?.['Mail'] || Icons.HelpCircle;

  const teamMembers = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      experience: "15+ years",
      expertise: "Interior Design, Project Management",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      email: "rajesh@chennaiinteriors.com"
    },
    {
      name: "Priya Sharma",
      role: "Creative Director",
      experience: "12+ years",
      expertise: "Interior Design, Space Planning",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      email: "priya@chennaiinteriors.com"
    },
    {
      name: "Vikram Singh",
      role: "Technical Director",
      experience: "18+ years",
      expertise: "MS/SS Framework, Structural Design",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      email: "vikram@chennaiinteriors.com"
    },
    {
      name: "Anita Reddy",
      role: "Project Manager",
      experience: "10+ years",
      expertise: "Aluminium & Glass Work, Site Management",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      email: "anita@chennaiinteriors.com"
    }
  ];

  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Leadership Team</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Meet the experienced professionals who drive our commitment to excellence and innovation
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-blue-100">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <h3 className="text-xl font-semibold text-slate-800 mb-1">{member.name}</h3>
            <p className="text-blue-600 font-medium mb-2">{member.role}</p>
            <p className="text-sm text-slate-500 mb-2">{member.experience} experience</p>
            <p className="text-sm text-slate-600 mb-4">{member.expertise}</p>
            
            <div className="flex justify-center space-x-3 pt-4 border-t border-slate-200">
              <a
                href={member.linkedin}
                className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                {linkedinIcon && <linkedinIcon size={16} />}
              </a>
              <a
                href={`mailto:${member.email}`}
                className="w-8 h-8 bg-slate-600 text-white rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors"
              >
                {mailIcon && <mailIcon size={16} />}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-8">
          <h3 className="text-2xl font-semibold text-slate-800 mb-4">Our Team Strength</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-1">45+</div>
              <div className="text-sm text-slate-600">Total Team Members</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-1">15+</div>
              <div className="text-sm text-slate-600">Design Professionals</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-1">20+</div>
              <div className="text-sm text-slate-600">Skilled Technicians</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-1">10+</div>
              <div className="text-sm text-slate-600">Project Managers</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;