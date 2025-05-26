
import React from 'react';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description?: string;
  icon: LucideIcon;
  image?: string;
  onViewDetails?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, image, onViewDetails }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      {image && (
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
        </div>
      )}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center mb-4">
          <Icon className="h-8 w-8 text-[#3550A3] mr-3" />
          <h4 className="font-semibold text-[#3550A3] text-lg flex-1">{title}</h4>
        </div>
        {description && (
          <p className="text-gray-600 text-sm mb-6 flex-1">{description}</p>
        )}
        <button 
          onClick={onViewDetails}
          className="flex items-center justify-center gap-2 text-[#3550A3] font-semibold hover:text-[#1a2766] transition-colors mt-auto"
        >
          View Details <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
