
import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingActionButtons from './FloatingActionButtons';
import LoadingSpinner from './LoadingSpinner';

const Layout = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // Show loading spinner on route change and initial load
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200); // 1.2 seconds loading animation

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {loading && <LoadingSpinner />}
      <Navbar />
      <main className="flex-1 animate-fadeIn">
        <Outlet />
      </main>
      <Footer />
      <FloatingActionButtons />
    </div>
  );
};

export default Layout;
