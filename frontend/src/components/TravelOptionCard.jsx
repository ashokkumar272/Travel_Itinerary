import React from 'react';

const TravelOptionCard = ({ icon, label, selected, onClick, darkMode }) => {
  return (
    <div 
      className={`flex gap-2 md:gap-3 items-center justify-center px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 rounded-lg border cursor-pointer transition-all w-full ${
        darkMode
          ? selected 
            ? 'bg-blue-900 border-blue-500 text-white' 
            : 'border-gray-600 bg-[#333333] text-gray-200'
          : selected 
            ? 'bg-blue-300 border-blue-700 ' 
            : 'border-gray-400'
      }`}
      onClick={onClick}
    >
      <div className="text-lg sm:text-xl mb-0.5 sm:mb-1">{icon}</div>
      <div className="text-xs sm:text-sm font-medium">{label}</div>
    </div>
  );
};

export default TravelOptionCard;