import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-[#3550A3]/90 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          {/* Cute animated factory building */}
          <div className="mb-6 relative">
            {/* Factory building */}
            <div className="w-40 h-28 mx-auto border-4 border-[#F9EFC7] relative bg-[#3550A3]/50 rounded-lg">
              {/* Factory roof */}
              <div className="absolute -top-8 left-0 right-0 mx-auto w-36 h-8 bg-[#F9EFC7] rounded-t-lg"></div>
              
              {/* Factory chimney */}
              <div className="absolute -top-16 right-6 w-8 h-16 bg-[#F9EFC7] rounded-t-lg">
                {/* Smoke animation */}
                <div className="absolute -top-4 left-0 right-0">
                  {[1, 2, 3].map((i) => (
                    <div 
                      key={i} 
                      className={`absolute w-${i*2} h-${i*2} bg-white/70 rounded-full animate-ping opacity-75`} 
                      style={{ 
                        animationDuration: `${1 + i * 0.5}s`,
                        left: `${i * 3}px`,
                        top: `${-i * 4}px`
                      }}
                    ></div>
                  ))}
                </div>
              </div>
              
              {/* Windows */}
              <div className="absolute top-4 left-4 w-6 h-6 bg-[#F9EFC7] rounded-sm animate-pulse"></div>
              <div className="absolute top-4 right-4 w-6 h-6 bg-[#F9EFC7] rounded-sm animate-pulse" 
                   style={{ animationDelay: '0.3s' }}></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 bg-[#F9EFC7] rounded-sm animate-pulse"
                   style={{ animationDelay: '0.6s' }}></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 bg-[#F9EFC7] rounded-sm animate-pulse"
                   style={{ animationDelay: '0.9s' }}></div>
              
              {/* Door */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-10 h-14 bg-[#F9EFC7] rounded-t-lg"></div>
            </div>
            
            {/* Rotating gear animation */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-10 h-10 rounded-full border-4 border-[#F9EFC7] border-dashed animate-spin"></div>
            </div>
          </div>
          
          <p className="text-white font-medium mb-1">Insulating Your World</p>
          <div className="flex justify-center items-center space-x-1">
            <div className="w-2 h-2 bg-[#F9EFC7] rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
            <div className="w-2 h-2 bg-[#F9EFC7] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-[#F9EFC7] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
