import React, { useState } from 'react';

const DateSelector = ({ 
  initialDate = new Date('2025-01-27'),
  onDateSelected = () => {},
  totalActivities = 14,
  darkMode = false
}) => {
  const [selectedDate, setSelectedDate] = useState(initialDate);
  const [selectedDayIndex, setSelectedDayIndex] = useState(0); // Index of selected day (0 = MON, etc.)
  
  // Days of the week for Jan 27-Feb 2, 2025
  const dates = [
    { day: 27, month: 'JAN', weekday: 'MON', active: true },
    { day: 28, month: 'JAN', weekday: 'TUE', active: false },
    { day: 29, month: 'JAN', weekday: 'WED', active: false },
    { day: 30, month: 'JAN', weekday: 'THU', active: false },
    { day: 31, month: 'JAN', weekday: 'FRI', active: false },
    { day: 1, month: 'FEB', weekday: 'SAT', active: false },
    { day: 2, month: 'FEB', weekday: 'SUN', active: false },
  ];
  
  // Handle date selection
  const handleDateSelect = (index) => {
    setSelectedDayIndex(index);
    const newDate = new Date(2025, dates[index].month === 'JAN' ? 0 : 1, dates[index].day);
    setSelectedDate(newDate);
    onDateSelected(newDate, `${dates[index].day.toString().padStart(2, '0')}.${dates[index].month === 'JAN' ? '01' : '02'}.2025`);
  };

  return (
    <div className="mb-6">
      <div className={`rounded-[12px] p-2 ${darkMode ? 'bg-[#1A1A1A] text-white' : 'bg-white shadow-sm border border-gray-400'}`}>
        {/* Top section: Day Plan and Activity Count */}
        <div className="flex flex-wrap gap-3 mb-6">
          <button className={`px-6 py-3 rounded-[8px] text-base font-medium ${darkMode ? 'bg-[#C4FF3C] text-black' : 'bg-blue-600 text-white'}`}>
            Day Plan
          </button>
          <button className={`px-5 py-3 rounded-[8px] text-base font-medium ${darkMode ? 'bg-[#3A3A3A] text-[#C4FF3C] border border-[#C4FF3C]' : 'bg-white text-blue-600 border border-blue-200'}`}>
            {totalActivities} Activities
          </button>
        </div>
        
        {/* Date selector with horizontal scroll */}
        <div className="overflow-x-auto pb-2">
          <div className="flex gap-2 min-w-max">
            {dates.map((date, index) => {
              const isSelected = index === selectedDayIndex;
              
              return (
                <button
                  key={index}
                  onClick={() => handleDateSelect(index)}
                  className={`flex items-center justify-center overflow-hidden h-[44px] rounded-lg transition-colors
                    ${isSelected 
                      ? `w-[90px] p-0 ${darkMode ? 'border border-[#C4FF3C]' : 'border border-blue-600'}` 
                      : `w-[46px] ${darkMode ? 'bg-[#3A3A3A] text-white' : 'bg-gray-200 text-gray-800'} hover:opacity-80`
                    }`}
                >
                  {isSelected ? (
                    <div className="flex h-full w-full rounded-[8px] overflow-hidden">
                      {/* Left side: Month (vertically) */}
                      <div className={`flex items-center justify-center w-[30px] ${darkMode ? 'bg-[#C4FF3C] text-black' : 'bg-blue-600 text-white'}`}>
                        <span className="text-xs font-bold rotate-[-90deg] tracking-wider">{date.month}</span>
                      </div>
                      {/* Right side: Day and number */}
                      <div className={`flex flex-col justify-center flex-1 px-3 ${darkMode ? 'bg-[#242424]' : 'bg-white'}`}>
                        <span className={`text-xs font-medium ${darkMode ? 'text-white' : 'text-gray-700'}`}>{date.weekday}</span>
                        <span className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{date.day}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center w-full">
                      <span className="text-xs font-medium">{date.weekday}</span>
                      <span className="text-lg font-bold">{date.day}</span>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Selected date indicator */}
      <div className="flex items-center gap-3 mt-4">
        <div className={`px-4 py-2 rounded-[8px] text-sm font-medium ${darkMode ? 'bg-[#C4FF3C] text-black' : 'bg-blue-600 text-white'}`}>
          Day 1
        </div>
        <div className={`text-sm font-medium ${darkMode ? 'text-[#C4FF3C]' : 'text-blue-600'}`}>
          27.01.2025
        </div>
        <div className={`text-sm font-medium flex items-center ${darkMode ? 'text-[#C4FF3C]' : 'text-blue-600'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24" className="mr-1">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
          </svg>
          3 Activities
        </div>
      </div>
    </div>
  );
};

export default DateSelector;