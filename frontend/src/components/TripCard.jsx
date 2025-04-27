import React from 'react';

const TripCard = ({ 
  destination, 
  startDate, 
  endDate, 
  duration, 
  groupSize, 
  activities, 
  image,
  darkMode 
}) => {
  // Format dates for display (assuming dates are passed in as strings in format YYYY-MM-DD)
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).replace(/\//g, '.');
  };

  // Parse group size information (assuming format like "4 (2M,2F)")
  const [totalCount, details] = groupSize.split(' ');

  return (
    <div 
      className="w-full h-auto min-h-[330px] rounded-[16px] overflow-hidden relative text-white"
      style={{ 
        backgroundImage: `url(${image})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Gradient overlay to ensure text visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none"></div>
      
      {/* Top section - Destination name */}
      <div className="absolute p-4">
        <h2 className="text-2xl md:text-3xl lg:text-[40px] font-bold tracking-wider">{destination}</h2>
        <p className="text-base md:text-lg font-medium">
          {formatDate(startDate)} - {formatDate(endDate)}
        </p>
      </div>

      {/* Bottom info section with icons */}
      <div className="absolute bottom-4 left-3 w-auto">
        {/* Blur effect background for the info section */}
        <div className="absolute inset-0 backdrop-blur-md bg-black/10 rounded-lg"></div>
        
        <div className="relative flex sm:flex-row gap-1 sm:gap-2 md:gap-3 p-2">
          <div className="flex items-center mb-1 sm:mb-0">
            <div className="w-[30px] h-[30px] md:w-[36px] md:h-[36px] rounded-full bg-[rgba(255,255,255,0.2)] flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="ml-2">
              <div className="font-semibold font-montserrat text-sm md:text-base">{duration} Days</div>
              <div className="text-xs md:text-sm text-gray-200">Duration</div>
            </div>
          </div>
          
          <div className="flex items-center mb-1 sm:mb-0">
            <div className="w-[30px] h-[30px] md:w-[36px] md:h-[36px] rounded-full bg-[rgba(255,255,255,0.2)] flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 20H22V18C22 16.3431 20.6569 15 19 15C18.0444 15 17.1931 15.4468 16.6438 16.1429M17 20H7M17 20V18C17 17.3438 16.8736 16.717 16.6438 16.1429M7 20H2V18C2 16.3431 3.34315 15 5 15C5.95561 15 6.80686 15.4468 7.35625 16.1429M7 20V18C7 17.3438 7.12642 16.717 7.35625 16.1429M7.35625 16.1429C8.0935 14.301 9.89482 13 12 13C14.1052 13 15.9065 14.301 16.6438 16.1429M15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7ZM21 10C21 11.1046 20.1046 12 19 12C17.8954 12 17 11.1046 17 10C17 8.89543 17.8954 8 19 8C20.1046 8 21 8.89543 21 10ZM7 10C7 11.1046 6.10457 12 5 12C3.89543 12 3 11.1046 3 10C3 8.89543 3.89543 8 5 8C6.10457 8 7 8.89543 7 10Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="ml-2">
              <div className="font-semibold font-montserrat text-sm md:text-base">{totalCount} {details}</div>
              <div className="text-xs md:text-sm text-gray-200">Group Size</div>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="w-[30px] h-[30px] md:w-[36px] md:h-[36px] rounded-full bg-[rgba(255,255,255,0.2)] flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="ml-2">
              <div className="font-semibold font-montserrat text-sm md:text-base">{activities}</div>
              <div className="text-xs md:text-sm text-gray-200">Activities</div>
            </div>
          </div>
        </div>
      </div>

      {/* Arrow icon in top right */}
      <div className="absolute top-4 md:top-6 right-4 md:right-6 w-5 h-5 md:w-6 md:h-6 text-white">
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 17L17 7M17 7H8M17 7V16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
};

export default TripCard;