import React from 'react';
import '../css/home.css';

const services = [
  {
    id: 1,
    title: 'General Service Check-up',
    description: 'Ensure your bike is in top condition with our comprehensive check-up service. This service includes a thorough inspection of all major components and safety checks.',
  },
  {
    id: 2,
    title: 'Oil Change',
    description: 'Keep your engine running smoothly with our professional oil change service. We use high-quality oil and ensure proper disposal of the old oil for an eco-friendly solution.',
  },
  {
    id: 3,
    title: 'Water Wash',
    description: 'Give your bike a fresh look with our thorough water wash service. Our experts use gentle techniques to clean your bike, ensuring no damage to the paint and finish.',
  },
  {
    id: 4,
    title: 'Repair',
    description: 'Get your bike back on the road with our expert repair service. Our skilled technicians are equipped to handle various repairs, from minor fixes to major overhauls.',
  },
  {
    id: 5,
    title: 'Gear Tightening',
    description: 'Ensure the gears of your bike are properly tightened for a smoother ride. Our service includes a complete check of your bike\'s gear system and necessary adjustments.',
  },
  {
    id: 6,
    title: 'Bike Color Customization',
    description: 'Add a personal touch to your bike with our professional color customization service. We offer a wide range of color options and custom designs to make your bike unique.',
  },{
    id: 7,
    title: 'Chain Lubrication',
    description: 'Keep your bike\'s chain in excellent condition with our chain lubrication service. Smooth operation and increased chain life are guaranteed.',
  },
  {
    id: 8,
    title: 'Electrical System Check',
    description: 'Ensure your bike\'s electrical system is working flawlessly with our comprehensive check. We diagnose and repair any electrical issues.',
  },
  {
    id: 9,
    title: 'Paint Restoration',
    description: 'Restore the paint of your bike to its original glory with our professional paint restoration service. We fix scratches, chips, and imperfections.',
  },
  {
    id: 10,
    title: 'Brake Pad Replacement',
    description: 'Enhance your bike\'s braking performance with our brake pad replacement service. We use high-quality brake pads for safety and durability.',
  },
  {
    id: 11,
    title: 'Tune-Up and Adjustments',
    description: 'Optimize your bike performance with our tune-up and adjustments service. We fine-tune components for a smoother ride.',
  },
  {
    id: 12,
    title: 'Bike Accessories Installation',
    description: 'Customize your bike with our bike accessories installation service. We offer a variety of accessories to choose from.'
  },
];

const Home = () => {
  return (
    <div className="home">
      <h2>Bike Services</h2>
      <div className="service-cards">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <h3>{service.title}</h3>
            <p>{service.description.slice(0,300)}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
