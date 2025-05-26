
import React from 'react';
import { FileText, Package, Shield, ArrowRight } from 'lucide-react';

const HSNDeals = () => {
  const hsnData = {
    code: "8544",
    description: "Insulated (including enamelled or anodised) wire, cable (including co-axial cable) and other insulated electric conductors, whether or not fitted with connectors; optical fibre cables, made up of individually sheathed fibres, whether or not assembled with electric conductors or fitted with connectors - winding wire"
  };

  const relatedProducts = [
    {
      title: "Insulated Wire & Cables",
      description: "High-quality insulated electrical conductors for industrial applications",
      features: ["Enamelled conductors", "Anodised options", "Co-axial cables"]
    },
    {
      title: "Optical Fibre Cables",
      description: "Advanced optical fibre solutions with individual sheathing",
      features: ["Individual sheathed fibres", "Electric conductor assembly", "Connector fittings"]
    },
    {
      title: "Winding Wire Solutions",
      description: "Specialized winding wire for electrical equipment and machinery",
      features: ["Industrial grade", "Temperature resistant", "Various gauges available"]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#3550A3] to-[#2a3f8e] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <FileText className="h-16 w-16 text-white mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Deals in HSN Code</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Comprehensive electrical insulation solutions under HSN classification
          </p>
        </div>
      </section>

      {/* HSN Code Details */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-gradient-to-r from-[#3550A3] to-[#2a3f8e] text-white rounded-2xl p-8 mb-12">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <Package className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white">HSN Code</h3>
                <p className="text-4xl font-bold mt-2">{hsnData.code}</p>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-xl font-semibold text-white mb-4">HSN Description</h3>
                <p className="text-gray-200 leading-relaxed">
                  {hsnData.description}
                </p>
              </div>
            </div>
          </div>

          {/* Product Categories */}
          <div className="grid md:grid-cols-3 gap-8">
            {relatedProducts.map((product, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <Shield className="h-10 w-10 text-[#3550A3] mb-4" />
                <h4 className="text-xl font-semibold text-[#3550A3] mb-3">{product.title}</h4>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-[#3550A3] rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="flex items-center gap-2 text-[#3550A3] font-semibold hover:text-[#1a2766] transition-colors">
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#3550A3] mb-8">HSN Code Compliance & Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "GST Compliance",
              "Quality Standards",
              "Industry Certification", 
              "Export Ready"
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-[#3550A3] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <h4 className="font-semibold text-gray-800">{benefit}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#3550A3] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need HSN Code Specific Products?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Contact us for HSN 8544 compliant insulation solutions and electrical conductors.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#F9EFC7] text-[#3550A3] font-semibold px-8 py-3 rounded-md hover:bg-white transition-colors">
              Request Quote
            </button>
            <button className="bg-transparent border-2 border-[#F9EFC7] text-[#F9EFC7] px-8 py-3 rounded-md hover:bg-[#F9EFC7] hover:text-[#3550A3] transition-colors">
              View Catalog
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HSNDeals;
