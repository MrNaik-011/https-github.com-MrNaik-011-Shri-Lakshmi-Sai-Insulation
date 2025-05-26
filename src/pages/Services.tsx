
import React, { useState } from 'react';
import { Factory, Shield, Users, Phone } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const serviceCategories = [
    {
      title: "Insulation Contractor Services",
      icon: Shield,
      description: "Professional contracting services for all types of insulation projects",
      services: [
        "Industrial Insulation Contractor",
        "Commercial Insulation Projects", 
        "Boiler Insulation",
        "Aluminum Cladding Services",
        "Project Management & Consultation"
      ]
    },
    {
      title: "Industrial Insulation Services",
      icon: Factory,
      description: "Specialized insulation solutions for industrial applications and equipment",
      services: [
        "Pipe Insulation",
        "Equipment Insulation",
        "Duct Insulation", 
        "Tank Insulation",
        "Vessel Insulation"
      ]
    },
    {
      title: "Hot & Cold Insulation",
      icon: Shield,
      description: "Temperature control solutions for various industrial processes",
      services: [
        "Hot Insulation Systems",
        "Cold Insulation Systems",
        "PUF Chemical Insulation",
        "Thermal Barrier Solutions",
        "Cryogenic Insulation"
      ]
    },
    {
      title: "Thermal & Acoustic Solutions",
      icon: Users,
      description: "Comprehensive solutions for thermal and acoustic performance",
      services: [
        "Sound Absorption",
        "Vibration Control",
        "Fire-Resistant Insulation",
        "Energy Efficiency Solutions",
        "Custom Insulation Design"
      ]
    }
  ];

  const ServiceModal = ({ service, onClose }: { service: any, onClose: () => void }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold text-[#3550A3]">{service.title}</h3>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
          </div>
          <service.icon className="h-16 w-16 text-[#3550A3] mb-4" />
          <p className="text-gray-700 mb-6">{service.description}</p>
          
          <h4 className="text-lg font-semibold text-[#3550A3] mb-3">Our Services Include:</h4>
          <ul className="space-y-2 mb-6">
            {service.services.map((item: string, index: number) => (
              <li key={index} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#3550A3] rounded-full"></span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
          
          <div className="flex gap-4">
            <button 
              onClick={onClose}
              className="bg-[#3550A3] text-white px-6 py-2 rounded-md hover:bg-[#2a3f8e] transition-colors"
            >
              Get Quote for This Service
            </button>
            <button 
              onClick={onClose}
              className="border border-[#3550A3] text-[#3550A3] px-6 py-2 rounded-md hover:bg-[#3550A3] hover:text-white transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#3550A3] text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Products & Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Comprehensive insulation solutions for industrial and commercial applications. 
            From design to installation, we deliver quality results that enhance efficiency and safety.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#3550A3] mb-4">Our Service Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of insulation services designed to meet the diverse 
              needs of industrial and commercial clients across various sectors.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <ServiceCard
                key={index}
                title={category.title}
                description={category.description}
                icon={category.icon}
                onViewDetails={() => setSelectedService(category.title)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#3550A3] mb-12 text-center">Complete Service Portfolio</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Pipe Insulation",
              "Boiler Insulation", 
              "Equipment Insulation",
              "Duct Insulation",
              "Tank & Vessel Insulation",
              "Hot Insulation Systems",
              "Cold Insulation Systems", 
              "PUF Chemical Insulation",
              "Aluminum Cladding",
              "Fire-Resistant Insulation",
              "Acoustic Insulation",
              "Thermal Barriers"
            ].map((service, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#3550A3] rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="font-medium text-gray-800">{service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials & Quality */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#3550A3] mb-6">Quality Materials & Installation</h2>
              <p className="text-gray-700 mb-4">
                We use only premium-grade insulation materials from trusted manufacturers, 
                ensuring optimal thermal performance, durability, and compliance with industry standards.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">✓</span>
                  <span className="text-gray-700">Premium Grade Materials</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">✓</span>
                  <span className="text-gray-700">Industry Standard Compliance</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">✓</span>
                  <span className="text-gray-700">Professional Installation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">✓</span>
                  <span className="text-gray-700">Quality Assurance Testing</span>
                </div>
              </div>
            </div>
            <div className="bg-[#F5F5F5] rounded-lg p-8">
              <h3 className="text-xl font-semibold text-[#3550A3] mb-6">Key Benefits</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Energy Efficiency</h4>
                  <p className="text-gray-600 text-sm">Reduce energy costs with proper thermal insulation</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Safety Enhancement</h4>
                  <p className="text-gray-600 text-sm">Protect personnel from hot surfaces and equipment</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Process Optimization</h4>
                  <p className="text-gray-600 text-sm">Maintain optimal operating temperatures</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Long-term Durability</h4>
                  <p className="text-gray-600 text-sm">Extended equipment life and reduced maintenance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#3550A3] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Custom Insulation Solutions?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Our experts can design and implement tailored insulation solutions for your specific requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#F9EFC7] text-[#3550A3] font-semibold px-8 py-3 rounded-md hover:bg-white transition-colors">
              Request Custom Quote
            </button>
            <button className="bg-transparent border-2 border-[#F9EFC7] text-[#F9EFC7] px-8 py-3 rounded-md hover:bg-[#F9EFC7] hover:text-[#3550A3] transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Service Modal */}
      {selectedService && (
        <ServiceModal 
          service={serviceCategories.find(cat => cat.title === selectedService)}
          onClose={() => setSelectedService(null)}
        />
      )}
    </div>
  );
};

export default Services;
