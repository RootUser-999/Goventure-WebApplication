import React from 'react';

// Data for the trips
const tripsData = [
  {
    id: 1,
    title: 'Mountain Adventure',
    description: 'Explore the stunning mountain landscapes and enjoy adventurous hikes.',
    price: '$299',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBeB1dbY3DjdN-VWvIorifD-6JhFzYdLOGOw&s',
  },
  {
    id: 2,
    title: 'Beach Paradise',
    description: 'Relax on the pristine beaches with crystal-clear waters.',
    price: '$399',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/d8/e8/14/kund-malir-beach-03008094313.jpg?w=500&h=400&s=1',
  },
  {
    id: 3,
    title: 'City Exploration',
    description: 'Discover the hidden gems of a bustling city with rich culture.',
    price: '$199',
    image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/0*X0xnfeOcblPfYCrD',
  },
];

// Trips Component
const Trips = () => {
  return (
    <section className="py-12 px-4 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Our Trips</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {tripsData.map((trip) => (
          <div
            key={trip.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={trip.image}
              alt={trip.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{trip.title}</h3>
              <p className="text-gray-700 mb-4">{trip.description}</p>
              <p className="text-lg font-bold text-cyan-600">{trip.price}</p>
              <button className="mt-4 w-full bg-cyan-600 text-white py-2 rounded-lg hover:bg-cyan-700 transition-colors">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trips;
