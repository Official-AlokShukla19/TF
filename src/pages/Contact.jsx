import { Mail, MapPin, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-heritage-parchment min-h-screen pt-32 pb-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto manuscript-container p-6 md:p-16 relative">
        <div className="paper-texture opacity-30" />
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div>
            <span className="inline-block px-4 py-1 border border-heritage-gold text-heritage-gold text-[10px] uppercase tracking-[0.3em] font-bold mb-8">Reach Out</span>
            <h1 className="text-5xl md:text-7xl font-serif font-black text-heritage-ink mb-10 leading-tight">
              Begin a <br />
              <span className="italic text-heritage-maroon">Conversation.</span>
            </h1>
            
            <p className="text-lg font-body italic text-heritage-ink/70 leading-relaxed mb-12 max-w-md">
              Whether you wish to volunteer, collaborate, or simply learn more about our story, our doors are always open.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full bg-heritage-maroon/5 flex items-center justify-center text-heritage-maroon group-hover:bg-heritage-maroon group-hover:text-heritage-paper transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest font-bold text-heritage-gold mb-1">Email Us</div>
                  <div className="text-lg font-serif italic text-heritage-ink">info@tatwamasi.org</div>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full bg-heritage-maroon/5 flex items-center justify-center text-heritage-maroon group-hover:bg-heritage-maroon group-hover:text-heritage-paper transition-all">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest font-bold text-heritage-gold mb-1">Connect</div>
                  <div className="text-lg font-serif italic text-heritage-ink">@tatwamasi.foundation</div>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full bg-heritage-maroon/5 flex items-center justify-center text-heritage-maroon group-hover:bg-heritage-maroon group-hover:text-heritage-paper transition-all">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest font-bold text-heritage-gold mb-1">Location</div>
                  <div className="text-lg font-serif italic text-heritage-ink">Rural Karnataka, India</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-heritage-paper/50 p-8 md:p-12 manuscript-border shadow-inner">
            <form className="space-y-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-heritage-sepia">Your Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-heritage-sepia/20 py-3 font-serif italic text-xl focus:outline-none focus:border-heritage-maroon transition-colors"
                  placeholder="Enter your name..."
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-heritage-sepia">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b border-heritage-sepia/20 py-3 font-serif italic text-xl focus:outline-none focus:border-heritage-maroon transition-colors"
                  placeholder="you@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-heritage-sepia">Your Message</label>
                <textarea 
                  rows="4"
                  className="w-full bg-transparent border-b border-heritage-sepia/20 py-3 font-serif italic text-xl focus:outline-none focus:border-heritage-maroon transition-colors resize-none"
                  placeholder="Write your story here..."
                ></textarea>
              </div>

              <button className="btn-manuscript w-full py-4 text-lg flex items-center justify-center gap-3">
                Send Message <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
