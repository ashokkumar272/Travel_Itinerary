import React from 'react';
import plane from '../assets/Plane.png'
import arrow from '../assets/Vector.png'

const FlightCard = ({ 
  flightDate, 
  departureTime, 
  origin, 
  originCity, 
  originCountry,
  destination, 
  destinationCity, 
  destinationCountry,
  darkMode,
  onClick
}) => {
  // Format date for display (assuming date is passed as string in format YYYY-MM-DD)
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).replace(/\//g, '.');
  };

  return (
    <div 
      className={`w-full px-1 sm:px-2 max-w-[353px] h-auto min-h-[124px] rounded-[16px] overflow-hidden relative cursor-pointer ${
        darkMode ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white'
      }`}
      onClick={onClick}
    >
      {/* Main content area */}
      <div className="p-2 sm:p-3 h-full flex flex-col justify-between">
        <div>
          <div className="absolute top-2 right-4 sm:right-6 text-xs sm:text-sm">
            <a href="#" className="text-yellow-300 font-medium text-underline-offset-2 decoration-1">See all</a>
          </div>
          
          {/* Flight title */}
          <div className="mb-2">
            <h2 className="text-[14px] sm:text-[16px] font-bold">Flight Details</h2>
            <p className="text-[12px] sm:text-[14px] font-medium">
              {formatDate(flightDate)}, {departureTime}
            </p>
          </div>
        </div>

        {/* Flight route */}
        <div className="flex mt-1 sm:mt-2 pb-2">
          <div className="flex flex-col">
            <span className="text-[14px] sm:text-[16px] font-bold">{origin}</span>
            <span className="text-[12px] sm:text-[14px] font-medium">{originCity}, {originCountry}</span>
          </div>
          
          <div className="flex relative px-2 sm:px-4 my-auto">
            <div>
             <img src={arrow} alt="" className="w-full h-auto" />
            </div>
          </div>
          
          <div className="flex flex-col">
            <span className="text-[14px] sm:text-[16px] font-bold">{destination}</span>
            <span className="text-[12px] sm:text-[14px] font-medium">{destinationCity}, {destinationCountry}</span>
          </div>
        </div>
      </div>
      
      {/* Airplane icon in top right */}
      <div className="absolute top-0 right-0">
        <img src={plane} alt="" className="w-auto h-auto max-w-full" />
      </div>
    </div>
  );
};

export default FlightCard;