import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Quote, Feather } from 'lucide-react';

const Home = () => {
  return (
    <div className="relative">
      {/* Hero Section - The Opening Spread */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-6">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-heritage-parchment opacity-90" />
          <div className="absolute inset-0 paper-texture" />
          <div className="absolute inset-0 noise-overlay" />
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative z-10">
          {/* Left Side - Narrative */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-heritage-gold" />
              <span className="text-xs uppercase tracking-[0.4em] text-heritage-gold font-bold">Volume I: The Awakening</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-serif font-black leading-[1.1] text-heritage-ink mb-8">
              Rooted in <br />
              <span className="italic text-heritage-maroon">Humanity.</span> <br />
              Growing Through Change.
            </h1>
            
            <p className="text-xl md:text-2xl font-body italic text-heritage-ink/70 mb-12 leading-relaxed max-w-xl">
              "Every life is a chapter of a grander story. We are here to ensure every child has the ink and the courage to write theirs."
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/education-growth" className="btn-primary group flex items-center justify-center gap-3 py-4 px-10 text-lg">
                Explore the Journey <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/community-roots" className="px-10 py-4 border border-heritage-ink/20 font-serif italic text-lg hover:bg-heritage-gold/10 transition-colors text-center">
                Read Our Mission
              </Link>
            </div>
          </motion.div>

          {/* Right Side - Visual Storybook */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="relative"
          >
            <div className="paper-container p-4 manuscript-border group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <img 
                  src="https://images.unsplash.com/photo-1518331647614-7a1f04cd34cf?auto=format&fit=crop&q=80&w=1200" 
                  alt="Rural Indian Community" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-heritage-ink/60 to-transparent" />
                
                <div className="absolute bottom-8 left-8 right-8 text-heritage-paper">
                  <div className="flex items-center gap-2 mb-2">
                    <Feather size={16} className="text-heritage-gold" />
                    <span className="text-[10px] uppercase tracking-widest font-sans font-bold">Preserving Heritage</span>
                  </div>
                  <p className="font-serif italic text-2xl">Building futures through compassion and collective knowledge.</p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 pointer-events-none opacity-20">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-heritage-gold">
                  <path d="M10,10 L90,10 L90,90 L10,90 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                  <circle cx="10" cy="10" r="2" />
                  <circle cx="90" cy="10" r="2" />
                  <circle cx="90" cy="90" r="2" />
                  <circle cx="10" cy="90" r="2" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Turn the Page</span>
          <div className="w-px h-12 bg-heritage-ink" />
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-6 bg-heritage-paper relative">
        <div className="max-w-5xl mx-auto text-center">
          <Quote className="mx-auto mb-12 text-heritage-gold opacity-30" size={64} />
          <h2 className="text-4xl md:text-6xl font-serif italic mb-12 leading-tight">
            "Wisdom is not found in books alone, but in the roots of our communities and the eyes of our children."
          </h2>
          <div className="h-1 w-24 bg-heritage-gold mx-auto" />
        </div>
      </section>

      {/* Featured Chapters Preview */}
      <section className="py-32 px-6 bg-heritage-parchment">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.4em] text-heritage-gold font-bold mb-4 block">Visual Index</span>
              <h2 className="text-5xl md:text-7xl font-serif font-black text-heritage-ink">The Chapters of Our Impact</h2>
            </div>
            <p className="text-xl font-body italic text-heritage-ink/60 max-w-sm">
              Discover how we are transforming landscapes of learning, one story at a time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Education & Growth", 
                tag: "Knowledge", 
                img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800",
                color: "bg-heritage-mustard/20",
                path: "/education-growth"
              },
              { 
                title: "Community Roots", 
                tag: "Belonging", 
                img: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=800",
                color: "bg-heritage-terracotta/20",
                path: "/community-roots"
              },
              { 
                title: "Innovative Horizons", 
                tag: "Future", 
                img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800",
                color: "bg-heritage-indigo/20",
                path: "/innovative-horizons"
              }
            ].map((chapter, i) => (
              <Link to={chapter.path} key={i}>
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="paper-container group cursor-pointer"
                >
                  <div className={`aspect-[3/4] overflow-hidden ${chapter.color}`}>
                    <img 
                      src={chapter.img} 
                      alt={chapter.title} 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <div className="p-8">
                    <span className="text-[10px] uppercase tracking-widest text-heritage-gold font-bold mb-2 block">{chapter.tag}</span>
                    <h3 className="text-3xl font-serif font-bold text-heritage-ink mb-6 group-hover:text-heritage-maroon transition-colors">{chapter.title}</h3>
                    <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold">
                      Read Chapter <ArrowRight size={14} />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
