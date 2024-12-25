import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems } from '../../data/navigation';
import useScrollPosition from '../../hooks/useScrollPosition';
import logo from '../../images/logo.png';
import './styles.scss';
export default function Navbar() {
  const [activeItem, setActiveItem] = useState('a1');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollPosition = useScrollPosition();

  const handleClick = (e, id) => {
    e.preventDefault();
    setActiveItem(id);
    setIsMenuOpen(false);
    const href = e.currentTarget.getAttribute('href');
    if (href) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 bg-gradient-to-r from-black/90 to-black/70 shadow-lg z-50 transition-all duration-300 ${
      scrollPosition > 50 ? 'py-2' : 'py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <a href="#" className="text-white">
              <img
                src={logo}
                alt="Logo"
                className={`transition-all duration-300 ${
                  scrollPosition > 50 ? 'h-10' : 'h-12'
                }`}
                style={{ filter: 'invert(1)' }}
              />
            </a>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.id)}
                  className={`${
                    activeItem === item.id
                      ? 'text-cyan-400 border-b-2 border-cyan-400'
                      : 'text-white hover:text-cyan-400 hover:border-b-2 hover:border-cyan-400'
                  } px-3 py-2 text-lg font-medium transition-all duration-300`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-cyan-400 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with animation */}
      <div 
        className={`md:hidden bg-black/95 overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => handleClick(e, item.id)}
              className={`${
                activeItem === item.id
                  ? 'text-cyan-400 border-l-4 border-cyan-400 bg-black/50'
                  : 'text-white hover:text-cyan-400 hover:bg-black/50 hover:border-l-4 hover:border-cyan-400'
              } block px-3 py-2 text-base font-medium transition-all duration-300`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}