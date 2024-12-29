import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import React Router
import Layout from './components/layout/Layout';
import Navbar from './components/navigation/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Trips from './components/Trips'; 

function App() {
  return (
    <Router>
      <Layout>
        <Navbar />
        <Routes>
          <Route path="/Trips" element={<Trips />} />

          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Contact />
              </>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
