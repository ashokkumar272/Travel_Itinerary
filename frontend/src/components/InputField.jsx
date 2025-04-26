import React from 'react';

const InputField = ({ icon, placeholder, value, onChange, darkMode }) => {
  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-500">
        {icon}
      </div>
      <input
        type="text"
        className={`w-full py-2 px-10 border ${
          darkMode 
            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500' 
            : 'bg-white border-gray-400 focus:ring-blue-500 focus:outline-none'
        } rounded-lg focus:ring-1`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;