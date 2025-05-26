
import React, { useState } from 'react';
import { Upload, FileText } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Quote = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    serviceType: '',
    location: '',
    projectDetails: '',
    timeline: '',
    budget: ''
  });

  const serviceTypes = [
    'Insulation Contractor Services',
    'Industrial Insulation Services',
    'Hot & Cold Insulation',
    'Boiler Insulation',
    'Aluminum Cladding Services',
    'PUF Chemical Insulation',
    'Thermal & Acoustic Solutions',
    'Custom Solution Required'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quote request submitted:', formData);
    toast({
      title: "Quote Request Submitted!",
      description: "Thank you for your interest. Our team will review your requirements and get back to you within 24 hours.",
    });
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      serviceType: '',
      location: '',
      projectDetails: '',
      timeline: '',
      budget: ''
    });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#1E2A78] text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Request a Quote</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Tell us about your insulation requirements, and we'll provide you with a 
            detailed, customized quote tailored to your specific needs.
          </p>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="text-center mb-8">
              <FileText className="h-12 w-12 text-[#1E2A78] mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-[#1E2A78] mb-2">Get Your Custom Quote</h2>
              <p className="text-gray-600">
                Fill out the form below with as much detail as possible. This helps us provide 
                you with the most accurate quote for your insulation project.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E2A78]"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E2A78]"
                    placeholder="Company name (optional)"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E2A78]"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E2A78]"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              {/* Project Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Type *
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E2A78]"
                  >
                    <option value="">Select a service</option>
                    {serviceTypes.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Location *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E2A78]"
                    placeholder="City, State"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E2A78]"
                  >
                    <option value="">Select timeline</option>
                    <option value="urgent">Urgent (Within 1 week)</option>
                    <option value="1-2-weeks">1-2 weeks</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="2-3-months">2-3 months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                    Estimated Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E2A78]"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-50k">Under ₹50,000</option>
                    <option value="50k-1l">₹50,000 - ₹1,00,000</option>
                    <option value="1l-3l">₹1,00,000 - ₹3,00,000</option>
                    <option value="3l-5l">₹3,00,000 - ₹5,00,000</option>
                    <option value="above-5l">Above ₹5,00,000</option>
                    <option value="discuss">Prefer to discuss</option>
                  </select>
                </div>
              </div>

              {/* Project Details */}
              <div>
                <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details & Requirements *
                </label>
                <textarea
                  id="projectDetails"
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E2A78]"
                  placeholder="Please provide details about your insulation requirements, including:
- Type of facility/equipment to be insulated
- Square footage or linear footage
- Temperature ranges (if applicable)
- Special requirements or specifications
- Any drawings or technical documents you can share"
                ></textarea>
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Documents (Optional)
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-2">
                    Upload drawings, specifications, or photos (Max 10MB)
                  </p>
                  <input
                    type="file"
                    multiple
                    accept=".pdf,.jpg,.jpeg,.png,.dwg,.doc,.docx"
                    className="hidden"
                    id="file-upload"
                  />
                  <label
                    htmlFor="file-upload"
                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md cursor-pointer hover:bg-gray-200 transition-colors"
                  >
                    Choose Files
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#1E2A78] text-white font-semibold px-8 py-4 rounded-md hover:bg-[#2A3A98] transition-colors text-lg"
                >
                  Submit Quote Request
                </button>
                <p className="text-sm text-gray-600 mt-4">
                  We'll review your requirements and get back to you within 24 hours with a detailed quote.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1E2A78] mb-12 text-center">What Happens Next?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1E2A78] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Review & Analysis</h3>
              <p className="text-gray-600">
                Our experts review your requirements and analyze the project scope to provide accurate pricing.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1E2A78] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Custom Proposal</h3>
              <p className="text-gray-600">
                We prepare a detailed proposal with specifications, timeline, and competitive pricing.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1E2A78] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Project Kickoff</h3>
              <p className="text-gray-600">
                Once approved, we schedule the project and begin professional installation with quality assurance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quote;
