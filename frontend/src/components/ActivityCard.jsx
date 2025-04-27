import React from 'react';
import { usePanel } from '../context/PanelContext';

const ActivityCard = ({ 
  image,
  title,
  timing,
  duration,
  pickupPoint,
  darkMode,
  onClick
}) => {
  const { openPanel } = usePanel();
  
  // Handler for opening the panel with activity details
  const handleActivityClick = () => {
    const activityDetailContent = (
      <div className="space-y-6">
        <div>
          <img 
            src={image} 
            alt={title} 
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
        
        <div className="space-y-4">
          <h2 className="text-xl font-bold">{title}</h2>
          
          <div className="space-y-3 pt-2">
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <div>
                <p className="font-medium">Timing</p>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{timing}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <div>
                <p className="font-medium">Duration</p>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{duration}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2 L12 6" />
                  <circle cx="12" cy="11" r="3" />
                  <path d="M12 14 L12 22" />
                </svg>
              </div>
              <div>
                <p className="font-medium">Pick Up</p>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{pickupPoint}</p>
              </div>
            </div>
          </div>
          
          <div className="pt-4 border-t border-gray-300 dark:border-gray-700">
            <h3 className="text-lg font-semibold mb-2">Activity Description</h3>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Experience the rich cultural heritage and stunning architecture of {title}. 
              This activity is perfect for those looking to immerse themselves in local culture.
              {duration} of exploration with a knowledgeable guide who will explain the history and significance of this amazing place.
            </p>
          </div>
          
          <div className="pt-4 border-t border-gray-300 dark:border-gray-700">
            <h3 className="text-lg font-semibold mb-2">What to Bring</h3>
            <ul className={`list-disc pl-5 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <li>Comfortable walking shoes</li>
              <li>Camera</li>
              <li>Water bottle</li>
              <li>Hat or umbrella for sun protection</li>
            </ul>
          </div>
        </div>
      </div>
    );
    
    openPanel("Activity Details", 'activity', activityDetailContent);
    
    // Call original onClick if provided (for backward compatibility)
    if (onClick) onClick();
  };

  return (
    <div 
      className={`w-full rounded-xl overflow-hidden ${
        darkMode ? 'bg-[#1A1A1A] text-white' : 'bg-white text-gray-900 border border-gray-400'
      } flex h-[120px] sm:h-[130px] cursor-pointer`}
      onClick={handleActivityClick}
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