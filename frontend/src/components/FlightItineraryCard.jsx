import React from 'react';
import plane from '../assets/Plane.png'
import arrow from '../assets/Vector.png'
import { usePanel } from '../context/PanelContext';

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
  const { openPanel } = usePanel();
  
  // Format date for display (assuming date is passed as string in format YYYY-MM-DD)
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).replace(/\//g, '.');
  };

  const handleFlightClick = () => {
    const flightDetailContent = (
      <div className="space-y-6">
        <div className="rounded-lg overflow-hidden relative h-36 bg-blue-600">
          <img 
            src={plane} 
            alt="Airplane" 
            className="absolute top-0 right-0 h-24 object-contain opacity-70"
          />
          <div className="absolute inset-0 p-4 flex flex-col justify-center text-white">
            <h3 className="text-xl font-bold">Flight to {destinationCity}</h3>
            <p className="text-white/80">{formatDate(flightDate)}</p>
          </div>
        </div>
        
        <div className="space-y-5">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <p className="text-gray-500 dark:text-gray-400">Departure</p>
              <p className="text-xl font-bold">{departureTime}</p>
              <p className="font-medium">{formatDate(flightDate)}</p>
            </div>
            <div className="flex-1 px-4 flex flex-col items-center">
              <div className="w-full flex items-center">
                <div className="h-1 bg-gray-300 dark:bg-gray-700 flex-1"></div>
                <div className="h-3 w-3 rounded-full bg-blue-600 mx-1"></div>
                <div className="h-1 bg-gray-300 dark:bg-gray-700 flex-1"></div>
              </div>
              <img src={arrow} alt="Arrow" className="my-2 h-4" />
              <p className="text-xs text-gray-500 dark:text-gray-400 text-center">Direct Flight</p>
            </div>
            <div className="text-right space-y-1">
              <p className="text-gray-500 dark:text-gray-400">Arrival</p>
              <p className="text-xl font-bold">7:25 pm</p>
              <p className="font-medium">{formatDate(flightDate)}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-300 dark:border-gray-700">
            <div>
              <p className="text-gray-500 dark:text-gray-400">From</p>
              <p className="font-bold text-lg">{origin}</p>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                {originCity}, {originCountry}
              </p>
            </div>
            <div>
              <p className="text-gray-500 dark:text-gray-400">To</p>
              <p className="font-bold text-lg">{destination}</p>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                {destinationCity}, {destinationCountry}
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-300 dark:border-gray-700 space-y-3">
            <div className="flex justify-between">
              <p className="text-gray-500 dark:text-gray-400">Flight Number</p>
              <p className="font-semibold">NH 829</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-500 dark:text-gray-400">Airline</p>
              <p className="font-semibold">ANA All Nippon Airways</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-500 dark:text-gray-400">Class</p>
              <p className="font-semibold">Economy</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-500 dark:text-gray-400">Duration</p>
              <p className="font-semibold">8h 35m</p>
            </div>
          </div>
        </div>
      </div>
    );
    
    openPanel("Flight Details", 'flight', flightDetailContent);
    
    // Call original onClick if provided (for backward compatibility)
    if (onClick) onClick();
  };

  return (
    <div 
      className={`w-full h-auto min-h-[124px] rounded-[16px] overflow-hidden relative cursor-pointer ${
        darkMode ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white'
      }`}
      onClick={handleFlightClick}
    >
      {/* Main content area */}
      <div className="p-3 md:p-4 lg:p-5 h-full flex flex-col justify-between">
        <div>
          <div className="absolute top-2 md:top-3 lg:top-4 right-4 md:right-6 lg:right-8 text-xs sm:text-sm md:text-base">
            <a href="#" className="text-yellow-300 font-medium text-underline-offset-2 decoration-1">See all</a>
          </div>
          
          {/* Flight title */}
          <div className="mb-2 md:mb-3">
            <h2 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-bold">Flight Details</h2>
            <p className="text-[12px] sm:text-[14px] md:text-[16px] font-medium">
              {formatDate(flightDate)}, {departureTime}
            </p>
          </div>
        </div>

        {/* Flight route */}
        <div className="flex mt-1 sm:mt-2 md:mt-3 md:gap-10 pb-2 md:pb-3">
          <div className="flex flex-col">
            <span className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-bold">{origin}</span>
            <span className="text-[12px] sm:text-[14px] md:text-[16px] font-medium">{originCity}, {originCountry}</span>
          </div>
          
          <div className="flex relative px-2 sm:px-4 md:px-6 lg:px-10 my-auto">
            <div>
             <img src={arrow} alt="" className="w-full h-auto" />
            </div>
          </div>
          
          <div className="flex flex-col">
            <span className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-bold">{destination}</span>
            <span className="text-[12px] sm:text-[14px] md:text-[16px] font-medium">{destinationCity}, {destinationCountry}</span>
          </div>
        </div>
      </div>
      
      {/* Airplane icon in top right */}
      <div className="absolute top-0 right-0">
        <img src={plane} alt="" className="w-auto h-auto max-w-full md:max-w-[120%] lg:max-w-[140%]" />
      </div>
    </div>
  );
};

export default FlightCard;