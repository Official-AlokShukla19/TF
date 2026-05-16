import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Globe, Cpu, ArrowRight } from 'lucide-react';

const Innovation = () => {
  return (
    <div className="bg-heritage-midnight text-heritage-paper min-h-screen">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(26,35,126,0.3)_0%,_transparent_70%)]" />
          <div className="absolute inset-0 opacity-20 noise-overlay" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-heritage-indigo/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-heritage-gold/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-5xl mx-auto text-center px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <span className="inline-block px-4 py-1 border border-heritage-gold/40 text-heritage-gold text-xs uppercase tracking-[0.5em] font-bold mb-8">Chapter IV</span>
            <h1 className="text-7xl md:text-9xl font-serif font-black mb-10 tracking-tight leading-tight">
              Innovative <br /> <span className="italic text-heritage-gold/80">Horizons.</span>
            </h1>
            <p className="text-xl md:text-3xl font-body italic text-heritage-paper/60 leading-relaxed max-w-3xl mx-auto">
              Designing social transformation rooted in humanity, powered by vision, and sustained by technology.
            </p>
          </motion.div>
        </div>

        {/* Floating element */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-4 text-heritage-gold/40">
           <div className="w-12 h-px bg-current" />
           <span className="text-[10px] uppercase tracking-widest font-bold">The Future is Human</span>
           <div className="w-12 h-px bg-current" />
        </div>
      </section>

      {/* Visionary Section */}
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-12 text-heritage-paper leading-tight">
              A New Dawn for <br /> Social Change
            </h2>
            <div className="space-y-8 text-lg font-body text-heritage-paper/70 leading-relaxed">
              <p>
                Innovation at Tatwamasi is not about replacing traditions, but about augmenting them. We leverage modern tools to solve age-old problems, from AI-driven agricultural planning to blockchain for transparent donation tracking.
              </p>
              <p>
                Our vision is a world where every community has the tools to thrive in a digital age without losing its cultural soul. We are building the infrastructure for a more equitable, more connected, and more conscious future.
              </p>
            </div>
            
            <Link to="/" className="mt-12 flex items-center gap-4 text-heritage-gold font-serif italic text-2xl group">
              Join the Vision <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-full border border-heritage-gold/20 p-8 relative animate-spin-slow">
              <div className="absolute inset-0 bg-gradient-to-tr from-heritage-indigo/20 to-transparent rounded-full" />
              <div className="w-full h-full rounded-full overflow-hidden border border-heritage-gold/30 p-2">
                 <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" 
                  alt="Future Vision" 
                  className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
            </div>
            {/* Floating stats */}
            <div className="absolute top-0 right-0 bg-heritage-midnight border border-heritage-gold/20 p-6 rounded-sm shadow-2xl backdrop-blur-xl">
               <div className="text-3xl font-serif text-heritage-gold">100%</div>
               <div className="text-[10px] uppercase tracking-widest font-bold">Transparency</div>
            </div>
            <div className="absolute bottom-10 -left-10 bg-heritage-midnight border border-heritage-gold/20 p-6 rounded-sm shadow-2xl backdrop-blur-xl">
               <div className="text-3xl font-serif text-heritage-gold">2030</div>
               <div className="text-[10px] uppercase tracking-widest font-bold">Horizon Goal</div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Pillars */}
      <section className="py-32 px-6 bg-heritage-indigo/10 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: "Agile Growth", desc: "Rapid prototyping of social solutions." },
              { icon: Cpu, title: "Ethical AI", desc: "Using data to drive decisions with compassion." },
              { icon: Globe, title: "Global Reach", desc: "Connecting grassroots movements worldwide." },
              { icon: Sparkles, title: "Sustainable Dev", desc: "Ensuring progress doesn't cost the Earth." }
            ].map((pillar, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 bg-white/5 border border-white/10 rounded-sm hover:border-heritage-gold/50 transition-all duration-500"
              >
                <pillar.icon className="text-heritage-gold mb-8" size={32} />
                <h3 className="text-xl font-serif font-bold mb-4">{pillar.title}</h3>
                <p className="text-sm text-heritage-paper/50 leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Innovation;
