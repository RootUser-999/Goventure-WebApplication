import Layout from './components/layout/Layout';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Trips from './components/sections/Trips';
import Contact from './components/sections/Contact';

function App() {
  return (
    <Layout>
      <Home />
      <About />
      <Services />
      <Trips />
      <Contact />
    </Layout>
  );
}

export default App;