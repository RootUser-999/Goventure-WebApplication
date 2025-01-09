import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const servicesData = [
  { id: 1, title: 'Guided Tours', category: 'Tours', description: 'Explore cities with our experienced tour guides.', image: 'https://lebanonsightseeing.com/wp-content/uploads/2022/11/Professional-Tour-Guide.jpg' },
  { id: 2, title: 'Private Tours', category: 'Tours', description: 'Enjoy a personalized experience with a private guide.', image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/1a/91/5b.jpg' },
  { id: 3, title: 'Group Tours', category: 'Tours', description: 'Join a group and explore the city together.', image: 'https://static01.nyt.com/images/2016/11/29/business/29ITINERARIES1/29ITINERARIES1-superJumbo.jpg' },
  { id: 4, title: 'Adventure Tours', category: 'Adventure', description: 'Embark on thrilling and exciting tours.', image: 'https://atp.com.pk/wp-content/uploads/slider-4.jpg' },
  { id: 5, title: 'Customized Tour Packages', category: 'Customized', description: 'Get a tailor-made tour experience.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzxs32T6lgetpK3PbFNNE7mfDbRc_thl1O5w&s' },
];

function Services() {
  const [filter, setFilter] = useState('All');

  const filteredServices =
    filter === 'All' ? servicesData : servicesData.filter((service) => service.category === filter);

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5 display-4 font-weight-bold text-primary" style={{ fontFamily: 'Poppins, sans-serif' ,fontSize:'40px'}}>
        Explore Our Tour Services
      </h1>

      {/* Filter Options */}
      <div className="d-flex justify-content-center mb-5">
        {['All', 'Tours', 'Adventure', 'Customized'].map((category) => (
          <button
           
            key={category}
            onClick={() => setFilter(category)}
            className={`btn mx-3 px-5 py-3 rounded-pill text-uppercase ${
              filter === category ? 'btn-primary' : 'btn-outline-primary'
            } btn-lg shadow-sm`}
            style={{
              backgroundColor:'black',
              color:'white',
              borderRadius:'10px',
              fontFamily: 'Poppins, sans-serif',
              transition: 'background-color 0.3s ease',
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Services List */}
      <div
  style={{
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '30px', // Use gap for spacing between items
  }}
  className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center"
>
  {filteredServices.map((service) => (
    <div key={service.id} className="col">
      <div className="card h-100 shadow-lg rounded-lg border-0">
        <img
          src={service.image}
          alt={service.title}
          className="card-img-top rounded-top"
          style={{
            height: '250px',
            objectFit: 'cover',
            borderRadius: '10px',
          }}
        />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-dark font-weight-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {service.title}
                </h5>
                <p className="card-text text-muted mb-3" style={{ fontFamily: 'Arial, sans-serif' }}>
                  {service.description}
                </p>
                <Link
                  to={`/services/${service.id}`}
                  className="btn btn-outline-primary mt-auto py-2"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: '500',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    backgroundColor:'green',
                    color:'white',
                    padding:'10px',
                    borderRadius:'5px',
                    transition: 'background-color 0.3s ease',
                  }}
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
