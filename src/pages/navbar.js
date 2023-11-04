import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ user,setUser }) => {
  return (
    <nav>
      <div className="left">
        
        {user ? (
          <>
          <Link to="/">Home</Link>
        <Link to="/booking">Booking</Link>
        <Link to="/bookingHistory">Booking History</Link>
        </>
        ) : (
          <Link to="/">Home</Link>
          )}
      </div>
      <div className="right">
        {user ? (
          <>
            <Link to="/profile">Profile</Link>
            <Link to="/login" onClick={() => setUser(null)}>Logout</Link>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
