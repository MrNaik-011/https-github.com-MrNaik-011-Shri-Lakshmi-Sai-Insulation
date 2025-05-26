
import React from 'react';
import { Package, Star, ArrowRight, Phone } from 'lucide-react';

const RelatedProducts = () => {
  const products = [
    {
      title: "PUF Insulation Service",
      supplier: "Icon Insulation Hub",
      location: "Hyderabad, Telangana",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/6/425793565/FC/LB/SE/210960602/puf-insulation-service-500x500.jpg",
      price: "Ask Price"
    },
    {
      title: "Over Deck Insulation Service",
      supplier: "Pararth Hvac Products Private Limited",
      location: "Hyderabad, Telangana", 
      image: "https://5.imimg.com/data5/SELLER/Default/2022/9/JL/QT/PL/160044624/new-product-500x500.jpeg",
      price: "Ask Price"
    },
    {
      title: "LRB Rockwool Mattress",
      supplier: "KSS Insulations",
      location: "Hyderabad, Telangana",
      image: "https://5.imimg.com/data5/ANDROID/Default/2024/11/462619759/RC/GB/QE/77426700/product-1000x1000.jpg",
      price: "₹ 225/Square Meter"
    },
    {
      title: "Under take Thermal Insulation",
      supplier: "Sri Mallikarjuna Enterprises", 
      location: "Hyderabad, Telangana",
      image: "https://5.imimg.com/data5/TF/IV/PA/SELLER-45096853/under-take-thermal-insulation-500x500.jpg",
      price: "Ask Price"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#3550A3] to-[#2a3f8e] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <Package className="h-16 w-16 text-white mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Related Products from Top Suppliers</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Discover quality insulation products and services from verified suppliers in Hyderabad
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop";
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-[#3550A3] mb-2">{product.title}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="h-4 w-4 text-[#3550A3] fill-current" />
                    <span className="text-sm font-medium text-[#3550A3]">{product.supplier}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{product.location}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-bold text-[#3550A3]">{product.price}</span>
                  </div>
                  <div className="space-y-2">
                    <button className="w-full flex items-center justify-center gap-2 bg-[#F9EFC7] text-[#3550A3] py-2 px-4 rounded-md hover:bg-white transition-colors">
                      <Phone className="h-4 w-4 text-[#3550A3]" />
                      View Mobile Number
                    </button>
                    <button className="w-full bg-[#F9EFC7] text-[#3550A3] border border-[#3550A3] font-semibold py-2 px-4 rounded-md hover:bg-white transition-colors">
                      Contact Supplier
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose These Suppliers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#3550A3] text-center mb-12">Why Choose Our Partner Suppliers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Verified Suppliers",
                description: "All suppliers are GST verified and quality certified",
                icon: "✓"
              },
              {
                title: "Local Expertise", 
                description: "Hyderabad-based suppliers with local market knowledge",
                icon: "📍"
              },
              {
                title: "Quality Assurance",
                description: "Premium quality products with industry standards compliance",
                icon: "⭐"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-[#3550A3] mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#3550A3] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Looking for Specific Products?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Can't find what you're looking for? Contact us for custom sourcing and specialized insulation solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#F9EFC7] text-[#3550A3] font-semibold px-8 py-3 rounded-md hover:bg-white transition-colors">
              Custom Sourcing Request
            </button>
            <button className="bg-transparent border-2 border-[#F9EFC7] text-[#F9EFC7] px-8 py-3 rounded-md hover:bg-[#F9EFC7] hover:text-[#3550A3] transition-colors">
              Browse All Products
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RelatedProducts;
