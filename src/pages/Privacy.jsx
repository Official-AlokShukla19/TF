const Privacy = () => {
  return (
    <div className="bg-heritage-parchment min-h-screen pt-32 pb-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto manuscript-container p-8 md:p-16 relative">
        <div className="paper-texture opacity-30" />
        
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-black text-heritage-ink mb-12 border-b border-heritage-sepia/20 pb-6 italic">Privacy Policy</h1>
          
          <div className="space-y-12 text-heritage-ink/80 font-body leading-relaxed">
            <section>
              <h2 className="text-xl font-serif font-bold text-heritage-ink mb-4">I. Data Collection</h2>
              <p className="italic">
                We respect the privacy of our visitors and donors. We only collect personal information that is voluntarily provided to us through our contact forms or donation portals. This may include your name, email address, and payment information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-serif font-bold text-heritage-ink mb-4">II. Usage of Information</h2>
              <p className="italic">
                Your data is used solely for processing donations, providing updates on our projects, and responding to your inquiries. We never sell, rent, or trade your personal information with third parties for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-serif font-bold text-heritage-ink mb-4">III. Security</h2>
              <p className="italic">
                We implement industry-standard security measures to protect your data. All online donations are processed through secure, encrypted gateways.
              </p>
            </section>

            <section className="pt-12 border-t border-heritage-sepia/10 text-xs opacity-50">
              <p>Last updated: May 2026. For any questions regarding your privacy, please contact us at privacy@tatwamasi.org</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
