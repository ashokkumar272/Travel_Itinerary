import React from 'react';

const Button = ({ children, onClick, className, darkMode }) => {
  return (
    <button
      className={`w-full py-3 px-4 text-white font-medium rounded-lg ${
        darkMode 
        ? 'bg-[#3643FB] hover:bg-blue-800' 
        : 'bg-[#3643FB] hover:bg-blue-700'
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;