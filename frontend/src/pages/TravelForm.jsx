import React, { useState } from "react";
import InputField from "../components/InputField";
import SelectField from "../components/SelectField";
import TravelOptionCard from "../components/TravelOptionCard";
import Button from "../components/Button";

const TravelForm = ({ darkMode, setDarkMode }) => {
  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState("");
  const [travelingWith, setTravelingWith] = useState("");

  const handleSubmit = () => {
    console.log({ destination, duration, travelingWith });
    // Handle submission logic here
  };

  return (
    <div className={`flex flex-col justify-between min-h-screen ${darkMode ? 'bg-black text-white' : 'bg-white text-gray-900'}`}>
      <div className={`w-full max-w-3xl mx-auto p-6 ${darkMode ? 'bg-black' : 'bg-white'} rounded-lg relative`}>
        {/* Dark Mode Toggle */}
        <div className="absolute right-6 top-6">
          <button 
            onClick={() => setDarkMode(!darkMode)} 
            className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-200 text-gray-700'}`}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Header - centered in portrait */}
        <div className="mb-8 text-center">
          <h1 className="text-2xl sm:text-3xl font-extrabold mb-1 sm:mb-2">
            Plan Your Journey, Your Way!
          </h1>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Let's create your personalised travel experience
          </p>
        </div>

        {/* Destination */}
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">
            Where would you like to go?
          </label>
          <InputField
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
            }
            placeholder="Enter Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            darkMode={darkMode}
          />
        </div>

        {/* Duration */}
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">
            How long will you stay?
          </label>
          <SelectField
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
            }
            placeholder="Select Duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            darkMode={darkMode}
          />
        </div>

        {/* Traveling With */}
        <div className="mb-8">
          <label className="block text-lg font-medium mb-2">
            Who are you traveling with?
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <TravelOptionCard
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 ${darkMode ? 'text-gray-300' : ''}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              }
              label="Solo"
              selected={travelingWith === "solo"}
              onClick={() => setTravelingWith("solo")}
              darkMode={darkMode}
            />
            <TravelOptionCard
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 ${darkMode ? 'text-gray-300' : ''}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              }
              label="Couple"
              selected={travelingWith === "couple"}
              onClick={() => setTravelingWith("couple")}
              darkMode={darkMode}
            />
            <TravelOptionCard
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 ${darkMode ? 'text-gray-300' : ''}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-1a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              }
              label="Family"
              selected={travelingWith === "family"}
              onClick={() => setTravelingWith("family")}
              darkMode={darkMode}
            />
            <TravelOptionCard
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 ${darkMode ? 'text-gray-300' : ''}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              }
              label="Friends"
              selected={travelingWith === "friends"}
              onClick={() => setTravelingWith("friends")}
              darkMode={darkMode}
            />
          </div>
        </div>
      </div>
      <div className={`flex justify-center sm:justify-start p-6 mt-auto ${darkMode ? 'bg-black' : ''}`}>
        <div className="w-full sm:max-w-xs">
          <Button onClick={handleSubmit} darkMode={darkMode}>Continue</Button>
        </div>
      </div>
    </div>
  );
};

export default TravelForm;
