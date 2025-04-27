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
            <div className={`p-3 ${selectedIcon === label ? 'bg-selected-icon rounded-full' : ''}`}>
              <img 
                src={icon} 
                alt={label} 
                width="24" 
                height="24" 
                className={selectedIcon === label ? 'filter-selected' : 'filter-gray'} 
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BottomNavbar;