import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Pencil, Users, Heart, ArrowRight } from 'lucide-react';

const Education = () => {
  return (
    <div className="bg-heritage-sepia/20 min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto manuscript-container min-h-[500px] md:min-h-[800px] relative flex flex-col">
        <div className="paper-texture opacity-50" />
        <div className="hidden md:block book-fold shadow-[0_0_50px_rgba(0,0,0,0.2)]" />
        
        {/* Main Spread - Image 2 Style */}
        <div className="flex-grow grid grid-cols-1 lg:grid-cols-2 relative z-10">
          {/* Left Page */}
          <div className="p-6 md:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-heritage-sepia/10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="inline-block px-4 py-1 border border-heritage-maroon text-heritage-maroon text-[10px] uppercase tracking-[0.3em] font-bold mb-8">Chapter II</span>
              <h1 className="text-5xl md:text-7xl font-serif font-black text-heritage-ink mb-10 leading-[1.1]">
                Education & <br />
                <span className="italic text-heritage-maroon">Growth.</span>
              </h1>
              
              <div className="flourish !justify-start !my-8">
                <div className="flourish-line !w-32" />
              </div>
              
              <p className="text-xl font-body italic text-heritage-ink/80 leading-relaxed mb-8">
                Transforming lives across generations through the power of grassroots learning and community empowerment.
              </p>

              <div className="space-y-6 text-sm font-body text-heritage-ink/70 leading-relaxed max-w-md">
                <p>
                  In the heart of rural India, education is more than just reading and writing. It is the key to unlocking a world of possibilities for first-generation learners.
                </p>
                <p>
                  We believe in the "Tree of Wisdom" model—where the roots of community support the branches of individual aspiration.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Page */}
          <div className="p-6 md:p-16 flex flex-col justify-center bg-heritage-paper/30">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="relative"
            >
              <div className="paper-container manuscript-border !p-1 rotate-1 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1200" 
                  className="w-full aspect-[4/5] object-cover grayscale sepia-[0.4] opacity-80"
                  alt="Children Learning"
                />
              </div>
              
              <div className="mt-12 space-y-8">
                <h2 className="text-3xl font-serif font-bold text-heritage-ink leading-tight">
                  Beyond the Walls of a Classroom
                </h2>
                <p className="text-base font-body text-heritage-ink/80 leading-relaxed italic">
                  "Through our mobile libraries and open-air schools, we bring the light of learning to those who need it most."
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer Ribbon - Image 2 Dark Strip */}
        <div className="relative z-10 bg-heritage-maroon text-heritage-paper py-10 px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <BookOpen className="text-heritage-gold/60 mb-3" size={24} />
              <div className="text-2xl font-serif font-black mb-1">500+</div>
              <div className="text-[10px] uppercase tracking-widest font-bold opacity-60">Students Empowered</div>
            </div>
            <div className="flex flex-col items-center text-center">
              <Pencil className="text-heritage-gold/60 mb-3" size={24} />
              <div className="text-2xl font-serif font-black mb-1">24</div>
              <div className="text-[10px] uppercase tracking-widest font-bold opacity-60">Learning Hubs</div>
            </div>
            <div className="flex flex-col items-center text-center">
              <Users className="text-heritage-gold/60 mb-3" size={24} />
              <div className="text-2xl font-serif font-black mb-1">12</div>
              <div className="text-[10px] uppercase tracking-widest font-bold opacity-60">Communities</div>
            </div>
            <div className="flex flex-col items-center text-center">
              <Heart className="text-heritage-gold/60 mb-3" size={24} />
              <div className="text-2xl font-serif font-black mb-1">100%</div>
              <div className="text-[10px] uppercase tracking-widest font-bold opacity-60">Grassroots Led</div>
            </div>
          </div>
        </div>

        {/* Initiative Highlights & Next CTA */}
        <div className="relative z-10 bg-heritage-paper/50 border-t border-heritage-sepia/10 p-12">
           <h3 className="text-center font-serif italic text-2xl text-heritage-sepia mb-12">Initiatives of Hope</h3>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-16">
              {[
                { title: "Literacy First", desc: "Fundamental literacy programs for children and adults in remote villages." },
                { title: "Artistic Expression", desc: "Using traditional folk arts to teach storytelling, history, and culture." },
                { title: "Mentor Program", desc: "Connecting urban professionals with rural students for long-term guidance." }
              ].map((item, i) => (
                <div key={i} className="space-y-4">
                  <h4 className="text-lg font-serif font-bold text-heritage-ink underline decoration-heritage-gold/30 underline-offset-8">{item.title}</h4>
                  <p className="text-sm font-body text-heritage-ink/70 leading-relaxed italic">{item.desc}</p>
                </div>
              ))}
           </div>

           <div className="text-center pt-12 border-t border-heritage-sepia/10">
              <Link 
                to="/community-roots" 
                className="group inline-flex flex-col items-center gap-4"
              >
                <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-heritage-gold">Next Chapter</span>
                <h2 className="text-3xl md:text-5xl font-serif italic text-heritage-ink group-hover:text-heritage-maroon transition-colors">Community Roots</h2>
                <div className="w-12 h-12 rounded-full border border-heritage-maroon flex items-center justify-center text-heritage-maroon group-hover:bg-heritage-maroon group-hover:text-heritage-paper transition-all">
                  <ArrowRight size={24} />
                </div>
              </Link>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
