
import React, { useState } from 'react';
import { Phone, MapPin, Mail, Clock } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#3550A3] text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Get in touch with our insulation experts. We're here to help with your 
            industrial and commercial insulation needs.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-[#3550A3] mb-8">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-[#3550A3] mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
                    <p className="text-gray-600">
                      H.no 9-44, KBR Colony, Jinnaram,<br />
                      Near Jyothi Theater, IDA Bollaram,<br />
                      Hyderabad-502325, Telangana, India<br />
                      <span className="text-sm text-[#3550A3]">Additional operations in Visakhapatnam, AP</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-[#3550A3] mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                    <p className="text-gray-600">
                      Contact us for phone number details
                    </p>
                    <button className="bg-[#3550A3] text-[#F9EFC7] px-4 py-2 rounded-md mt-2 hover:bg-[#1a2766] transition-colors">
                      View Number
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-[#3550A3] mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">
                      Send us your queries and requirements
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-[#3550A3] mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Saturday: 9:00 AM - 6:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Company Details */}
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-[#3550A3] mb-4">Company Details</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Owner:</strong> L K</p>
                  <p><strong>GST No:</strong> 36APJPS3263K2ZS</p>
                  <p><strong>Established:</strong> 2012</p>
                  <p><strong>Business Type:</strong> Proprietorship Firm</p>
                  <p><strong>Experience:</strong> Over a Decade</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-gray-50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-[#3550A3] mb-6">Send us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3550A3]"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3550A3]"
                      />
                    </div>
                  </div>

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
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3550A3]"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3550A3]"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3550A3]"
                      placeholder="Tell us about your insulation requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#3550A3] text-[#F9EFC7] font-semibold py-3 rounded-md hover:bg-[#1a2766] transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#3550A3] mb-8 text-center">Find Us</h2>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="w-full h-96 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.868307945745!2d78.3372956753222!3d17.547926283279215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8eaacbe3d8a9%3A0xb78a05da5a2a8cc6!2sIDA%20Bollaram%2C%20Telangana!5e0!3m2!1sen!2sin!4v1716899850956!5m2!1sen!2sin"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Shri Lakshmi Sai Insulation Location"
                aria-label="Map showing location of Shri Lakshmi Sai Insulation in IDA Bollaram, Hyderabad"
              ></iframe>
            </div>
            <div className="mt-4 text-center">
              <p className="font-medium text-[#3550A3]">
                H.no 9-44, KBR Colony, Jinnaram, Near Jyothi Theater,
                <br /> IDA Bollaram, Hyderabad-502325, Telangana
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#3550A3] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Discuss Your Project?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Our insulation experts are ready to provide you with a detailed consultation 
            and custom quote for your specific requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#F9EFC7] text-[#3550A3] font-semibold px-8 py-3 rounded-md hover:bg-white transition-colors">
              Request a Quote
            </button>
            <button className="bg-transparent border-2 border-[#F9EFC7] text-[#F9EFC7] px-8 py-3 rounded-md hover:bg-[#F9EFC7] hover:text-[#3550A3] transition-colors">
              Schedule Visit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
