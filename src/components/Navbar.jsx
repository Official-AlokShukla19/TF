import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, BookOpen } from 'lucide-react';

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
  ];

  const scrollToFooter = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-4 bg-heritage-parchment/80 backdrop-blur-md shadow-sm' : 'py-8 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <BookOpen className="text-heritage-gold w-8 h-8 transition-transform group-hover:rotate-12" />
            <div className="absolute -inset-1 bg-heritage-gold/20 blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-serif font-bold tracking-tight text-heritage-ink uppercase">Tatwamasi</span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-heritage-gold font-sans font-semibold -mt-1">Foundation</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`editorial-link text-xs uppercase tracking-[0.2em] font-medium transition-colors ${location.pathname === link.path ? 'text-heritage-gold' : 'text-heritage-ink hover:text-heritage-gold'}`}
            >
              {link.name}
            </Link>
          ))}
          <button 
            onClick={scrollToFooter}
            className="btn-primary text-xs uppercase tracking-widest px-6 py-2.5"
          >
            Support Us
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-heritage-ink"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-heritage-paper p-8 flex flex-col justify-center gap-12"
          >
            <button 
              className="absolute top-8 right-8 text-heritage-ink"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-serif italic text-heritage-ink hover:text-heritage-gold transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <button 
              onClick={scrollToFooter}
              className="btn-primary w-full text-lg"
            >
              Support Our Mission
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
