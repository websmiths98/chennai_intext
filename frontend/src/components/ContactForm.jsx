import React, { useState } from 'react';
import * as Icons from 'lucide-react';

const ContactForm = ({ selectedService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: selectedService || '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
    contactMethod: 'phone'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const userIcon = Icons?.['User'] || Icons.HelpCircle;
  const mailIcon = Icons?.['Mail'] || Icons.HelpCircle;
  const phoneIcon = Icons?.['Phone'] || Icons.HelpCircle;
  const homeIcon = Icons?.['Home'] || Icons.HelpCircle;
  const dollarSignIcon = Icons?.['DollarSign'] || Icons.HelpCircle;
  const calendarIcon = Icons?.['Calendar'] || Icons.HelpCircle;
  const messageIcon = Icons?.['MessageSquare'] || Icons.HelpCircle;
  const sendIcon = Icons?.['Send'] || Icons.HelpCircle;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Connect to Django Backend
    try {
      // Map frontend state to backend expected fields
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: '', // Optional field not in form but in serializer, can be empty
        project_type: formData.projectType || 'Other',
        budget: formData.budget || 'Not Sure',
        timeline: formData.timeline || 'Just exploring',
        message: formData.message,
        preferred_contact: formData.contactMethod,
        source: 'Website Contact Form - Service: ' + (formData.service || 'General')
      };

      const response = await fetch('http://localhost:8000/api/contact/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (response.ok) {
        alert('Thank you for your inquiry! We will contact you shortly.');
        setFormData({
          name: '', email: '', phone: '', service: selectedService || '', projectType: '',
          budget: '', timeline: '', message: '', contactMethod: 'phone'
        });
      } else {
        console.error('Backend validation error:', result);
        alert('There was an issue submitting the form: ' + JSON.stringify(result));
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Sorry, failed to connect to the server. Please ensure the backend is running.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Get a Free Quote</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
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
            <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
            <div className="relative">
              {mailIcon && <mailIcon size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />}
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number *</label>
            <div className="relative">
              {phoneIcon && <phoneIcon size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />}
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

          <div className="relative">
            <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Contact Method</label>
            <select
              name="contactMethod"
              value={formData.contactMethod}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
            >
              <option value="phone">Phone Call</option>
              <option value="whatsapp">WhatsApp</option>
              <option value="email">Email</option>
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
                <option value="Not Sure">Not Sure Yet</option>
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
              placeholder="Tell us more about your project requirements, space dimensions, style preferences, or any specific needs..."
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isSubmitting ? (
            <span>Sending...</span>
          ) : (
            <>
              Send Inquiry
              {sendIcon && <sendIcon size={20} className="ml-2" />}
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;