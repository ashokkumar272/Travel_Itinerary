import React, { useState } from 'react';

const DateSelector = ({ 
  initialDate = new Date('2025-01-27'),
  onDateSelected = () => {},
  totalActivities = 14,
  darkMode = true
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
      <div className="flex justify-between items-center mb-4">
        <h2 className={`text-[32px] font-bold ${darkMode ? 'text-white' : ''}`}>Activities</h2>
        <a href="#" className={`text-[#C4FF3C] font-medium ${darkMode ? 'text-[#C4FF3C]' : 'text-blue-600'}`}>See all</a>
      </div>
      
      <div className={`rounded-[20px] p-6 ${darkMode ? 'bg-[#1A1A1A] text-white' : 'bg-white shadow-sm border border-gray-100'}`}>
        {/* Top section: Day Plan and Activity Count */}
        <div className="flex flex-wrap gap-3 mb-6">
          <button className={`px-6 py-3 rounded-full text-base font-medium ${darkMode ? 'bg-[#C4FF3C] text-black' : 'bg-blue-600 text-white'}`}>
            Day Plan
          </button>
          <button className={`px-5 py-3 rounded-full text-base font-medium ${darkMode ? 'bg-[#3A3A3A] text-[#C4FF3C] border border-[#C4FF3C]' : 'bg-white text-blue-600 border border-blue-200'}`}>
            {totalActivities} Activities
          </button>
        </div>
        
        {/* Date selector */}
        <div className="grid grid-cols-7 gap-3">
          {dates.map((date, index) => {
            const isSelected = index === selectedDayIndex;
            const isFirstOrLast = index === 0 || index === dates.length - 1;
            
            return (
              <button
                key={index}
                onClick={() => handleDateSelect(index)}
                className={`flex flex-col items-center justify-center h-[70px] py-2 rounded-lg transition-colors
                  ${isSelected 
                    ? `${darkMode ? 'bg-[#C4FF3C] text-black' : 'bg-blue-600 text-white'}` 
                    : `${darkMode ? 'bg-[#3A3A3A] text-white' : 'bg-gray-100 text-gray-800'} hover:opacity-80`
                  }`}
              >
                <div className="flex flex-col items-center relative h-full">
                  {/* Month display on left side for first day */}
                  {index === 0 && (
                    <span className="absolute left-[-20px] top-0 bottom-0 flex items-center justify-center text-xs font-medium rotate-[-90deg] origin-center">{date.month}</span>
                  )}
                  
                  {/* Weekday and day number */}
                  <span className="text-xs font-medium mt-1">{date.weekday}</span>
                  <span className="text-lg font-bold my-1">{date.day}</span>
                  
                  {/* Month display on right side for last day */}
                  {index === dates.length - 1 && (
                    <span className="absolute right-[-20px] top-0 bottom-0 flex items-center justify-center text-xs font-medium rotate-[90deg] origin-center">{date.month}</span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
      
      {/* Selected date indicator */}
      <div className="flex items-center gap-3 mt-4">
        <div className={`px-4 py-2 rounded-full text-sm font-medium ${darkMode ? 'bg-[#C4FF3C] text-black' : 'bg-blue-600 text-white'}`}>
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