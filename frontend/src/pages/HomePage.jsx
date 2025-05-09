import React, { useState } from 'react';
import tokyo from '../assets/trips/Tokyo.png';
import accomodation1 from '../assets/accomodation/shinagava.png';
import accomodation2 from '../assets/accomodation/macure.png';
import activity1 from '../assets/activities/kimono-wearing.png';
import activity2 from '../assets/activities/senso-ji-temple.png';
import activity3 from '../assets/activities/sky-tree.png';
import TripCard from '../components/DestinationSummaryCard';
import FlightCard from '../components/FlightItineraryCard';
import HotelBookingCard from '../components/AccomidationDetailsCard';
import ActivityCard from '../components/ActivityCard';
import DateSelector from '../components/ActivityDateSelector';
import BottomNavbar from '../components/Navbar';

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
      image: accomodation1
    },
    {
      id: 2,
      hotelName: 'Macure Tokyo Hotel',
      checkInDate: '28.01.2025, 12:00 pm',
      checkOutDate: '02.02.2025, 10:00 am',
      numberOfNights: '3',
      rating: '4.8',
      status: 'Confirmed',
      image: accomodation2
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
      title: 'Senso-ji Temple & Nakamise Shopping Street Senso-ji',
      timing: '8:15 am Morning',
      duration: '3 hours',
      pickupPoint: 'From Hotel',
      image: activity2
    },
    {
      id: 2,
      title: 'Tokyo Skytree',
      timing: '1:30 pm Afternoon',
      duration: '4 hours',
      pickupPoint: 'From Hotel',
      image: activity3
    },
    {
      id: 2,
      title: 'Tokyo Skytree & Sumida River Cruise',
      timing: '1:30 pm Afternoon',
      duration: '4 hours',
      pickupPoint: 'From Hotel',
      image: activity1
    }
  ];

  return (
    <div className={`flex flex-col min-h-screen ${darkMode ? 'bg-[#0B0809] text-white' : 'bg-white text-gray-900'}`}>
      {/* Top section with greeting and profile */}
      <div className="px-4 py-6">
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
      <div className="flex-1 px-4 pt-2 pb-24"> {/* Extra bottom padding for navbar */}
        {/* Upcoming Trips */}
        <div className="mb-8">
          <h2 className="text-lg px-2 font-semibold mb-4 font-mont">Your Upcoming Trip</h2>
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
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg px-2 font-semibold mb-2 font-mont">Accommodation</h2>
            <a href="#" className={`underline ${darkMode ? 'text-[#C4FF3C]' : 'text-blue-600'} font-medium`}>See all</a>
          </div>
          <div className="overflow-x-auto -mx-4 px-4 pb-2">
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
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg px-2 font-semibold font-mont">Activities</h2>
            <a href="#" className={`underline ${darkMode ? 'text-[#C4FF3C]' : 'text-blue-600'} font-medium`}>See all</a>
          </div>
          <DateSelector 
            initialDate={new Date('2025-01-27')}
            onDateSelected={handleDateSelected}
            totalActivities={14}
            darkMode={darkMode}
          />
        </div>

        {/* Activity Cards with improved spacing and consistent layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
          {activities.map((activity) => (
            <div key={activity.id} className="w-full">
              <ActivityCard
                title={activity.title}
                subtitle={activity.subtitle}
                timing={activity.timing}
                duration={activity.duration}
                pickupPoint={activity.pickupPoint}
                image={activity.image}
                darkMode={darkMode}
              />
            </div>
          ))}
        </div>
      </div>
  
      {/* Replace the bottom navigation bar with the BottomNavbar component */}
      <BottomNavbar 
        darkMode={darkMode} 
        selectedIcon={selectedIcon} 
        setSelectedIcon={setSelectedIcon} 
      />
    </div>
  );
}  

export default HomePage;