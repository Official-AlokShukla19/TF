import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Home as HomeIcon, Users, ShieldCheck, ArrowRight } from 'lucide-react';

const Community = () => {
  return (
    <div className="bg-heritage-parchment min-h-screen pt-32 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto manuscript-container p-4 md:p-16 relative">
        <div className="paper-texture opacity-30" />
        
        {/* Hero Section */}
        <section className="relative z-10 mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1 border border-heritage-terracotta text-heritage-terracotta text-[10px] uppercase tracking-[0.3em] font-bold mb-6 md:mb-8">Chapter III</span>
            <h1 className="text-4xl md:text-8xl font-serif font-black text-heritage-ink mb-6 md:mb-10 leading-tight">
              Community <br />
              <span className="italic text-heritage-terracotta">Roots.</span>
            </h1>
            <p className="text-lg md:text-2xl font-body italic text-heritage-ink/70 max-w-2xl mx-auto leading-relaxed">
              Celebrating the collective spirit and resilience that defines our shared heritage and shared future.
            </p>
            <div className="flourish">
              <div className="flourish-line !w-32 md:w-48" />
            </div>
          </motion.div>
        </section>

        {/* Narrative Section */}
        <section className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="order-2 lg:order-1 relative">
            <div className="paper-container manuscript-border !p-2 rotate-[-2deg] shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200" 
                alt="Collective Work" 
                className="w-full aspect-square object-cover sepia-[0.2]"
              />
              {/* Overlay Badge */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-heritage-maroon rounded-full flex items-center justify-center p-6 text-center text-heritage-paper shadow-xl rotate-[15deg] border-4 border-heritage-gold/20">
                <span className="font-serif italic text-sm leading-tight">Founded on Faith</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-px bg-heritage-terracotta" />
              <span className="text-[10px] uppercase tracking-widest text-heritage-terracotta font-bold">Resilience</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-10 text-heritage-ink leading-tight">The Power of Collective Action</h2>
            <div className="space-y-8 text-lg font-body text-heritage-ink/80 leading-relaxed italic">
              <p>
                We believe that transformation begins within the community. Our initiatives are led by local voices, ensuring that every project is rooted in the unique cultural fabric of the region.
              </p>
              <p>
                From restoring ancient water systems to establishing women-led artisan collectives, we work to preserve heritage while building economic independence.
              </p>
            </div>
          </div>
        </section>

        {/* Pillars Section */}
        <section className="relative z-10 py-20 px-8 sketch-card mb-32">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { icon: Heart, title: "Compassion", desc: "Acting with empathy in every community interaction." },
              { icon: HomeIcon, title: "Heritage", desc: "Preserving the traditions that anchor us to our past." },
              { icon: Users, title: "Inclusion", desc: "Ensuring every voice, regardless of age or status, is heard." },
              { icon: ShieldCheck, title: "Resilience", desc: "Building systems that can withstand the test of time." }
            ].map((pillar, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 mx-auto rounded-full border border-heritage-gold/30 flex items-center justify-center mb-6 group-hover:bg-heritage-gold group-hover:text-heritage-ink transition-all duration-500">
                  <pillar.icon size={28} />
                </div>
                <h3 className="text-xl font-serif font-bold mb-4 text-heritage-ink">{pillar.title}</h3>
                <p className="text-sm text-heritage-ink/60 leading-relaxed italic">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery Section */}
        <section className="relative z-10 mb-32">
          <div className="flourish">
            <div className="flourish-line !w-16" />
            <span className="font-serif italic text-lg opacity-40">Folk-Inspired Moments</span>
            <div className="flourish-line !w-16" />
          </div>
          <div className="columns-1 md:columns-3 gap-8 space-y-8 mt-16">
            <img src="https://images.unsplash.com/photo-1540655037529-dec987208707?auto=format&fit=crop&q=80&w=800" className="w-full rounded-sm shadow-md sepia-[0.3] brightness-105" alt="Portrait" />
            <img src="https://images.unsplash.com/photo-1524492459423-5c26003d2414?auto=format&fit=crop&q=80&w=800" className="w-full rounded-sm shadow-md sepia-[0.3] brightness-105" alt="Art" />
            <img src="https://images.unsplash.com/photo-1518331647614-7a1f04cd34cf?auto=format&fit=crop&q=80&w=800" className="w-full rounded-sm shadow-md sepia-[0.3] brightness-105" alt="Landscape" />
            <img src="https://images.unsplash.com/photo-1504190886300-cd207869614c?auto=format&fit=crop&q=80&w=800" className="w-full rounded-sm shadow-md sepia-[0.3] brightness-105" alt="People" />
          </div>
        </section>

        {/* Continue the Story CTA */}
        <section className="relative z-10 text-center border-t border-heritage-sepia/10 pt-20 pb-10">
          <Link 
            to="/innovative-horizons" 
            className="group inline-flex flex-col items-center gap-6"
          >
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-heritage-gold">Next Chapter</span>
            <h2 className="text-4xl md:text-6xl font-serif italic text-heritage-ink group-hover:text-heritage-maroon transition-colors">Innovative Horizons</h2>
            <div className="w-16 h-16 rounded-full border border-heritage-maroon flex items-center justify-center text-heritage-maroon group-hover:bg-heritage-maroon group-hover:text-heritage-paper transition-all">
              <ArrowRight size={32} />
            </div>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Community;
