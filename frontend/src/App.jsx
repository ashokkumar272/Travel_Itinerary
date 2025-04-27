import React, { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import TravelForm from './pages/TravelForm'
import HomePage from './pages/HomePage'
import ProtectedRoute from './components/ProtectedRoute'
import { PanelProvider } from './context/PanelContext'
import { ThemeProvider } from './context/ThemeContext'
import './theme.css' // Ensure theme is imported

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Apply dark mode class to the document when darkMode state changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-dark-bg' : 'bg-gray-50'}`}>
      <ThemeProvider initialDarkMode={darkMode}>
        <PanelProvider darkMode={darkMode}>
          <div className="w-full">
            <Routes>
              <Route 
                path="/" 
                element={
                  <TravelForm 
                    darkMode={darkMode} 
                    setDarkMode={setDarkMode} 
                    toggleDarkMode={toggleDarkMode} 
                  />
                } 
              />
              <Route 
                path="/home" 
                element={
                  <ProtectedRoute>
                    <HomePage darkMode={darkMode} />
                  </ProtectedRoute>
                } 
              />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </PanelProvider>
      </ThemeProvider>
    </div>
  )
}

export default App
