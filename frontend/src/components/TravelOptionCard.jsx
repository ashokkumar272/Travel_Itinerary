import React from 'react';

const TravelOptionCard = ({ icon, label, selected, onClick, darkMode }) => {
  return (
    <div 
      className={`flex gap-3 items-center justify-center px-4 py-3 rounded-lg border cursor-pointer ${
        darkMode
          ? selected 
            ? 'bg-blue-900 border-blue-500 text-white' 
            : 'border-gray-600 bg-gray-700 text-gray-200'
          : selected 
            ? 'bg-blue-50 border-blue-600' 
            : 'border-gray-400'
      }`}
      onClick={onClick}
    >
      <div className="text-xl mb-1">{icon}</div>
      <div className="text-sm font-medium">{label}</div>
    </div>
  );
};

export default TravelOptionCard;