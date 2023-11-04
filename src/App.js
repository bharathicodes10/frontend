import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './pages/navbar';
import Home from './pages/home';
import Login from './pages/login';
import Profile from './pages/profile';
import Register from './pages/registration';
import Services from './pages/services'; // Import the Services component
import Booking from './pages/booking'; // Import the Booking component
import BookingHistory from './pages/bookingHistory';
import './App.css';

function App() {
  const [user, setUser] = useState(null); // Store user data if logged in

  return (
    <Router>
      <div className="App">
        <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={user ? <Profile user={user} /> : <Login />} />
          <Route path="/login" element={user ? <Profile user={user} /> : <Login setUser={setUser} />} />
          <Route path="/register" element={user ? <Profile user={user} /> : <Register setUser={setUser} />} />
          {/* Define a route for the Services component */}
          <Route path="/services" element={user ? <Services /> : <Login />} />
          {/* Define a route for the Booking component */}
          <Route path="/booking" element={user ? <Booking /> : <Login setUser={setUser} />} />
          <Route path="/bookingHistory" element={user ? <BookingHistory /> : <Login setUser={setUser} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
