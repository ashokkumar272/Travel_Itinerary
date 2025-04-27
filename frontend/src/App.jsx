import React, { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import TravelForm from './pages/TravelForm'
import HomePage from './pages/HomePage'
import ProtectedRoute from './components/ProtectedRoute'
import { PanelProvider } from './context/PanelContext'

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-black' : 'bg-gray-50'}`}>
      <PanelProvider darkMode={darkMode}>
        <div className="w-full">
          <Routes>
            <Route path="/" element={<TravelForm darkMode={darkMode} setDarkMode={setDarkMode} />} />
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
    </div>
  )
}

export default App
