import React, { useState } from 'react';
import homeIcon from '../assets/li_home.svg';
import searchIcon from '../assets/li_search.svg';
import heartIcon from '../assets/mynaui_heart.svg';
import userIcon from '../assets/li_user.svg';
import plusIcon from '../assets/li_plus.svg';
import tokyo from '../assets/Tokyo.png';
import TripCard from '../components/TripCard';
import FlightCard from '../components/FlightCard';
import HotelBookingCard from '../components/HotelBookingCard';
import ActivityCard from '../components/ActivityCard';
import DateSelector from '../components/DateSelector';

const HomePage = ({ darkMode }) => {
  const [selectedIcon, setSelectedIcon] = useState('home'); // Default selected icon is home
  const [selectedDate, setSelectedDate] = useState(new Date('2025-01-27')); // Set to Jan 27, 2025 to match the trip
  const [selectedDateFormatted, setSelectedDateFormatted] = useState('27.01.2025');

  // Handle date selection
  const handleDateSelected = (date, formattedDate) => {
    setSelectedDate(date);
    setSelectedDateFormatted(formattedDate);
    console.log(`Selected date: ${formattedDate}`);
  };
  
  // Sample trip data
  const upcomingTrips = [
    {
      id: 1,
      destination: 'TOKYO',
      startDate: '2025-01-27',
      endDate: '2025-02-02',
      duration: '8',
      groupSize: '4 (2M,2F)',
      activities: '14',
      image: tokyo
    }
  ];

  // Sample hotel data
  const hotelBookings = [
    {
      id: 1,
      hotelName: 'Shinagawa Prince Hotel',
      checkInDate: '27.01.2025, 11:15 pm',
      checkOutDate: '02.02.2025, 11:15 am',
      numberOfNights: '6',
      rating: '4.2',
      status: 'Confirmed',
      image: tokyo
    },
    {
      id: 2,
      hotelName: 'Grand Hyatt Tokyo',
      checkInDate: '05.04.2025, 12:00 pm',
      checkOutDate: '08.04.2025, 10:00 am',
      numberOfNights: '3',
      rating: '4.8',
      status: 'Confirmed',
      image: tokyo
    },
    {
      id: 3,
      hotelName: 'Hotel Metropolitan Tokyo',
      checkInDate: '20.05.2025, 02:00 pm',
      checkOutDate: '25.05.2025, 12:00 pm',
      numberOfNights: '5',
      rating: '4.5',
      status: 'Pending',
      image: tokyo
    },
    {
      id: 4,
      hotelName: 'Tokyo Bay Hilton',
      checkInDate: '15.06.2025, 03:00 pm',
      checkOutDate: '20.06.2025, 11:00 am',
      numberOfNights: '5',
      rating: '4.7',
      status: 'Confirmed',
      image: tokyo
    }
  ];

  // Sample activity data
  const activities = [
    {
      id: 1,
      title: 'Senso-ji Temple & Nakamise Shopping Street',
      subtitle: 'Senso-ji',
      timing: '8:15 am Morning',
      duration: '3 hours',
      pickupPoint: 'From Hotel',
      image: tokyo
    },
    {
      id: 2,
      title: 'Tokyo Skytree & Sumida River Cruise',
      subtitle: 'Sumida',
      timing: '1:30 pm Afternoon',
      duration: '4 hours',
      pickupPoint: 'From Hotel',
      image: tokyo
    }
  ];

  return (
    <div className={`flex flex-col min-h-screen ${darkMode ? 'bg-black text-white' : 'bg-white text-gray-900'}`}>
      {/* Top section with greeting and profile */}
      <div className="px-6 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold font-mont">Hello Chhavi!</h1>
            <p className={`mt-1 text-base font-semibold font-montserrat ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Ready for the trip?
            </p>
          </div>
          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
            C
          </div>
        </div>
      </div>
  
      {/* Main content area */}
      <div className="flex-1 px-6 pt-2 pb-24"> {/* Extra bottom padding for navbar */}
        {/* Upcoming Trips */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4 font-mont">Your Upcoming Trip</h2>
          <div className="space-y-6">
            {upcomingTrips.map((trip) => (
              <TripCard
                key={trip.id}
                destination={trip.destination}
                startDate={trip.startDate}
                endDate={trip.endDate}
                duration={trip.duration}
                groupSize={trip.groupSize}
                activities={trip.activities}
                image={trip.image}
                darkMode={darkMode}
              />
            ))}
          </div>
        </div>
  
        {/* Flight Details */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4 font-mont">Your Flight</h2>
          <FlightCard 
            flightDate="2025-01-26"
            departureTime="10:50 am"
            origin="DEL"
            originCity="Delhi"
            originCountry="India"
            destination="NRT"
            destinationCity="Narita"
            destinationCountry="Tokyo"
            darkMode={darkMode}
            onClick={() => console.log('Flight card clicked')}
          />
        </div>
  
        {/* Hotel Bookings */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold font-mont">Accommodation</h2>
            <button className="text-blue-600 text-sm font-medium hover:underline">View All</button>
          </div>
          <div className="overflow-x-auto -mx-6 px-6 pb-2">
            <div className="flex gap-4 min-w-max">
              {hotelBookings.map((hotel) => (
                <HotelBookingCard
                  key={hotel.id}
                  hotelName={hotel.hotelName}
                  checkInDate={hotel.checkInDate}
                  checkOutDate={hotel.checkOutDate}
                  numberOfNights={hotel.numberOfNights}
                  rating={hotel.rating}
                  status={hotel.status}
                  image={hotel.image}
                  darkMode={darkMode}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Activities section with DateSelector */}
        <DateSelector 
          initialDate={new Date('2025-01-27')}
          onDateSelected={handleDateSelected}
          totalActivities={14}
        />

        {/* Activity Cards */}
        <div className="space-y-4">
          {activities.map((activity) => (
            <ActivityCard
              key={activity.id}
              title={activity.title}
              subtitle={activity.subtitle}
              timing={activity.timing}
              duration={activity.duration}
              pickupPoint={activity.pickupPoint}
              image={activity.image}
              darkMode={darkMode}
            />
          ))}
        </div>
      </div>
  
      {/* Bottom navigation bar */}
      <div className={`fixed bottom-0 left-0 right-0 flex justify-around items-center py-3 border-t ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'}`}>
        <ul className="flex justify-between items-center w-full max-w-md mx-auto px-4">
          {[
            { icon: homeIcon, label: 'home' },
            { icon: searchIcon, label: 'search' },
            { icon: plusIcon, label: 'add' },
            { icon: heartIcon, label: 'favorites' },
            { icon: userIcon, label: 'profile' },
          ].map(({ icon, label }) => (
            <li key={label} className="flex items-center justify-center cursor-pointer" onClick={() => setSelectedIcon(label)}>
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
    </div>
  );
}  

export default HomePage;