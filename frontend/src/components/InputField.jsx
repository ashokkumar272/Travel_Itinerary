import React from 'react';
import { useTheme } from '../context/ThemeContext';

const InputField = ({ icon, placeholder, value, onChange }) => {
  const { darkMode, colors } = useTheme();
  
  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-500">
        {icon}
      </div>
      <input
        type="text"
        className={`w-full py-2 px-10 border rounded-lg focus:ring-1 ${
          darkMode 
            ? 'bg-dark-input border-dark-border text-white placeholder-gray-400 focus:ring-primary focus:border-primary' 
            : 'bg-white border-gray-400 focus:ring-primary focus:outline-none'
        }`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;