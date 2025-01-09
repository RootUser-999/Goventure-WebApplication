import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

// Example service data
const servicesData = [
  { id: 1, title: 'Guided Tours', description: 'Explore cities with our experienced tour guides.' },
  { id: 2, title: 'Private Tours', description: 'Enjoy a personalized experience with a private guide.' },
  { id: 3, title: 'Group Tours', description: 'Join a group and explore the city together.' },
  { id: 4, title: 'Adventure Tours', description: 'Embark on thrilling and exciting tours.' },
  { id: 5, title: 'Customized Tour Packages', description: 'Get a tailor-made tour experience.' },
];

// Location and hotel options
const locations = ['Hunza', 'Sikardu', 'Kelash', 'Babusar Top'];
const hotelTypes = ['Luxury', 'Normal', 'Cheap'];

function ServiceDetails() {
  const { id } = useParams();
  const service = servicesData.find((service) => service.id === parseInt(id));

  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [tourType, setTourType] = useState('');
  const [location, setLocation] = useState('');
  const [hotelType, setHotelType] = useState('');
  const [totalPrice, setTotalPrice] = useState(null);

  // Price calculation logic
  const calculatePrice = () => {
    let price = 100; // Base price

    // Add price based on tour type
    if (tourType === 'Private') price += 200;
    if (tourType === 'Group') price += 50;
    if (tourType === 'Adventure') price += 300;

    // Add price based on location
    const locationPrices = {
      'Hunza': 50, 'Sikardu': 75, 'Kelash': 100, 'Babusar Top': 125,
    };
    price += locationPrices[location] || 0;

    // Add price based on hotel type
    const hotelPrices = {
      'Luxury': 300, 'Normal': 150, 'Cheap': 50,
    };
    price += hotelPrices[hotelType] || 0;

    setTotalPrice(price);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    calculatePrice();
  };

  // Check if service exists
  if (!service) {
    return (
      <div className="text-center mt-5">
        <h1 className="text-danger display-4">Service not found</h1>
        <p className="lead">Sorry, we couldn't find the service you were looking for.</p>
      </div>
    );
  }

  return (
    <div className="container py-5" style={{ height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f8f9fa' ,marginTop:'200px',paddingBottom:'200px'}}>
      <div className="card shadow-lg rounded-lg w-75"
      style={{paddingLeft:'20px',}}>
        <div className="card-body" style={{ backgroundColor: '#fff',display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '40px', borderRadius: '10px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',height:'100%' }}>
          <h1 className="card-title mb-4 text-primary text-center" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 'bold', fontSize: '2.5rem' }}>
            {service.title}
          </h1>
          <p className="card-text text-muted text-center" style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.4rem' }}>
            {service.description}
          </p>

          {/* Customize Tour Form */}
          <h2 className="mt-4 text-dark text-center" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '1.2rem' }}>
            Customize Your Tour
          </h2>

          <form onSubmit={handleSubmit} className="mt-4">
            {/* Name Input */}
            <div className="mb-4">
              <label htmlFor="name" className="form-label" style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>
                Name
              </label>
              <input
              style={{ borderRadius: '10px' ,border: '1px solid rgb(0, 0, 0)', padding: '10px',marginLeft:'15px'}}
                type="text"
                className="form-control w-50 rounded"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Enter your full name"
              />
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <label htmlFor="email" className="form-label" style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>
                Email
              </label>
              <input
              style={{ borderRadius: '10px' ,border: '1px solid rgb(0, 0, 0)', padding: '10px',marginLeft:'15px'}}
                type="email"
                className="form-control w-50 rounded"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
              />
            </div>

            {/* Phone Input */}
            <div className="mb-4">
              <label htmlFor="phone" className="form-label" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                Phone Number
              </label>
              <input
              style={{ borderRadius: '10px' ,border: '1px solid rgb(0, 0, 0)', padding: '10px',marginLeft:'15px'}}
                type="text"
                className="form-control w-50 rounded"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                placeholder="Enter your phone number"
              />
            </div>

            {/* Tour Type Select */}
            <div className="mb-4">
              <label htmlFor="tourType" className="form-label" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                Tour Type
              </label>
              <select
              style={{ borderRadius: '10px' ,border: '1px solid rgb(0, 0, 0)', padding: '10px',marginLeft:'15px'}}
                className="form-select w-50 rounded"
                id="tourType"
                value={tourType}
                onChange={(e) => setTourType(e.target.value)}
                required
              >
                <option value="">Select Tour Type</option>
                <option value="Private">Private Tour</option>
                <option value="Group">Group Tour</option>
                <option value="Adventure">Adventure Tour</option>
              </select>
            </div>

            {/* Location Select */}
            <div className="mb-4">
              <label htmlFor="location" className="form-label" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                Select Location
              </label>
              <select
              style={{ borderRadius: '10px' ,border: '1px solid rgb(0, 0, 0)', padding: '10px',marginLeft:'15px'}}
                className="form-select w-50 rounded"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              >
                <option value="">Select Location</option>
                {locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            {/* Hotel Type Select */}
            <div className="mb-4">
              <label htmlFor="hotelType" className="form-label" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                Hotel Type
              </label>
              <select
              style={{ borderRadius: '10px' ,border: '1px solid rgb(0, 0, 0)', padding: '10px',marginLeft:'15px'}}
                className="form-select w-50 rounded"
                id="hotelType"
                value={hotelType}
                onChange={(e) => setHotelType(e.target.value)}
                required
              >
                <option value="">Select Hotel Type</option>
                {hotelTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

          <div style={{display:'flex',alignContent:'center'}}>
            {/* Submit Button */}
            <button type="submit" className="btn btn-primary btn-lg w-100 mt-4 shadow-lg rounded-pill text-uppercase fw-bold py-3 px-5"
              style={{ backgroundColor: '#007bff', color: '#fff', fontFamily: 'Poppins, sans-serif', transition: 'background-color 0.3s ease',borderRadius: '10px' }}>
              Calculate Price
            </button>
            {/* Display total price */}
          {totalPrice !== null && (
            <div className="mt-4" style={{marginLeft:'10px'}}>

              <h4 className="text-success">Total Price: ${totalPrice}</h4>
            </div>
          )}

          </div>
          </form>

          
           {/* conform order   */}
           <button type="submit" className="btn btn-primary btn-lg w-100 mt-4 shadow-lg rounded-pill text-uppercase fw-bold py-3 px-5"
              style={{ backgroundColor: 'green', color: '#fff', fontFamily: 'Poppins, sans-serif', transition: 'background-color 0.3s ease',borderRadius: '10px' }}>
              Place Order
            </button>

          {/* Back to Services Link */}
          <div className="mt-4">
            <Link to="/services" className="btn btn-secondary btn-lg w-100 shadow-sm" style={{ padding:'10px',fontWeight: '500', backgroundColor: 'black', color: 'white', borderRadius: '10px', fontFamily: 'Poppins, sans-serif',  }}>
              Back to Services
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetails;
