import React from 'react';

const teamMembers = [
  {
    image: '/images/hero1.png',
    name: 'Shahzeb',
    role: 'Lead Guide',
    description: 'With over 10 years of experience, Shahzeb leads our mountain trekking tours, ensuring safety and fun.',
  },
  {
    image: '/images/hero2.jpeg',
    name: 'Tufail Haider',
    role: 'Customer Support',
    description: 'Tufail is here to assist you with booking, queries, and ensuring a seamless experience.',
  },
  {
    image: '/images/hero3.jpeg',
    name: 'Innara Arif',
    role: 'Tour Coordinator',
    description: 'Innara Arif ensures the tours are well-organized, helping travelers enjoy their experience from start to finish.',
  },
];

const About = () => {
  return (
    <>
      <section id="about" className="bg-black bg-opacity-90 text-cyan-400 py-12 px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-cyan-300">About Us</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-white text-lg mb-8">
            We offer premium guided tours across Pakistan, making your travel experience unforgettable. 
            Our goal is to connect you with the best travel destinations in Pakistan, offering expert guidance, 
            personalized tours, and hassle-free bookings.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Our Mission</h3>
          <p className="text-white text-lg mb-8">
            At OverGoventure, our mission is to make exploring the beautiful landscapes and rich culture 
            of Pakistan accessible and exciting for travelers around the world.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">What Makes Us Unique</h3>
          <p className="text-white text-lg mb-8">
            Unlike other tour operators, we focus on personalized and immersive experiences. Whether you're 
            seeking an adventure trek through the mountains or a cultural exploration of Pakistan's cities, 
            we tailor your journey to your interests and preferences.
          </p>
        </div>
      </section>

      <section id="team-sec" className="bg-black bg-opacity-90 py-12 px-4">
        <h3 className="text-2xl font-bold text-cyan-400 text-center mb-8 border-t border-cyan-400 pt-8">
          Meet Our Team
        </h3>
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-lg p-6 shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl w-72"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 border-2 border-cyan-600 object-cover"
              />
              <h4 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h4>
              <p className="text-gray-600">{member.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;