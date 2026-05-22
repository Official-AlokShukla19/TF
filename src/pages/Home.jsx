import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Quote, Feather } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-heritage-parchment min-h-screen pt-24 pb-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto manuscript-container p-4 md:p-12 relative">
        <div className="paper-texture opacity-30" />
        
        {/* Hero Section - Image 1 Style */}
        <section className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] uppercase tracking-[0.4em] text-heritage-sepia font-bold">Volume I: The Awakening</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-black leading-[1.1] text-heritage-ink mb-6">
              Rooted in <br />
              <span className="italic text-heritage-maroon">Humanity.</span> <br />
              Growing Through Change.
            </h1>

            <div className="flourish !justify-start !my-4">
              <div className="flourish-line !w-32" />
            </div>
            
            <p className="text-lg md:text-xl font-body italic text-heritage-ink/80 mb-10 leading-relaxed max-w-lg">
              "Every life is a chapter of a grander story. We are here to ensure every child has the ink and the courage to write theirs."
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/education-growth" className="btn-manuscript text-center py-3 px-8 text-base">
                Explore the Journey →
              </Link>
              <Link to="/community-roots" className="px-8 py-3 border border-heritage-sepia/20 font-serif italic text-base hover:bg-heritage-paper transition-colors text-center">
                Read Our Mission
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-2xl sepia-[0.3] brightness-110">
              <img 
                src="https://images.unsplash.com/photo-1518331647614-7a1f04cd34cf?auto=format&fit=crop&q=80&w=1200" 
                alt="Rural Indian Community" 
                className="w-full h-full object-cover mix-blend-multiply opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-heritage-parchment/20 to-heritage-parchment/60" />
            </div>
            {/* Sketch details overlay */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 pointer-events-none opacity-40 mix-blend-multiply">
               <Feather className="text-heritage-sepia rotate-[-45deg]" size={48} />
            </div>
          </motion.div>
        </section>

        {/* Philosophy Section */}
        <section className="text-center mb-32 z-10 relative">
          <div className="flourish">
            <div className="flourish-line" />
          </div>
          <Quote className="mx-auto mb-8 text-heritage-gold opacity-40" size={48} />
          <h2 className="text-3xl md:text-5xl font-serif italic text-heritage-ink/90 max-w-4xl mx-auto leading-tight px-4">
            "Wisdom is not found in books alone, but in the roots of our communities and the eyes of our children."
          </h2>
          <div className="flourish">
            <div className="flourish-line" />
          </div>
        </section>

        {/* Featured Chapters Preview - Pillars Style */}
        <section className="relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-heritage-ink uppercase tracking-wider">The Chapters of Our Impact</h2>
            <div className="flourish">
              <div className="flourish-line !w-16" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Education & Growth", 
                tag: "Knowledge", 
                img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800",
                path: "/education-growth"
              },
              { 
                title: "Community Roots", 
                tag: "Belonging", 
                img: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=800",
                path: "/community-roots"
              },
              { 
                title: "Innovative Horizons", 
                tag: "Future", 
                img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800",
                path: "/innovative-horizons"
              }
            ].map((chapter, i) => (
              <Link to={chapter.path} key={i} className="group">
                <div className="sketch-card flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 mb-6 opacity-60 group-hover:opacity-100 transition-opacity">
                    <img src={chapter.img} alt="" className="w-full h-full object-cover rounded-full sepia" />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-heritage-sepia font-bold mb-3">{chapter.tag}</span>
                  <h3 className="text-xl font-serif font-bold text-heritage-ink mb-4 group-hover:text-heritage-maroon transition-colors">{chapter.title}</h3>
                  <p className="text-sm font-body italic text-heritage-ink/70 leading-relaxed mb-6">
                    Discover how we are transforming landscapes of learning, one story at a time.
                  </p>
                  <div className="mt-auto flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-heritage-gold group-hover:text-heritage-sepia transition-colors">
                    Read Chapter →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Closing Illustration Area */}
        <div className="mt-32 border-t border-heritage-sepia/10 pt-12 text-center opacity-40">
           <div className="text-[10px] uppercase tracking-[0.5em] font-bold mb-4 italic">Tatwamasi Foundation</div>
           <div className="flourish">
            <div className="flourish-line !w-64" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
