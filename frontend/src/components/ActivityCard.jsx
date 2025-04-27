import React from 'react';

const ActivityCard = ({ 
  image,
  title,
  timing,
  duration,
  pickupPoint,
  darkMode,
  onClick
}) => {
  return (
    <div 
      className={`w-full rounded-xl overflow-hidden ${
        darkMode ? 'bg-[#1A1A1A] text-white' : 'bg-white text-gray-900 border border-gray-400'
      } flex h-[120px] sm:h-[130px]`}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      {/* Left side - Activity Image */}
      <div className="w-[30%] min-w-[120px] sm:w-[140px] h-auto overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right side - Activity Details */}
      <div className="flex-1 p-3 sm:p-4 flex flex-col justify-between">
        {/* Activity Title */}
        <div className="mb-2">
          <h2 className="text-[14px] sm:text-[16px] font-semibold leading-tight line-clamp-2">{title}</h2>
        </div>

        {/* Activity Details */}
        <div className="">
          {timing && (
            <div className="flex items-start gap-2">
              <span className="text-[12px] sm:text-[13px] font-semibold min-w-[60px]">Timing:</span>
              <span className="text-[12px] sm:text-[13px]">{timing}</span>
            </div>
          )}
          
          {duration && (
            <div className="flex items-start gap-2">
              <span className="text-[12px] sm:text-[13px] font-semibold min-w-[60px]">Duration:</span>
              <span className="text-[12px] sm:text-[13px]">{duration}</span>
            </div>
          )}
          
          {pickupPoint && (
            <div className="flex items-start gap-2">
              <span className="text-[12px] sm:text-[13px] font-semibold min-w-[60px]">Pick up:</span>
              <span className="text-[12px] sm:text-[13px]">{pickupPoint}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;