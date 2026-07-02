import React, { useState } from 'react';
import * as Icons from 'lucide-react';

const BookingForm = ({ isOpen, onClose, selectedService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: selectedService?.title || '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const closeIcon = Icons?.['X'] || Icons.HelpCircle;
  const userIcon = Icons?.['User'] || Icons.HelpCircle;
  const mailIcon = Icons?.['Phone'] || Icons.HelpCircle;
  const homeIcon = Icons?.['Home'] || Icons.HelpCircle;
  const dollarSignIcon = Icons?.['DollarSign'] || Icons.HelpCircle;
  const calendarIcon = Icons?.['Calendar'] || Icons.HelpCircle;
  const messageIcon = Icons?.['MessageSquare'] || Icons.HelpCircle;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Connect to backend API when ready
    console.log('Form submitted:', formData);
    alert('Thank you for your booking request! We will contact you within 24 hours.');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-slate-200 p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-slate-800">
            Book Free Consultation
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors"
          >
            {closeIcon && <closeIcon size={24} className="text-slate-600" />}
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
              <div className="relative">
                {userIcon && <userIcon size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />}
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number *</label>
              <div className="relative">
                {mailIcon && <mailIcon size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />}
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+91 98765 43210"
                />
              </div>
            </div>
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="your@email.com"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <label className="block text-sm font-medium text-slate-700 mb-2">Service Required</label>
              <div className="relative">
                {homeIcon && <homeIcon size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />}
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                >
                  <option value="">Select a service</option>
                  <option value="Interior Design">Interior Design</option>
                  <option value="Exterior Design">Exterior Design</option>
                  <option value="MS/SS Framework">MS/SS Framework</option>
                  <option value="Aluminium Work">Aluminium Work</option>
                  <option value="Glass Framework">Glass Framework</option>
                  <option value="Custom Solutions">Custom Solutions</option>
                </select>
              </div>
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-slate-700 mb-2">Project Type</label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
              >
                <option value="">Select project type</option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
                <option value="Industrial">Industrial</option>
                <option value="Hospitality">Hospitality</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <label className="block text-sm font-medium text-slate-700 mb-2">Budget Range</label>
              <div className="relative">
                {dollarSignIcon && <dollarSignIcon size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />}
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                >
                  <option value="">Select budget range</option>
                  <option value="Under 5 Lakhs">Under ₹5 Lakhs</option>
                  <option value="5-10 Lakhs">₹5-10 Lakhs</option>
                  <option value="10-25 Lakhs">₹10-25 Lakhs</option>
                  <option value="25-50 Lakhs">₹25-50 Lakhs</option>
                  <option value="Above 50 Lakhs">Above ₹50 Lakhs</option>
                </select>
              </div>
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Timeline</label>
              <div className="relative">
                {calendarIcon && <calendarIcon size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />}
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                >
                  <option value="">Select timeline</option>
                  <option value="Immediate">Immediate (within 1 month)</option>
                  <option value="1-3 months">1-3 months</option>
                  <option value="3-6 months">3-6 months</option>
                  <option value="6+ months">6+ months</option>
                  <option value="Just exploring">Just exploring options</option>
                </select>
              </div>
            </div>
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-slate-700 mb-2">Project Details</label>
            <div className="relative">
              {messageIcon && <messageIcon size={20} className="absolute left-3 top-3 text-slate-400" />}
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Tell us more about your project requirements, preferences, or any specific details..."
              />
            </div>
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-medium"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;