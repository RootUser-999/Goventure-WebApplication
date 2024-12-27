import './App.css';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/navigation/Navbar';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar/>
      <Home />
      <About />
      <Contact />
      </>
  );
}

export default App;