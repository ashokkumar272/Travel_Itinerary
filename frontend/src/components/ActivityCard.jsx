import React from 'react';

const ActivityCard = ({ 
  image,
  title,
  subtitle,
  timing,
  duration,
  pickupPoint,
  darkMode,
  onClick
}) => {
  return (
    <div 
      className={`w-[341px] h-[127px] rounded-[8px] overflow-hidden flex border border-gray-400 ${
        darkMode ? 'bg-[#1A1A1A] text-white border-gray-700' : 'bg-white text-gray-800'
      }`}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      {/* Left side - Activity Image */}
      <div className="w-[143px] h-full overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right side - Activity Details */}
      <div className="flex-1 p-4 flex flex-col justify-between">
        {/* Activity Title and Subtitle */}
        <div>
          <h2 className="text-[16px] font-bold leading-tight">{title}</h2>
          {subtitle && <h3 className="text-[14px] text-gray-600 dark:text-gray-400">{subtitle}</h3>}
        </div>

        {/* Activity Details */}
        <div className="space-y-1">
          {timing && (
            <div className="flex items-start">
              <span className="text-[14px] font-semibold w-[80px]">Timing:</span>
              <span className="text-[14px]">{timing}</span>
            </div>
          )}
          
          {duration && (
            <div className="flex items-start">
              <span className="text-[14px] font-semibold w-[80px]">Duration:</span>
              <span className="text-[14px]">{duration}</span>
            </div>
          )}
          
          {pickupPoint && (
            <div className="flex items-start">
              <span className="text-[14px] font-semibold w-[80px]">Pick up:</span>
              <span className="text-[14px]">{pickupPoint}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;