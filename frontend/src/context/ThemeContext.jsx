import React, { createContext, useState, useContext, useMemo } from 'react';

/**
 * @typedef {Object} ThemeContextType
 * @property {boolean} darkMode - Whether dark mode is enabled
 * @property {Function} toggleDarkMode - Function to toggle dark mode
 * @property {Function} setDarkMode - Function to set dark mode state
 * @property {Object} colors - Theme colors based on current mode
 * @property {Object} fonts - Theme fonts
 */

// Create the context
const ThemeContext = createContext();

/**
 * Provider component for managing the theme state throughout the application.
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @returns {React.ReactElement} The theme provider component
 */
export const ThemeProvider = ({ children, initialDarkMode = false }) => {
  const [darkMode, setDarkMode] = useState(initialDarkMode);

  // Toggle dark mode function
  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  // Theme colors based on darkMode state
  const colors = useMemo(() => {
    return {
      primary: {
        main: '#3643FB',
        hover: darkMode ? '#4452FF' : '#2a36e0',
        light: '#3643FB4D', // 30% opacity
      },
      accent: darkMode ? '#C4FF3C' : '#3643FB', // Lime in dark mode, blue in light mode
      background: {
        main: darkMode ? '#0B0809' : '#FFFFFF',
        card: darkMode ? '#1A1A1A' : '#FFFFFF',
        input: darkMode ? '#333333' : '#FFFFFF',
        dateCard: darkMode ? '#242424' : '#FFFFFF',
        navbarBg: darkMode ? '#1D1F24' : '#FFFFFF',
        iconSelected: darkMode ? '#D1F46233' : '#3643FB4D',
      },
      border: {
        main: darkMode ? '#3A3A3A' : '#CBD5E0',
        accent: darkMode ? '#C4FF3C' : '#3643FB',
      },
      text: {
        primary: darkMode ? '#FFFFFF' : '#1A202C',
        secondary: darkMode ? '#C4C4C4' : '#4A5568',
        muted: darkMode ? '#A0AEC0' : '#718096',
        accent: darkMode ? '#C4FF3C' : '#3643FB',
      },
      status: {
        success: '#10b981',
        successBg: '#ecfdf5',
        pending: '#f59e0b',
        pendingBg: '#fffbeb',
      }
    };
  }, [darkMode]);

  // Typography values
  const fonts = {
    primary: 'Mont, sans-serif',
    secondary: 'Montserrat, sans-serif',
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  };

  // Spacing and sizing values
  const spacing = {
    card: {
      borderRadius: '16px',
      padding: '16px',
    },
    button: {
      borderRadius: '12px',
      padding: '12px 16px',
    },
  };

  // Create the context value
  const value = {
    darkMode,
    toggleDarkMode,
    setDarkMode,
    colors,
    fonts,
    spacing,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * Custom hook to use the Theme context.
 * Must be used within a ThemeProvider.
 * 
 * @returns {ThemeContextType} The theme context value
 * @throws {Error} If used outside of a ThemeProvider
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export default ThemeContext;