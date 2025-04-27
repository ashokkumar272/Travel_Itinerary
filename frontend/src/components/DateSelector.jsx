import React, { useState } from "react";
import activities_l from '../assets/activities_l.png'
import activities_d from '../assets/activities_d.png'

const DateSelector = ({
  initialDate = new Date("2025-01-27"),
  onDateSelected = () => {},
  totalActivities = 14,
  darkMode = false,
}) => {
  const [selectedDate, setSelectedDate] = useState(initialDate);
  const [selectedDayIndex, setSelectedDayIndex] = useState(0); // Index of selected day (0 = MON, etc.)

  // Days of the week for Jan 27-Feb 2, 2025
  const dates = [
    { day: 27, month: "JAN", weekday: "MON", active: true },
    { day: 28, month: "JAN", weekday: "TUE", active: false },
    { day: 29, month: "JAN", weekday: "WED", active: false },
    { day: 30, month: "JAN", weekday: "THU", active: false },
    { day: 31, month: "JAN", weekday: "FRI", active: false },
    { day: 1, month: "FEB", weekday: "SAT", active: false },
    { day: 2, month: "FEB", weekday: "SUN", active: false },
  ];

  // Handle date selection
  const handleDateSelect = (index) => {
    setSelectedDayIndex(index);
    const newDate = new Date(
      2025,
      dates[index].month === "JAN" ? 0 : 1,
      dates[index].day
    );
    setSelectedDate(newDate);
    onDateSelected(
      newDate,
      `${dates[index].day.toString().padStart(2, "0")}.${
        dates[index].month === "JAN" ? "01" : "02"
      }.2025`
    );
  };

  return (
    <div className="mb-6 w-full">
      <div
        className={`rounded-[12px] p-2 sm:p-3 w-full ${
          darkMode
            ? "bg-[#1A1A1A] text-white"
            : "bg-white shadow-sm border border-gray-400"
        }`}
      >
        {/* Top section: Day Plan and Activity Count */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
          <button
            className={`px-2 py-1 rounded-[8px] text-sm sm:text-base font-medium ${
              darkMode ? "bg-[#C4FF3C] text-black" : "bg-blue-600 text-white"
            }`}
          >
            Day Plan
          </button>
          <button
            className={`px-2 py-1 rounded-[8px] text-sm sm:text-base font-medium ${
              darkMode
                ? "bg-[#3A3A3A] text-[#C4FF3C] border border-[#C4FF3C]"
                : "bg-white text-blue-600 border border-blue-600"
            }`}
          >
            {totalActivities} Activities
          </button>
        </div>

        {/* Date selector with horizontal scroll */}
        <div className="overflow-x-auto pb-2 -mx-2 px-2 sm:px-0 sm:mx-0">
          <div className="flex gap-1 sm:gap-2 min-w-max">
            {dates.map((date, index) => {
              const isSelected = index === selectedDayIndex;

              return (
                <button
                  key={index}
                  onClick={() => handleDateSelect(index)}
                  className={`flex items-center justify-center overflow-hidden h-[40px] sm:h-[44px] rounded-lg transition-colors
                    ${
                      isSelected
                        ? `w-[80px] sm:w-[90px] p-0 ${
                            darkMode
                              ? "border border-[#C4FF3C]"
                              : "border border-blue-600"
                          }`
                        : `w-[40px] sm:w-[46px] ${
                            darkMode
                              ? "bg-[#3A3A3A] text-white"
                              : "bg-gray-200 text-gray-800"
                          } hover:opacity-80`
                    }`}
                >
                  {isSelected ? (
                    <div className="flex h-full w-full rounded-[8px] overflow-hidden">
                      {/* Left side: Month (vertically) */}
                      <div
                        className={`flex items-center justify-center w-[25px] sm:w-[30px] ${
                          darkMode
                            ? "bg-[#C4FF3C] text-black"
                            : "bg-blue-600 text-white"
                        }`}
                      >
                        <span className="text-xs font-bold rotate-[-90deg] tracking-wider">
                          {date.month}
                        </span>
                      </div>
                      {/* Right side: Day and number */}
                      <div
                        className={`flex flex-col justify-center flex-1 px-1 sm:px-3 ${
                          darkMode ? "bg-[#242424]" : "bg-white"
                        }`}
                      >
                        <span
                          className={`text-[10px] sm:text-xs font-medium ${
                            darkMode ? "text-white" : "text-gray-700"
                          }`}
                        >
                          {date.weekday}
                        </span>
                        <span
                          className={`text-base sm:text-lg font-bold ${
                            darkMode ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {date.day}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center w-full">
                      <span className="text-[10px] sm:text-xs font-medium">
                        {date.weekday}
                      </span>
                      <span className="text-base sm:text-lg font-bold">{date.day}</span>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 sm:gap-4 items-center mt-3 sm:mt-4">
        {/* Selected date indicator */}
        <div
          className={`flex items-center gap-1 sm:gap-2 rounded-full py-1 px-2 sm:px-3 ${
            darkMode ? "bg-[#C4FF3C] text-black" : "bg-blue-600 text-white"
          }`}
        >
          <div className="text-sm sm:text-base font-semibold">
            Day 1
          </div>
          <div className="ml-0 sm:ml-1 text-sm sm:text-base font-medium">
            27.01.2025
          </div>
        </div>
        <div
          className={`text-xs sm:text-sm font-medium flex items-center ${
            darkMode ? "text-[#C4FF3C]" : "text-blue-600"
          }`}
        >
          <span className="mr-1 flex items-center">
            <img 
              src={darkMode ? activities_d : activities_l} 
              alt="Activities icon" 
              className="w-4 h-4 sm:w-5 sm:h-5 object-contain" 
            />
          </span> 3 Activities
        </div>
      </div>
    </div>
  );
};

export default DateSelector;
