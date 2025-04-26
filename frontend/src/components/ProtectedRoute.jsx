import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  
  // Check if navigating from the form page
  const isComingFromForm = location.state && location.state.fromForm;

  if (!isComingFromForm) {
    // If not coming from the form, redirect to the form
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;