import { Heart, Feather, BookOpen, Globe, ShieldCheck } from 'lucide-react';

const Support = () => {
  return (
    <div className="bg-heritage-parchment min-h-screen pt-32 pb-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto manuscript-container p-6 md:p-16 relative">
        <div className="paper-texture opacity-30" />
        
        <div className="relative z-10 text-center mb-20">
          <Heart className="mx-auto text-heritage-maroon mb-8 animate-pulse" size={56} />
          <h1 className="text-5xl md:text-7xl font-serif font-black text-heritage-ink mb-8">Fuel the Movement</h1>
          <p className="text-xl md:text-2xl font-body italic text-heritage-ink/70 leading-relaxed max-w-3xl mx-auto">
            "We do not inherit the Earth from our ancestors; we borrow it from our children." Your contribution ensures their story is one of hope and innovation.
          </p>
          <div className="flourish">
            <div className="flourish-line !w-48" />
          </div>
        </div>

        {/* Impact Tiers */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            { amount: "₹1,000", title: "The Ink", desc: "Provides fundamental learning kits for 5 students.", icon: Feather },
            { amount: "₹5,000", title: "The Scroll", desc: "Sponsors a local community library for a month.", icon: BookOpen },
            { amount: "₹10,000", title: "The Archive", desc: "Funds the digital preservation of local folk heritage.", icon: Globe }
          ].map((tier, i) => (
            <div key={i} className="sketch-card flex flex-col items-center text-center p-8 group hover:border-heritage-maroon/40 transition-all">
              <tier.icon className="text-heritage-gold mb-4 group-hover:scale-110 transition-transform" size={32} />
              <div className="text-3xl font-serif font-black text-heritage-maroon mb-2">{tier.amount}</div>
              <h3 className="text-lg font-serif font-bold mb-4 uppercase tracking-widest text-heritage-ink">{tier.title}</h3>
              <p className="text-sm italic text-heritage-ink/60 mb-8 leading-relaxed">{tier.desc}</p>
              <button className="btn-manuscript w-full !bg-transparent !text-heritage-maroon border border-heritage-maroon hover:!bg-heritage-maroon hover:!text-heritage-paper">Select Tier</button>
            </div>
          ))}
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="p-8 border border-heritage-sepia/20 bg-heritage-paper/40">
            <h3 className="text-2xl font-serif font-bold mb-6 text-heritage-ink">Direct Contribution</h3>
            <div className="space-y-4 text-sm font-sans">
              <div className="flex justify-between border-b border-heritage-sepia/10 pb-2">
                <span className="text-heritage-ink/60">Bank Name</span>
                <span className="font-bold">Tatwamasi Trust Bank</span>
              </div>
              <div className="flex justify-between border-b border-heritage-sepia/10 pb-2">
                <span className="text-heritage-ink/60">Account Number</span>
                <span className="font-bold">0000 1234 5678 90</span>
              </div>
              <div className="flex justify-between border-b border-heritage-sepia/10 pb-2">
                <span className="text-heritage-ink/60">IFSC Code</span>
                <span className="font-bold">TTWB0000123</span>
              </div>
            </div>
            <button className="btn-manuscript w-full mt-8">View All Payment Options</button>
          </div>
          
          <div className="flex flex-col justify-center">
             <h3 className="text-2xl font-serif font-bold mb-6 text-heritage-ink italic">Transparency First</h3>
             <p className="text-base font-body italic text-heritage-ink/70 leading-relaxed mb-6">
               As a grassroots foundation, we take pride in our 100% direct-impact model. Every rupee is accounted for and channeled directly into our community-led projects.
             </p>
             <div className="flex items-center gap-4 text-heritage-gold font-bold text-xs uppercase tracking-[0.2em]">
                <ShieldCheck size={20} />
                Certified Non-Profit Organization
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
