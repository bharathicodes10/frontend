import React, { useState, useEffect } from 'react';

function Booking({ user }) {
  const [selectedServices, setSelectedServices] = useState([]);
  const [bookingDate, setBookingDate] = useState('');
  const [services, setServices] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the list of services from your backend when the component mounts.
    fetch('/api/services')
      .then((response) => response.json())
      .then((data) => setServices(data.services))
      .catch((error) => console.error('Error fetching services: ' + error));
  }, []);

  const handleServiceSelection = (serviceId) => {
    if (selectedServices.includes(serviceId)) {
      // If the service is already selected, unselect it.
      setSelectedServices(selectedServices.filter((id) => id !== serviceId));
    } else {
      // If the service is not selected, select it.
      setSelectedServices([...selectedServices, serviceId]);
    }
  };

  const handleBookingSubmission = (e) => {
    e.preventDefault();

    // Validate the user and data before sending the request
    if (!user) {
      setError('User is not authenticated');
      return;
    }
    if (selectedServices.length === 0) {
      setError('Please select at least one service');
      return;
    }
    if (!bookingDate) {
      setError('Please select a booking date');
      return;
    }

    // Send a request to create a booking with the selected services and booking date.
    fetch('/api/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: user.id, // You should have access to the logged-in user's ID
        email: user.email, // Include the user's email
        services: selectedServices,
        bookingDate,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Handle successful booking, e.g., show a success message
          console.log('Booking successful');
        } else {
          // Handle booking failure, e.g., display an error message
          console.error('Booking failed: ' + data.message);
        }
      })
      .catch((error) => {
        // Handle errors from the API request
        console.error('Booking error: ' + error);
      });
  };

  return (
    <div>
      <h2>Book a Service</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleBookingSubmission}>
        <div>
          <h3>Select Services</h3>
          {services.map((service) => (
            <label key={service.id} style={{ display: 'block' }}>
              <input
                type="checkbox"
                checked={selectedServices.includes(service.id)}
                onChange={() => handleServiceSelection(service.id)}
                style={{ marginRight: '5px' }}
              />
              {service.name}
            </label>
          ))}
        </div>
        <div>
          <h3>Booking Date</h3>
          <input
            type="date"
            value={bookingDate}
            onChange={(e) => setBookingDate(e.target.value)}
          />
        </div>
        <button type="submit">Book Service</button>
      </form>
    </div>
  );
}

export default Booking;
