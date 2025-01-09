import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import React Router
import Layout from './components/layout/Layout';
import Navbar from './components/navigation/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Trips from './components/Trips';
import Services from './components/Services';

function App() {
  return (
    <Router>
      <Layout>
        <Navbar />
        {/* Routing for all pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/trips" element={<Trips />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
