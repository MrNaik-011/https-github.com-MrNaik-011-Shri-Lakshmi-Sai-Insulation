
import React from 'react';
import { Package, Thermometer, Shield, ArrowRight } from 'lucide-react';

const Categories = () => {
  const categories = [
    {
      title: "Thermal Insulation Materials",
      description: "High-performance thermal insulation solutions for industrial applications",
      image: "https://5.imimg.com/data5/SELLER/Default/2022/12/OF/EH/OV/66813090/17-1000x1000.jpg",
      icon: Thermometer,
      products: ["Rock Wool", "Glass Wool", "PUF Panels", "Ceramic Fiber"]
    },
    {
      title: "Insulation Material",
      description: "Comprehensive range of insulation materials for various applications",
      image: "https://5.imimg.com/data5/SELLER/Default/2023/9/345515297/TK/CS/DK/40557412/fibre-glass-wool-sheet-250x250.jpg",
      icon: Shield,
      products: ["Fiberglass Sheets", "Mineral Wool", "Foam Boards", "Reflective Insulation"]
    },
    {
      title: "Hot Insulation Services",
      description: "Professional installation services for high-temperature applications",
      image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=500&h=300&fit=crop",
      icon: Package,
      products: ["Pipe Insulation", "Boiler Cladding", "Equipment Wrapping", "Maintenance Services"]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#3550A3] to-[#2a3f8e] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <Package className="h-16 w-16 text-white mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Related Categories</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Explore our comprehensive range of insulation categories and specialized services
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop";
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <category.icon className="h-16 w-16 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <category.icon className="h-8 w-8 text-[#3550A3]" />
                    <h3 className="text-xl font-semibold text-[#3550A3]">{category.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{category.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Available Products:</h4>
                    <ul className="space-y-2">
                      {category.products.map((product, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-[#3550A3] rounded-full"></div>
                          <span className="text-gray-700">{product}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full flex items-center justify-center gap-2 bg-[#F9EFC7] text-[#3550A3] py-3 px-4 rounded-md hover:bg-white transition-colors">
                    Explore Category <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#3550A3] text-center mb-12">Why Choose Our Category Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Wide Selection",
                description: "Comprehensive range across all insulation categories",
                icon: "🎯"
              },
              {
                title: "Expert Guidance",
                description: "Professional consultation for category selection",
                icon: "👨‍🔬"
              },
              {
                title: "Quality Materials",
                description: "Premium grade materials in every category",
                icon: "⭐"
              },
              {
                title: "Custom Solutions",
                description: "Tailored solutions for specific category needs",
                icon: "🔧"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-[#3550A3] mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#3550A3] text-center mb-12">Category Applications</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Industrial Applications",
                items: ["Power Plants", "Chemical Processing", "Oil & Gas", "Manufacturing"]
              },
              {
                title: "Commercial Applications", 
                items: ["Office Buildings", "Shopping Malls", "Hotels", "Hospitals"]
              },
              {
                title: "Specialized Applications",
                items: ["Marine Industry", "Aerospace", "Food Processing", "Pharmaceutical"]
              }
            ].map((application, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-[#3550A3] mb-4">{application.title}</h3>
                <ul className="space-y-2">
                  {application.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#3550A3] rounded-full"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#3550A3] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore Our Categories?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Get expert advice on the best category solutions for your specific requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#F9EFC7] text-[#3550A3] font-semibold px-8 py-3 rounded-md hover:bg-white transition-colors">
              Get Category Consultation
            </button>
            <button className="bg-transparent border-2 border-[#F9EFC7] text-[#F9EFC7] px-8 py-3 rounded-md hover:bg-[#F9EFC7] hover:text-[#3550A3] transition-colors">
              Download Catalog
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categories;
