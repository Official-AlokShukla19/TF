const Terms = () => {
  return (
    <div className="bg-heritage-parchment min-h-screen pt-32 pb-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto manuscript-container p-8 md:p-16 relative">
        <div className="paper-texture opacity-30" />
        
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-black text-heritage-ink mb-12 border-b border-heritage-sepia/20 pb-6 italic">Terms & Conditions</h1>
          
          <div className="space-y-12 text-heritage-ink/80 font-body leading-relaxed">
            <section>
              <h2 className="text-xl font-serif font-bold text-heritage-ink mb-4">1. Acceptance of Terms</h2>
              <p className="italic">
                By accessing and using this website, you agree to comply with and be bound by the following terms and conditions of use.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-serif font-bold text-heritage-ink mb-4">2. Intellectual Property</h2>
              <p className="italic">
                The content, layout, design, data, and graphics on this website are protected by intellectual property laws and are owned by Tatwamasi Foundation unless otherwise stated.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-serif font-bold text-heritage-ink mb-4">3. Donation Refunds</h2>
              <p className="italic">
                As a non-profit organization, all donations are final. However, if a donation was made in error, please contact us within 7 days for review.
              </p>
            </section>

            <section className="pt-12 border-t border-heritage-sepia/10 text-xs opacity-50">
              <p>Tatwamasi Foundation © 2026. All rights reserved.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
