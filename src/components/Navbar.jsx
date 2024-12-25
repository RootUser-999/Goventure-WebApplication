import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { id: 'a1', label: 'Home', href: '#home' },
  { id: 'a2', label: 'About', href: '#about' },
  { id: 'a3', label: 'Services', href: '#services' },
  { id: 'a4', label: 'Trips', href: '#trips' },
  { id: 'a5', label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [activeItem, setActiveItem] = useState('a1');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (e, id) => {
    e.preventDefault();
    setActiveItem(id);
    setIsMenuOpen(false);
    const href = e.currentTarget.getAttribute('href');
    if (href) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-black/90 to-black/70 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-white">
              <img src="/images/logo.png" alt="Logo" className="h-12" />
            </a>
          </div>

          {/* Desktop Menu */}
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

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-cyan-400 focus:outline-none"
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95">
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
      )}
    </nav>
  );
}