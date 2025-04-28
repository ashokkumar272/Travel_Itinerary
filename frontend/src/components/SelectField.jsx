import React from 'react';

const SelectField = ({ icon, placeholder, value, onChange, darkMode }) => {
  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-500">
        {icon}
      </div>
      <select
        className={`w-full py-2 px-10 appearance-none rounded-lg ${
          darkMode 
            ? 'bg-[#333333] border-0 text-white focus:ring-[#3643FB]' 
            : 'bg-white border border-[#BFBFBF] text-gray-900 focus:outline-none focus:ring-[#3643FB]'
        }`}
        value={value}
        onChange={onChange}
        style={{
          backgroundColor: darkMode ? '#333333' : '#FFFFFF',
          border: darkMode ? 'none' : '1px solid #BFBFBF'
        }}
      >
        <option value="" disabled selected>
          {placeholder}
        </option>
        <option value="1-3">1-3 Days</option>
        <option value="4-7">4-7 Days</option>
        <option value="8-14">8-14 Days</option>
        <option value="15+">15+ Days</option>
      </select>
      <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  );
};

export default SelectField;