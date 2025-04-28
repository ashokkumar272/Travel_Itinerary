# Travel Planner App

## Overview

Travel Planner is a React-based web application that allows users to plan and manage their travel experiences. The app features a modern, responsive UI with both light and dark mode support, and focuses on providing a seamless travel planning experience.

## Features

- **Travel Form:** Input destination, trip duration, and travel companions to create a new trip
- **Trip Details:** View comprehensive information about upcoming trips
- **Flight Itinerary:** Access flight details including departure/arrival information
- **Accommodation Management:** Browse and manage hotel bookings with check-in/out dates
- **Activity Planning:** Schedule and view daily activities for your trip
- **Day-by-Day Planning:** Select specific days to view scheduled activities
- **Dark/Light Mode:** Toggle between color schemes for comfortable viewing
- **Responsive Design:** Works across mobile, tablet, and desktop devices

## Tech Stack

- **Frontend Framework:** React 19
- **Routing:** React Router v7
- **Styling:** Tailwind CSS 4
- **Build Tool:** Vite 6
- **State Management:** React Context API
- **Code Quality:** ESLint

## Project Structure

```
frontend/
├── src/
│   ├── assets/            # Images and static resources
│   ├── components/        # Reusable UI components
│   │   ├── ActivityCard.jsx
│   │   ├── ActivityDateSelector.jsx
│   │   ├── AccomidationDetailsCard.jsx
│   │   ├── Button.jsx
│   │   ├── DestinationInputField.jsx
│   │   ├── DestinationSummaryCard.jsx
│   │   ├── FlightItineraryCard.jsx
│   │   ├── Navbar.jsx
│   │   ├── NumberOfDays.jsx
│   │   ├── ProtectedRoute.jsx
│   │   ├── SlidingDetailsPanel.jsx
│   │   └── TripCategorySelector.jsx
│   ├── context/          # React context providers for state management
│   │   ├── PanelContext.jsx
│   │   └── ThemeContext.jsx
│   ├── pages/            # Main application pages
│   │   ├── HomePage.jsx
│   │   └── TravelForm.jsx
│   ├── App.jsx           # Main application component
│   ├── index.css         # Global CSS styles
│   ├── main.jsx          # Application entry point
│   └── theme.css         # Theme variables and configuration
├── index.html            # HTML entry point
├── vite.config.js        # Vite configuration
├── eslint.config.js      # ESLint configuration
└── package.json          # Project dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd task/frontend
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Usage Guide

### Creating a New Trip

1. Start at the Travel Form page
2. Enter your destination
3. Select the duration of your stay
4. Choose who you're traveling with
5. Click "Continue"

### Viewing Trip Details

- The Home page displays upcoming trips, flights, accommodations, and activities
- Click on any card to view more detailed information
- Use the date selector to view activities for specific days of your trip
- Navigate through different sections using the bottom navigation bar

### Managing Activities

- Browse activities scheduled for each day of your trip
- Click on an activity card to view detailed information
- The date selector allows you to switch between different days of your trip

## Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

The build output will be in the `dist` directory, ready to be deployed to your hosting service of choice.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspired by modern travel applications
- Icons from various open-source libraries
- Sample images for demonstration purposes
