import React, { useEffect, useRef } from 'react';

/**
 * @typedef {Object} SlidingPanelProps
 * @property {boolean} isOpen - Whether the sliding panel is open
 * @property {Function} onClose - Function to call when the panel is closed
 * @property {string} title - Title displayed in the panel header
 * @property {boolean} darkMode - Whether dark mode is enabled
 * @property {React.ReactNode} children - Content to be displayed in the panel
 * @property {('trip'|'flight'|'hotel'|'activity')} [type] - Type of content displayed in the panel
 */

/**
 * A sliding panel component that appears from the right side of the screen.
 * Includes overlay, close button, and handles outside clicks and escape key to close.
 * 
 * @param {SlidingPanelProps} props
 * @returns {React.ReactElement} A sliding panel component
 */
const SlidingPanel = ({ 
  isOpen, 
  onClose, 
  title, 
  darkMode, 
  children,
  type // 'trip', 'flight', 'hotel', 'activity'
}) => {
  const panelRef = useRef(null);
  
  /**
   * Close the panel when clicking outside of it
   * 
   * @param {MouseEvent} event - The click event
   */
  const handleClickOutside = (event) => {
    if (panelRef.current && !panelRef.current.contains(event.target)) {
      onClose();
    }
  };

  // Handle click outside to close the panel
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Lock body scroll when panel is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Handle escape key to close panel
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-40 ${
          isOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
        }`} 
        onClick={onClose}
      />
      
      {/* Panel */}
      <div 
        ref={panelRef}
        className={`fixed top-0 right-0 bottom-0 max-w-full w-full sm:w-[90%] md:w-[460px] lg:w-[500px] 
          ${darkMode ? 'bg-[#0B0809] text-white' : 'bg-white text-gray-900'} 
          shadow-lg z-50 transition-transform duration-300 ease-in-out transform
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          overflow-y-auto`}
      >
        {/* Panel Header */}
        <div className={`sticky top-0 z-10 px-4 py-4 flex justify-between items-center border-b ${
          darkMode ? 'border-gray-700 bg-[#0B0809]' : 'border-gray-200 bg-white'
        }`}>
          <h2 className="text-xl font-bold font-mont">{title}</h2>
          <button 
            onClick={onClose}
            className={`p-2 rounded-full hover:bg-opacity-10 ${
              darkMode ? 'hover:bg-gray-300' : 'hover:bg-gray-200'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Panel Content */}
        <div className="p-4">
          {children}
        </div>
      </div>
    </>
  );
};

export default SlidingPanel;