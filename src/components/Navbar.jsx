import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, BookOpen } from 'lucide-react';
import logo from '../assets/Tw Fn.jpeg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Our Story', path: '/' },
    { name: 'Education & Growth', path: '/education-growth' },
    { name: 'Community Roots', path: '/community-roots' },
    { name: 'Innovative Horizons', path: '/innovative-horizons' },
    { name: 'Contact', path: '/contact' },
  ];


  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-4 bg-heritage-parchment/90 backdrop-blur-md shadow-lg border-b border-heritage-sepia/10' : 'py-8 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4 group shrink-0">
          <div className="relative">
            <img 
              src={logo} 
              alt="Tatwamasi Logo" 
              className="w-10 h-10 md:w-12 md:h-12 object-cover rounded-full border-2 border-heritage-gold/30 transition-transform group-hover:rotate-12 group-hover:scale-110 shadow-md"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <BookOpen className="hidden text-heritage-gold w-7 h-7 md:w-8 md:h-8" />
            <div className="absolute -inset-1 bg-heritage-gold/20 blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg md:text-2xl font-serif font-bold tracking-tight text-heritage-ink uppercase leading-none">Tatwamasi</span>
            <span className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] text-heritage-gold font-sans font-semibold mt-0.5">Foundation</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`editorial-link text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-300 ${location.pathname === link.path ? 'text-heritage-maroon' : 'text-heritage-ink hover:text-heritage-gold'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/support"
            className="btn-manuscript text-[10px] uppercase tracking-widest px-5 py-2 whitespace-nowrap shadow-sm hover:shadow-md transition-shadow"
          >
            Support Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-heritage-ink p-2 hover:bg-heritage-maroon/5 rounded-full transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scaleY: 0, originY: 0 }}
            animate={{ opacity: 1, scaleY: 1, originY: 0 }}
            exit={{ opacity: 0, scaleY: 0, originY: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] bg-heritage-parchment p-8 flex flex-col justify-center gap-12"
          >
            <div className="paper-texture opacity-30" />
            <button 
              className="absolute top-8 right-8 text-heritage-ink hover:text-heritage-maroon transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <div className="flex flex-col gap-6 relative z-10">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="group flex flex-col"
                >
                  <span className="text-[10px] uppercase tracking-[0.5em] text-heritage-gold font-bold mb-2">
                    {link.path === '/' ? 'Home' : 'Chapter'}
                  </span>
                  <span className="text-4xl font-serif italic text-heritage-ink group-hover:text-heritage-maroon transition-colors">
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
            <Link 
              to="/support"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-manuscript w-full text-xl py-6 relative z-10"
            >
              Support Our Mission
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
