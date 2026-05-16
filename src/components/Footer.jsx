import { Link } from 'react-router-dom';
import { Mail, Phone, Globe, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-heritage-ink text-heritage-paper pt-24 pb-12 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-heritage-gold to-transparent opacity-30" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex flex-col mb-8">
              <span className="text-3xl font-serif font-bold tracking-tight text-heritage-paper uppercase">Tatwamasi</span>
              <span className="text-xs uppercase tracking-[0.4em] text-heritage-gold font-sans font-semibold -mt-1">Foundation</span>
            </div>
            <p className="text-heritage-paper/60 font-body text-sm leading-relaxed italic">
              "Building futures through compassion, knowledge, and the preservation of our collective cultural wisdom."
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg italic text-heritage-gold mb-8">Chapters</h4>
            <div className="flex flex-col gap-4 text-sm font-sans tracking-wide">
              <Link to="/" className="hover:text-heritage-gold transition-colors">Our Story</Link>
              <Link to="/education-growth" className="hover:text-heritage-gold transition-colors">Education & Growth</Link>
              <Link to="/community-roots" className="hover:text-heritage-gold transition-colors">Community Roots</Link>
              <Link to="/innovative-horizons" className="hover:text-heritage-gold transition-colors">Innovative Horizons</Link>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg italic text-heritage-gold mb-8">Connect</h4>
            <div className="flex flex-col gap-6 text-sm">
              <a href="mailto:info@tatwamasi.org" className="flex items-center gap-3 hover:text-heritage-gold transition-colors">
                <Mail size={18} className="text-heritage-gold" />
                info@tatwamasi.org
              </a>
              <a href="tel:+910000000000" className="flex items-center gap-3 hover:text-heritage-gold transition-colors">
                <Phone size={18} className="text-heritage-gold" />
                +91 98765 43210
              </a>
              <div className="flex gap-5 mt-4">
                <a href="#" className="w-10 h-10 rounded-full border border-heritage-paper/20 flex items-center justify-center hover:bg-heritage-gold hover:border-heritage-gold transition-all group">
                  <Globe size={18} className="group-hover:text-heritage-ink" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-heritage-paper/20 flex items-center justify-center hover:bg-heritage-gold hover:border-heritage-gold transition-all group">
                  <Globe size={18} className="group-hover:text-heritage-ink" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-heritage-paper/20 flex items-center justify-center hover:bg-heritage-gold hover:border-heritage-gold transition-all group">
                  <Globe size={18} className="group-hover:text-heritage-ink" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg italic text-heritage-gold mb-8">Legal</h4>
            <div className="flex flex-col gap-4 text-sm font-sans text-heritage-paper/60">
              <a href="#" className="hover:text-heritage-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-heritage-gold transition-colors">Terms & Conditions</a>
              <a href="#" className="hover:text-heritage-gold transition-colors">Refund Policy</a>
              <a href="#" className="hover:text-heritage-gold transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-heritage-paper/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-heritage-paper/40 text-xs tracking-widest uppercase">
            © 2026 Tatwamasi Foundation. Handcrafted with heart.
          </p>
          <div className="flex items-center gap-2 text-heritage-gold">
            <Heart size={14} fill="currentColor" />
            <span className="text-xs uppercase tracking-widest">Rooted in Humanity</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
