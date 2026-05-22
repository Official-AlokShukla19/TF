import { Link } from 'react-router-dom';
import { Mail, Phone, Heart, BookOpen } from 'lucide-react';
import logo from '../assets/Tw Fn.jpeg';

const Footer = () => {
  return (
    <footer className="relative bg-heritage-ink text-heritage-paper pt-24 pb-12 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-heritage-gold to-transparent opacity-30" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-4 mb-6 group">
              <img 
                src={logo} 
                className="w-12 h-12 object-cover rounded-full border-2 border-heritage-gold/30 transition-transform group-hover:scale-110"
                alt="Logo"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <BookOpen className="hidden text-heritage-gold w-8 h-8" />
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-bold tracking-tight text-heritage-paper uppercase leading-none">Tatwamasi</span>
                <span className="text-[8px] uppercase tracking-[0.4em] text-heritage-gold font-sans font-semibold mt-1">Foundation</span>
              </div>
            </Link>
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
              <Link to="/contact" className="flex items-center gap-3 hover:text-heritage-gold transition-colors">
                <Mail size={18} className="text-heritage-gold" />
                info@tatwamasi.org
              </Link>
              <div className="flex items-center gap-3 text-heritage-paper/60">
                <Phone size={18} className="text-heritage-gold" />
                Rooted in Grassroots Social Impact
              </div>
              <div className="flex gap-5 mt-4">
                <a 
                  href="https://www.facebook.com/p/Tatwamasi-Foundation-100087963862743/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-heritage-paper/20 flex items-center justify-center hover:bg-[#1877F2] hover:border-[#1877F2] transition-all group"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5 fill-current group-hover:text-white" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.instagram.com/tatwamasi.foundation/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-heritage-paper/20 flex items-center justify-center hover:bg-[#E4405F] hover:border-[#E4405F] transition-all group"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5 fill-none stroke-current stroke-2 group-hover:text-white" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/company/tatwamasi-foundation-ngo?trk=public_profile_topcard-current-company" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-heritage-paper/20 flex items-center justify-center hover:bg-[#0077B5] hover:border-[#0077B5] transition-all group"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5 fill-current group-hover:text-white" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg italic text-heritage-gold mb-8">Legal</h4>
            <div className="flex flex-col gap-4 text-sm font-sans text-heritage-paper/60">
              <Link to="/privacy" className="hover:text-heritage-gold transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-heritage-gold transition-colors">Terms & Conditions</Link>
              <Link to="/support" className="hover:text-heritage-gold transition-colors">Support & Refund</Link>
              <Link to="/privacy" className="hover:text-heritage-gold transition-colors">Cookie Policy</Link>
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
