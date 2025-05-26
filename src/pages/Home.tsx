
import React from 'react';
import { Link } from 'react-router-dom';
import { Factory, Shield, Users, ArrowRight } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import ImageCarousel from '../components/ImageCarousel';

const Home = () => {
  const services = [
    {
      title: "Industrial Insulation Services",
      icon: Factory,
      description: "Comprehensive industrial insulation solutions for all your needs",
      image: "https://5.imimg.com/data5/SR/NS/MY-38303410/1437801496343-rs-500x500.jpg"
    },
    {
      title: "Thermal Insulation Products", 
      icon: Shield,
      description: "High-quality thermal insulation products and materials",
      image: "https://5.imimg.com/data5/ANDROID/Default/2025/1/478586241/UG/YB/KD/38303410/product-jpeg-500x500.jpg"
    },
    {
      title: "Hot & Cold PUF Chemical Insulation",
      icon: Shield,
      description: "Specialized PUF chemical insulation for temperature control",
      image: "https://5.imimg.com/data5/EN/FF/MY-38303410/hot-cold-puff-chemical-insulation-125x125.jpg"
    },
    {
      title: "Professional Insulation Services",
      icon: Users,
      description: "Expert insulation installation and maintenance services",
      image: "https://5.imimg.com/data5/QM/CE/MY-38303410/download-500x500.jpg"
    }
  ];

  const whyChooseUs = [
    "Over a Decade of Experience",
    "Verified GST Supplier", 
    "End-to-End Project Expertise",
    "Based in Hyderabad & Visakhapatnam",
    "Proprietorship with Industrial Expertise",
    "Quality Materials & Installation"
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#3550A3] to-[#2a3f8e] text-white py-16 overflow-hidden">
        {/* Background ImageCarousel for desktop only */}
        <div className="absolute inset-0 opacity-15 hidden lg:block">
          <ImageCarousel />
        </div>
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#3550A3]/90 to-[#2a3f8e]/80"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Industrial & Commercial<br />
                Insulation Experts
              </h1>
              <p className="text-xl mb-2 text-[#F9EFC7]">Over a Decade of Excellence</p>
              <p className="text-lg mb-8 text-gray-200">
                Delivering quality, energy-efficient insulation solutions to enhance performance & safety for industries.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/quote"
                  className="bg-[#F9EFC7] text-[#3550A3] font-semibold px-6 py-3 rounded-md hover:bg-white transition-colors"
                >
                  Get a Quote
                </Link>
                <Link
                  to="/services"
                  className="bg-transparent border-2 border-[#F9EFC7] text-[#F9EFC7] px-6 py-3 rounded-md hover:bg-[#F9EFC7] hover:text-[#3550A3] transition-colors"
                >
                  View Services
                </Link>
              </div>
            </div>
            {/* Visible carousel for larger devices */}
            <div className="hidden lg:block relative z-20">
              <ImageCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#3550A3] mb-4">About Us</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2012 and operating primarily from IDA Bollaram, Hyderabad, with additional operations in Visakhapatnam, 
                Shri Lakshmi Sai Insulation is a trusted proprietorship firm providing industrial and commercial insulation solutions across Telangana and Andhra Pradesh.
              </p>
              <p className="text-gray-700 mb-6">
                As a verified GST supplier, we specialize in delivering quality, energy-efficient 
                insulation solutions that enhance performance and safety for industries.
              </p>
              <Link
                to="/about"
                className="text-[#3550A3] font-semibold flex items-center gap-2 hover:text-[#3a6b3e] transition-colors"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-[#3550A3] rounded-lg p-8 text-white">
              <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2"><span className="text-[#3550A3] font-bold">✓</span> Established in 2012</li>
                <li className="flex items-center gap-2"><span className="text-[#3550A3] font-bold">✓</span> GST No: 36APJPS3263K2ZS</li>
                <li className="flex items-center gap-2"><span className="text-[#3550A3] font-bold">✓</span> Based in Hyderabad, Telangana with operations in Visakhapatnam, AP</li>
                <li className="flex items-center gap-2"><span className="text-[#3550A3] font-bold">✓</span> Industrial & Commercial Focus</li>
                <li className="flex items-center gap-2"><span className="text-[#3550A3] font-bold">✓</span> Quality Materials & Installation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Products & Services Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#3550A3] mb-4">Our Products & Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive insulation solutions for industrial and commercial applications, 
              backed by years of experience and quality materials.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                image={service.image}
                onViewDetails={() => window.location.href = '/services'}
              />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/services"
              className="bg-[#3550A3] text-[#F9EFC7] px-6 py-3 rounded-md hover:bg-[#1a2766] transition-colors inline-block"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#3550A3] mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We bring expertise, reliability, and quality to every insulation project, 
              ensuring optimal performance and customer satisfaction.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                <div className="w-6 h-6 bg-[#3550A3] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-gray-800 font-medium">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-16 bg-[#3550A3] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch with Us</h2>
          <p className="text-xl mb-8 text-gray-200">
            Have questions or need a custom quote? Our experts are here to help you find the perfect insulation solution.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Send us a Message</h3>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full p-3 rounded-md text-gray-800"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full p-3 rounded-md text-gray-800"
                />
                <textarea 
                  placeholder="Your Message" 
                  rows={4}
                  className="w-full p-3 rounded-md text-gray-800"
                ></textarea>
                <button className="w-full bg-[#F9EFC7] text-[#3550A3] font-semibold py-3 rounded-md hover:bg-white transition-colors">
                  Send Message
                </button>
              </form>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4 text-left">
                <div>
                  <h4 className="font-semibold text-[#F9EFC7]">Address</h4>
                  <p className="text-gray-200">
                    H.no 9 44, KBR Colony, Jinnaram,<br />
                    Near Jyothi Theater, IDA Bollaram,<br />
                    Hyderabad-502325, Telangana, India
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#F9EFC7]">Owner</h4>
                  <p className="text-gray-200">L K</p>
                </div>
                <button className="bg-[#F9EFC7] text-[#3550A3] font-semibold px-6 py-2 rounded-md hover:bg-white transition-colors">
                  Call Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white text-[#3550A3]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 text-gray-600">
            Get a custom quote for your insulation needs. Our experts are here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/quote"
              className="bg-[#F9EFC7] text-[#3550A3] font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-[#3550A3] transition-colors"
            >
              Request a Quote
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-[#3550A3] text-[#3550A3] px-8 py-3 rounded-md hover:bg-[#3550A3] hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
