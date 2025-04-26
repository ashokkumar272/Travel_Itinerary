import React from 'react';


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
      className={`w-full px-1 max-w-[353px] h-[124px] rounded-[16px] overflow-hidden relative cursor-pointer ${
        darkMode ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white'
      }`}
      onClick={onClick}
    >
      {/* Main content area */}
      <div className="p-2 h-full flex flex-col justify-between">
        <div>
          <div className="absolute top-2 right-6 text-sm">
            <a href="#" className="text-yellow-300 font-medium">See all</a>
          </div>
          
          {/* Flight title */}
          <div className="mb-2">
            <h2 className="text-[16px] font-bold">Flight Details</h2>
            <p className="text-[14px] font-medium">
              {formatDate(flightDate)}, {departureTime}
            </p>
          </div>
        </div>

        {/* Flight route */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex flex-col">
            <span className="text-[16px] font-bold">{origin}</span>
            <span className="text-[14px] font-medium">{originCity}, {originCountry}</span>
          </div>
          
          <div className="mx-3 flex-1 relative px-2">
            <div className="h-[2px] bg-white w-full absolute top-1/2 transform -translate-y-1/2"></div>
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          
          <div className="flex flex-col items-end">
            <span className="text-[16px] font-bold">{destination}</span>
            <span className="text-[14px] font-medium">{destinationCity}, {destinationCountry}</span>
          </div>
        </div>
      </div>
      
      {/* Airplane icon in top right */}
      <div className="absolute top-0 right-0">
        <svg width="120" height="120" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.3">
          <path d="M180 40L144 76M144 76L160 136L136 112L104 144H72L100 116L76 92L16 108L52 72M144 76L52 72" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
};

export default FlightCard;