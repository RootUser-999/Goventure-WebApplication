import React, { useEffect, useState } from 'react';

const images = [
  '/images/back_img/back1.jpg',
  '/images/back_img/back2.jpg',
  '/images/back_img/back3.jpg',
  '/images/back_img/back4.jpg',
  '/images/back_img/back5.jpg'
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white text-center p-12 relative transition-all duration-500 ease-in-out"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <div className="mt-64">
        <h1 className="text-5xl font-bold mb-5 text-shadow">
          PLAN YOUR{' '}
          <span className="text-[rgb(0,255,179)] text-shadow">CUSTOMIZE</span>{' '}
          TOUR
        </h1>
        <p className="text-2xl mb-10 text-shadow">
          LET YOUR IMAGINATION WONDER WITH{' '}
          <span className="text-cyan-400">GOVENTURE</span>
        </p>
        <div className="flex justify-center gap-3">
          <a 
            href="#" 
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-400 transition-all duration-300 shadow-lg"
          >
            Book Now
          </a>
          <a 
            href="#trips" 
            className="border-2 border-white text-white px-6 py-2 rounded-lg hover:bg-white hover:text-black transition-all duration-300 shadow-lg"
          >
            View Plans
          </a>
        </div>
      </div>
    </section>
  );
}