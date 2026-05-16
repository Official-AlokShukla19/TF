import { motion } from 'framer-motion';
import { BookOpen, Pencil, Users } from 'lucide-react';

const Education = () => {
  return (
    <div className="bg-heritage-parchment min-h-screen">
      {/* Hero */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-30"
            alt="Children Learning"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-heritage-parchment via-transparent to-heritage-parchment" />
        </div>

        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="inline-block px-4 py-1 border border-heritage-burntOrange text-heritage-burntOrange text-xs uppercase tracking-[0.3em] font-bold mb-6">Chapter II</span>
            <h1 className="text-6xl md:text-8xl font-serif font-black text-heritage-ink mb-8">Education & <span className="italic text-heritage-burntOrange">Growth.</span></h1>
            <p className="text-xl md:text-2xl font-body italic text-heritage-ink/70 leading-relaxed">
              Transforming lives across generations through the power of grassroots learning and community empowerment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1">
            <div className="paper-container p-4 manuscript-border rotate-[-1deg]">
               <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200" 
                alt="Rural Classroom" 
                className="w-full aspect-[4/5] object-cover rounded-sm"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-heritage-ink mb-10 leading-tight">
              Beyond the Walls of a Classroom
            </h2>
            <div className="space-y-8 text-lg font-body text-heritage-ink/80 leading-relaxed">
              <p>
                In the heart of rural India, education is more than just reading and writing. It is the key to unlocking a world of possibilities for first-generation learners. Our approach focuses on holistic growth, blending traditional wisdom with modern knowledge.
              </p>
              <p>
                We believe in the "Tree of Wisdom" model—where the roots of community support the branches of individual aspiration. Through our mobile libraries and open-air schools, we bring the light of learning to those who need it most.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mt-16">
              <div>
                <div className="text-4xl font-serif font-black text-heritage-burntOrange mb-2">500+</div>
                <div className="text-xs uppercase tracking-widest font-bold text-heritage-ink/50">Students Empowered</div>
              </div>
              <div>
                <div className="text-4xl font-serif font-black text-heritage-burntOrange mb-2">24</div>
                <div className="text-xs uppercase tracking-widest font-bold text-heritage-ink/50">Learning Hubs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Initiative Highlights */}
      <section className="py-32 px-6 bg-heritage-mustard/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-serif italic text-heritage-ink">Initiatives of Hope</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: BookOpen, title: "Literacy First", desc: "Fundamental literacy programs for children and adults in remote villages." },
              { icon: Pencil, title: "Artistic Expression", desc: "Using traditional folk arts to teach storytelling, history, and culture." },
              { icon: Users, title: "Mentor Program", desc: "Connecting urban professionals with rural students for long-term guidance." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-heritage-burntOrange/10 flex items-center justify-center mb-6 text-heritage-burntOrange">
                  <item.icon size={32} />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4">{item.title}</h3>
                <p className="font-body text-heritage-ink/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
