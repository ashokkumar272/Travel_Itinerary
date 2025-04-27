import React from 'react';

const HotelBookingCard = ({
  hotelName,
  checkInDate,
  checkOutDate,
  numberOfNights,
  rating,
  status,
  image,
  darkMode
}) => {
  // Format dates for display (handles date strings in format YYYY-MM-DD or DD.MM.YYYY)
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date)) {
      // If date is invalid, it may already be formatted or in a different format
      return dateString;
    }
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).replace(/\//g, '.');
  };

  // Format time for display (expects format HH:mm)
  const formatTime = (timeString) => {
    return timeString || '';
  };

  // Extract date and time parts if they exist in the format "YYYY-MM-DD, HH:mm"
  const parseDateTime = (dateTimeString) => {
    if (!dateTimeString) return { date: '', time: '' };
    
    const parts = dateTimeString.split(', ');
    if (parts.length === 2) {
      return { date: parts[0], time: parts[1] };
    } else {
      return { date: dateTimeString, time: '' };
    }
  };

  const checkIn = parseDateTime(checkInDate);
  const checkOut = parseDateTime(checkOutDate);

  return (
    <div 
      className={`w-[198px] h-[239px] rounded-[16px] overflow-hidden ${
        darkMode ? 'bg-[#1A1A1A] text-white' : 'bg-white text-gray-800 border border-gray-400'
      }`}
    >
      {/* Hotel image with rating */}
      <div className="relative h-[50%] overflow-hidden">
        <img 
          src={image} 
          alt={hotelName} 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-2 left-2 bg-blue-600 text-white py-1 px-2 rounded-md flex items-center text-xs">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
            <path d="M11.0489 3.92705C11.3483 3.00574 12.6517 3.00574 12.9511 3.92705L14.2451 7.90983C14.379 8.32185 14.763 8.60081 15.1962 8.60081H19.3839C20.3527 8.60081 20.7554 9.84043 19.9717 10.4098L16.5838 12.8713C16.2333 13.126 16.0866 13.5773 16.2205 13.9893L17.5146 17.9721C17.8139 18.8934 16.7595 19.6596 15.9757 19.0902L12.5878 16.6287C12.2373 16.374 11.7627 16.374 11.4122 16.6287L8.02426 19.0902C7.24054 19.6596 6.18607 18.8934 6.48542 17.9721L7.7795 13.9893C7.91338 13.5773 7.76672 13.126 7.41622 12.8713L4.02828 10.4098C3.24455 9.84043 3.64732 8.60081 4.61606 8.60081H8.8038C9.23703 8.60081 9.62099 8.32185 9.75486 7.90983L11.0489 3.92705Z" fill="white"/>
          </svg>
          <span className="font-bold">{rating}</span>
        </div>
      </div>

      {/* Hotel booking details */}
      <div className="p-2">
        <h2 className="text-base font-bold truncate">{hotelName}</h2>
        
        <div className="mt-2 space-y-1 text-xs">
          <div className='flex gap-1'>
            <p className="text-gray-500 dark:text-gray-400">Check in:</p>
            <p className="font-medium">{formatDate(checkIn.date)}, 11:00 AM</p>
          </div>
          
          <div className='flex gap-1'>
            <p className="text-gray-500 dark:text-gray-400">Check out:</p>
            <p className="font-medium">{formatDate(checkOut.date)}, 11:00 AM</p>
          </div>
        </div>

        <div className="mt-3 flex justify-between items-center">
          <div>
            <p className="text-sm font-bold">{numberOfNights} Nights</p>
          </div>
          <div className="flex items-center text-green-500 text-xs">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
              <circle cx="12" cy="12" r="10" fill="#ecfdf5" />
              <path d="M17 9L11 15L7 11" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-medium">{status}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelBookingCard;