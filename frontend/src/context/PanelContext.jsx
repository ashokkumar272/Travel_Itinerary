import React, { createContext, useState, useContext } from 'react';
import SlidingPanel from '../components/SlidingDetailsPanel';

/**
 * @typedef {Object} PanelContextType
 * @property {boolean} isPanelOpen - Whether the panel is currently open
 * @property {Function} openPanel - Function to open the panel with specified content
 * @property {Function} closePanel - Function to close the panel
 * @property {string} panelType - The type of content currently displayed in the panel
 */

// Create the context
const PanelContext = createContext();

/**
 * Provider component for managing the sliding panel state throughout the application.
 * Wraps the SlidingPanel component and provides methods to open/close it.
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @param {boolean} props.darkMode - Whether dark mode is enabled
 * @returns {React.ReactElement} The panel provider component
 */
export const PanelProvider = ({ children, darkMode }) => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [panelTitle, setPanelTitle] = useState('');
  const [panelType, setPanelType] = useState('');
  const [panelContent, setPanelContent] = useState(null);

  /**
   * Opens the panel with the specified content
   * 
   * @param {string} title - The title to display in the panel header
   * @param {string} type - The type of content ('trip', 'flight', 'hotel', 'activity')
   * @param {React.ReactNode} content - The content to display in the panel
   */
  const openPanel = (title, type, content) => {
    setPanelTitle(title);
    setPanelType(type);
    setPanelContent(content);
    setIsPanelOpen(true);
  };

  /**
   * Closes the panel
   */
  const closePanel = () => {
    setIsPanelOpen(false);
  };

  return (
    <PanelContext.Provider value={{ isPanelOpen, openPanel, closePanel, panelType }}>
      {children}
      <SlidingPanel
        isOpen={isPanelOpen}
        onClose={closePanel}
        title={panelTitle}
        darkMode={darkMode}
        type={panelType}
      >
        {panelContent}
      </SlidingPanel>
    </PanelContext.Provider>
  );
};

/**
 * Custom hook to use the Panel context.
 * Must be used within a PanelProvider.
 * 
 * @returns {PanelContextType} The panel context value
 * @throws {Error} If used outside of a PanelProvider
 */
export const usePanel = () => {
  const context = useContext(PanelContext);
  if (context === undefined) {
    throw new Error('usePanel must be used within a PanelProvider');
  }
  return context;
};

export default PanelContext;