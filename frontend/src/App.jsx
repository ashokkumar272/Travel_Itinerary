import React, { useState } from 'react'
import TravelForm from './pages/TravelForm'

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} flex items-center justify-center`}>
      <div className="w-full">
        <TravelForm darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </div>
  )
}

export default App
