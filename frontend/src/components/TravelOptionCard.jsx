import React from 'react';

const TravelOptionCard = ({ icon, label, selected, onClick, darkMode }) => {
  return (
    <div 
      onClick={onClick}
      className={`flex gap-2 md:gap-3 items-center justify-center px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 rounded-lg border cursor-pointer transition-all w-full ${
        darkMode
          ? selected 
            ? 'border-blue-500 text-white' 
            : 'border-[#3A3A3A] text-gray-200'
          : selected 
            ? 'border-blue-700 text-gray-900' 
            : 'border-gray-400 text-gray-900'
      }`}
      style={{
        backgroundColor: darkMode 
          ? selected ? '#1e3a8a' /* blue-900 */ : '#333333'
          : selected ? '#93c5fd' /* blue-300 */ : '#FFFFFF'
      }}
    >
      <div className="text-lg sm:text-xl mb-0.5 sm:mb-1">{icon}</div>
      <div className="text-xs sm:text-sm font-medium">{label}</div>
    </div>
  );
};

export default TravelOptionCard;