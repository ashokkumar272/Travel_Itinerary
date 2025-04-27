import React from 'react';

const Button = ({ children, onClick, className }) => {
  return (
    <button
      className={`w-full py-3 px-4 text-white font-medium rounded-lg bg-[var(--color-primary)] hover:opacity-90 ${className}`}
      style={{
        backgroundColor: 'var(--color-primary)',
        borderRadius: 'var(--radius-button)'
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;