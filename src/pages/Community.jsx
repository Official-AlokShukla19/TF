import { motion } from 'framer-motion';
import { Heart, Home, Users, ShieldCheck } from 'lucide-react';

const Community = () => {
  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      {/* Hero */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-20 sepia-[.3]"
            alt="Community"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F2] via-transparent to-[#FAF7F2]" />
        </div>

        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="inline-block px-4 py-1 border border-heritage-terracotta text-heritage-terracotta text-xs uppercase tracking-[0.3em] font-bold mb-6">Chapter III</span>
            <h1 className="text-6xl md:text-8xl font-serif font-black text-heritage-ink mb-8 leading-tight">Community <br /> <span className="italic text-heritage-terracotta">Roots.</span></h1>
            <p className="text-xl md:text-2xl font-body italic text-heritage-ink/70 leading-relaxed max-w-2xl mx-auto">
              Celebrating the collective spirit and resilience that defines our shared heritage and shared future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-32 items-center mb-32">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-px bg-heritage-clay" />
                <span className="text-xs uppercase tracking-widest text-heritage-clay font-bold">Resilience</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-heritage-ink">The Power of Collective Action</h2>
              <p className="text-lg font-body text-heritage-ink/80 leading-relaxed mb-6">
                We believe that transformation begins within the community. Our initiatives are led by local voices, ensuring that every project is rooted in the unique cultural fabric of the region.
              </p>
              <p className="text-lg font-body text-heritage-ink/80 leading-relaxed">
                From restoring ancient water systems to establishing women-led artisan collectives, we work to preserve heritage while building economic independence.
              </p>
            </div>
            <div className="relative">
              <div className="paper-container p-3 bg-heritage-clay/5 rotate-[2deg]">
                <img 
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200" 
                  alt="Collective Work" 
                  className="w-full aspect-square object-cover"
                />
              </div>
              {/* Overlay Badge */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-heritage-terracotta rounded-full flex items-center justify-center p-8 text-center text-heritage-paper shadow-xl rotate-[-10deg]">
                <span className="font-serif italic text-lg leading-tight">Founded on Faith in Humanity</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-32 px-6 bg-heritage-clay text-heritage-paper relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           {/* Folk art pattern simulation */}
           <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-heritage-gold" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { icon: Heart, title: "Compassion", desc: "Acting with empathy in every community interaction." },
              { icon: Home, title: "Heritage", desc: "Preserving the traditions that anchor us to our past." },
              { icon: Users, title: "Inclusion", desc: "Ensuring every voice, regardless of age or status, is heard." },
              { icon: ShieldCheck, title: "Resilience", desc: "Building systems that can withstand the test of time." }
            ].map((pillar, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 mx-auto rounded-full border border-heritage-gold/30 flex items-center justify-center mb-6 group-hover:bg-heritage-gold group-hover:text-heritage-ink transition-all duration-500">
                  <pillar.icon size={28} />
                </div>
                <h3 className="text-xl font-serif font-bold mb-4">{pillar.title}</h3>
                <p className="text-sm text-heritage-paper/70 leading-relaxed italic">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif italic text-center mb-16 opacity-60">Folk-Inspired Moments</h2>
          <div className="columns-1 md:columns-3 gap-6 space-y-6">
            <img src="https://images.unsplash.com/photo-1540655037529-dec987208707?auto=format&fit=crop&q=80&w=800" className="w-full rounded-sm" alt="Portrait" />
            <img src="https://images.unsplash.com/photo-1524492459423-5c26003d2414?auto=format&fit=crop&q=80&w=800" className="w-full rounded-sm" alt="Art" />
            <img src="https://images.unsplash.com/photo-1518331647614-7a1f04cd34cf?auto=format&fit=crop&q=80&w=800" className="w-full rounded-sm" alt="Landscape" />
            <img src="https://images.unsplash.com/photo-1504190886300-cd207869614c?auto=format&fit=crop&q=80&w=800" className="w-full rounded-sm" alt="People" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;
