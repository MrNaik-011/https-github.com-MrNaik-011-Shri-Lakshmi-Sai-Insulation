import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';

const FloatingActionButtons = () => {
  // Phone number for the business based on memory
  const phoneNumber = '+919849097711'; // Example phone number
  
  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-4 z-40">
      {/* WhatsApp Button */}
      <a 
        href={`https://wa.me/${phoneNumber}?text=Hello, I'm interested in your insulation services.`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
        aria-label="Contact us via WhatsApp"
      >
        <MessageSquare className="h-6 w-6 text-white" />
      </a>
      
      {/* Call Button */}
      <a 
        href={`tel:${phoneNumber}`}
        className="bg-[#3550A3] p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
        aria-label="Call us"
      >
        <Phone className="h-6 w-6 text-[#F9EFC7]" />
      </a>
    </div>
  );
};

export default FloatingActionButtons;
