import React from 'react';
import homeIcon from '../assets/navbar/li_home.svg';
import searchIcon from '../assets/navbar/li_search.svg';
import heartIcon from '../assets/navbar/mynaui_heart.svg';
import userIcon from '../assets/navbar/li_user.svg';
import plusIcon from '../assets/navbar/li_plus.svg';

const BottomNavbar = ({ darkMode, selectedIcon, setSelectedIcon }) => {
  // Navigation items
  const navItems = [
    { icon: homeIcon, label: 'home' },
    { icon: searchIcon, label: 'search' },
    { icon: plusIcon, label: 'add' },
    { icon: heartIcon, label: 'favorites' },
    { icon: userIcon, label: 'profile' },
  ];

  return (
    <div className={`fixed bottom-0 left-0 right-0 flex justify-around items-center py-3 border-t ${darkMode ? 'bg-[#1D1F24] border-gray-700' : 'bg-white border-gray-200'}`}>
      <ul className="flex justify-between items-center w-full max-w-md mx-auto px-4">
        {navItems.map(({ icon, label }) => (
          <li 
            key={label} 
            className="flex items-center justify-center cursor-pointer" 
            onClick={() => setSelectedIcon(label)}
          >
            <div className={`p-3 ${selectedIcon === label ? 
              (darkMode ? 'bg-[#D1F46233]' : 'bg-[#3643FB4D]') + ' rounded-full' 
              : ''}`}>
              <img 
                src={icon} 
                alt={label} 
                width="24" 
                height="24" 
                className={`${selectedIcon === label && label !== 'add' ? 'filter-selected' : (label !== 'add' ? 'opacity-60 grayscale' : '')}`} 
                style={
                  label === 'add' ? 
                    (darkMode ? 
                      { filter: 'brightness(0) saturate(100%) invert(89%) sepia(29%) saturate(1122%) hue-rotate(39deg) brightness(103%) contrast(97%)' } :
                      { filter: 'brightness(0) saturate(100%) invert(21%) sepia(96%) saturate(3611%) hue-rotate(234deg) brightness(95%) contrast(95%)' }
                    ) :
                    selectedIcon === label ? 
                    (darkMode 
                      ? { filter: 'brightness(0) saturate(100%) invert(89%) sepia(29%) saturate(1122%) hue-rotate(39deg) brightness(103%) contrast(97%)' } 
                      : { filter: 'brightness(0) saturate(100%) invert(21%) sepia(96%) saturate(3611%) hue-rotate(234deg) brightness(95%) contrast(95%)' }
                    ) : {}
                }
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BottomNavbar;