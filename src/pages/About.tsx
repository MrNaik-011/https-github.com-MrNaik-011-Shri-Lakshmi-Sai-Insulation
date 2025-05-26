
import React from 'react';
import { Factory, Shield, Users, Phone } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#3550A3] text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Leading provider of industrial and commercial insulation solutions in Hyderabad, 
            with over 8 years of expertise and commitment to quality.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#3550A3] mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Established in 2012, Shri Lakshmi Sai Insulation began as a proprietorship firm with a clear mission: 
                to deliver quality, energy-efficient insulation solutions that enhance 
                performance and safety for industries across Telangana and Andhra Pradesh.
              </p>
              <p className="text-gray-700 mb-4">
                Operating primarily from our base in IDA Bollaram, Hyderabad, with additional operations in Visakhapatnam, 
                we have grown to become a trusted partner for leading industrial clients throughout the region, providing end-to-end 
                insulation solutions that meet the highest standards of quality and efficiency.
              </p>
              <p className="text-gray-700">
                As a verified GST supplier (GST No: 36APJPS3263K2ZS), we ensure complete 
                transparency and compliance in all our business operations.
              </p>
            </div>
            <div className="bg-[#F5F5F5] rounded-lg p-8">
              <h3 className="text-xl font-semibold text-[#3550A3] mb-6">Company Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Factory className="h-6 w-6 text-[#3550A3] mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Established 2012</h4>
                    <p className="text-gray-600 text-sm">Over a decade of industry experience</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="h-6 w-6 text-[#3550A3] mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Verified Business</h4>
                    <p className="text-gray-600 text-sm">GST No: 36APJPS3263K2ZS | Verified on IndiaMART</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-[#3550A3] mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Trusted by Industry Leaders</h4>
                    <p className="text-gray-600 text-sm">Serving major industrial clients</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-6 w-6 text-[#3550A3] mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Owner: L K</h4>
                    <p className="text-gray-600 text-sm">Leadership with vision</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#3550A3] mb-4">Our Mission & Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              As a Proprietorship Firm, we are committed to delivering exceptional insulation solutions with integrity, expertise, and attention to detail.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#3550A3] rounded-full flex items-center justify-center mx-auto mb-4">
                <Factory className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#3550A3] mb-3">Our Mission</h3>
              <p className="text-gray-700">
                To deliver quality, energy-efficient insulation solutions that enhance 
                performance and safety for industries while building long-term partnerships.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#3550A3] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#3550A3] mb-3">Quality Commitment</h3>
              <p className="text-gray-700">
                We use only premium materials and proven installation techniques to ensure 
                optimal performance and longevity of our insulation solutions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#3550A3] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#3550A3] mb-3">Customer Focus</h3>
              <p className="text-gray-700">
                Every project is approached with attention to detail, understanding client 
                needs, and delivering solutions that exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#3550A3] mb-12 text-center">Our Journey</h2>
          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-[#3550A3] rounded-full flex items-center justify-center text-white font-bold">
                2012
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Company Founded</h3>
                <p className="text-gray-600">Established as a proprietorship firm with a vision to serve industrial insulation needs</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-[#3550A3] rounded-full flex items-center justify-center text-white font-bold">
                2017
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Business Registration</h3>
                <p className="text-gray-600">Formal registration and expansion of service offerings</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-[#3550A3] rounded-full flex items-center justify-center text-white font-bold">
                2022
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Expanded Services</h3>
                <p className="text-gray-600">Extended our offerings to include comprehensive hot and cold insulation solutions</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold">
                2025
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Over a Decade of Excellence</h3>
                <p className="text-gray-600">Continuing to serve with expertise and quality, building lasting partnerships with industry leaders across Telangana and Andhra Pradesh</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Sectors */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#3550A3] mb-12 text-center">Industries We Serve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Chemical Processing",
              "Power Generation", 
              "Oil & Gas",
              "Food & Beverage",
              "Pharmaceutical",
              "Manufacturing",
              "HVAC Systems",
              "Commercial Buildings"
            ].map((industry, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center">
                <Factory className="h-8 w-8 text-[#3550A3] mx-auto mb-2" />
                <p className="font-medium text-gray-800">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
