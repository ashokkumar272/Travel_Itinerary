import React from 'react';

const InputField = ({ icon, placeholder, value, onChange, darkMode }) => {
  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-500">
        {icon}
      </div>
      <input
        type="text"
        className={`w-full py-2 px-10 rounded-lg focus:ring-1 ${
          darkMode 
            ? 'bg-[#333333] border-0 text-white placeholder-gray-400 focus:ring-[#3643FB]' 
            : 'bg-white border border-[#BFBFBF] focus:ring-[#3643FB] focus:outline-none'
        }`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{
          backgroundColor: darkMode ? '#333333' : '#FFFFFF',
          border: darkMode ? 'none' : '1px solid #BFBFBF'
        }}
      />
    </div>
  );
};

export default InputField;