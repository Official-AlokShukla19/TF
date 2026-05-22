import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Globe, Cpu, ArrowRight } from 'lucide-react';

const Innovation = () => {
  return (
    <div className="bg-heritage-parchment min-h-screen pt-32 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto manuscript-container p-4 md:p-16 relative">
        <div className="paper-texture opacity-30" />
        
        {/* Hero Section */}
        <section className="relative z-10 mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1 border border-heritage-gold/40 text-heritage-gold text-[10px] uppercase tracking-[0.5em] font-bold mb-6 md:mb-8">Chapter IV</span>
            <h1 className="text-4xl md:text-8xl font-serif font-black mb-6 md:mb-10 tracking-tight leading-tight text-heritage-ink">
              Innovative <br /> <span className="italic text-heritage-maroon">Horizons.</span>
            </h1>
            <p className="text-lg md:text-3xl font-body italic text-heritage-ink/60 leading-relaxed max-w-3xl mx-auto">
              Designing social transformation rooted in humanity, powered by vision, and sustained by technology.
            </p>
            <div className="flourish">
              <div className="flourish-line !w-32 md:w-48" />
            </div>
          </motion.div>
        </section>

        {/* Visionary Section */}
        <section className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-24 md:mb-32">
          <div>
            <h2 className="text-3xl md:text-6xl font-serif font-bold mb-8 md:mb-12 text-heritage-ink leading-tight">
              A New Dawn for <br /> Social Change
            </h2>
            <div className="space-y-8 text-lg font-body text-heritage-ink/70 leading-relaxed italic">
              <p>
                Innovation at Tatwamasi is not about replacing traditions, but about augmenting them. We leverage modern tools to solve age-old problems, from AI-driven agricultural planning to blockchain for transparent donation tracking.
              </p>
              <p>
                Our vision is a world where every community has the tools to thrive in a digital age without losing its cultural soul. We are building the infrastructure for a more equitable, more connected, and more conscious future.
              </p>
            </div>
            
            <Link to="/" className="mt-12 flex items-center gap-4 text-heritage-maroon font-serif italic text-2xl group">
              Join the Vision <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          
          <div className="relative">
            <div className="paper-container manuscript-border !p-1 rotate-1 shadow-2xl overflow-hidden rounded-full">
               <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" 
                alt="Future Vision" 
                className="w-full aspect-square object-cover grayscale sepia-[0.3] hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            {/* Floating stats */}
            <div className="absolute top-0 right-0 bg-heritage-paper/90 border border-heritage-sepia/20 p-4 shadow-xl backdrop-blur-sm">
               <div className="text-2xl font-serif text-heritage-maroon">100%</div>
               <div className="text-[8px] uppercase tracking-widest font-bold">Transparency</div>
            </div>
            <div className="absolute bottom-10 -left-10 bg-heritage-paper/90 border border-heritage-sepia/20 p-4 shadow-xl backdrop-blur-sm">
               <div className="text-2xl font-serif text-heritage-maroon">2030</div>
               <div className="text-[8px] uppercase tracking-widest font-bold">Horizon Goal</div>
            </div>
          </div>
        </section>

        {/* Technology Pillars */}
        <section className="relative z-10 py-20 px-8 sketch-card mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: "Agile Growth", desc: "Rapid prototyping of social solutions." },
              { icon: Cpu, title: "Ethical AI", desc: "Using data to drive decisions with compassion." },
              { icon: Globe, title: "Global Reach", desc: "Connecting grassroots movements worldwide." },
              { icon: Sparkles, title: "Sustainable Dev", desc: "Ensuring progress doesn't cost the Earth." }
            ].map((pillar, i) => (
              <div 
                key={i}
                className="p-6 md:border-r last:border-0 border-heritage-sepia/10"
              >
                <pillar.icon className="text-heritage-gold mb-6" size={32} />
                <h3 className="text-xl font-serif font-bold mb-4 text-heritage-ink">{pillar.title}</h3>
                <p className="text-sm text-heritage-ink/50 leading-relaxed italic">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Return to Home CTA */}
        <section className="relative z-10 text-center border-t border-heritage-sepia/10 pt-20 pb-10">
          <Link 
            to="/" 
            className="group inline-flex flex-col items-center gap-6"
          >
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-heritage-gold">End of Chapters</span>
            <h2 className="text-4xl md:text-6xl font-serif italic text-heritage-ink group-hover:text-heritage-maroon transition-colors">Back to Our Story</h2>
            <div className="w-16 h-16 rounded-full border border-heritage-maroon flex items-center justify-center text-heritage-maroon group-hover:bg-heritage-maroon group-hover:text-heritage-paper transition-all">
              <ArrowRight size={32} className="rotate-180" />
            </div>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Innovation;
