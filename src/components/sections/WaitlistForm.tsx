import { useState } from 'react';
import { motion } from 'motion/react';
import { MaterialIcon } from '../ui';

export function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [storeUrl, setStoreUrl] = useState('');
  const [volume, setVolume] = useState('');
  const [earlyAccess, setEarlyAccess] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log({ email, storeUrl, volume, earlyAccess });
    setSubmitted(true);
  };

  return (
    <section id="waitlist" className="py-24 bg-charcoal" aria-labelledby="waitlist-heading">
      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-cream/50 mb-3">Join the waitlist</p>
          <h2 id="waitlist-heading" className="font-serif text-4xl md:text-5xl text-cream mb-4">
            Get early access
          </h2>
          <p className="text-lg text-cream/60">
            Be among the first stores to offer virtual try-on to your customers.
          </p>
        </motion.div>

        {!submitted ? (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            {/* Email */}
            <div className="mb-5">
              <label htmlFor="email" className="block text-sm font-medium text-cream mb-2">
                Email address <span className="text-gold">*</span>
              </label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@yourstore.com"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-cream placeholder:text-cream/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-colors"
              />
            </div>

            {/* Store URL */}
            <div className="mb-5">
              <label htmlFor="store" className="block text-sm font-medium text-cream mb-2">
                Store URL <span className="text-cream/40">(optional)</span>
              </label>
              <input
                type="url"
                id="store"
                value={storeUrl}
                onChange={(e) => setStoreUrl(e.target.value)}
                placeholder="https://yourstore.myshopify.com"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-cream placeholder:text-cream/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-colors"
              />
            </div>

            {/* Monthly volume */}
            <div className="mb-6">
              <label htmlFor="volume" className="block text-sm font-medium text-cream mb-2">
                Monthly order volume <span className="text-cream/40">(optional)</span>
              </label>
              <select
                id="volume"
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-cream focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-colors appearance-none cursor-pointer"
              >
                <option value="" className="bg-charcoal">Select volume</option>
                <option value="0-100" className="bg-charcoal">0-100 orders/month</option>
                <option value="100-500" className="bg-charcoal">100-500 orders/month</option>
                <option value="500-1000" className="bg-charcoal">500-1,000 orders/month</option>
                <option value="1000-5000" className="bg-charcoal">1,000-5,000 orders/month</option>
                <option value="5000+" className="bg-charcoal">5,000+ orders/month</option>
              </select>
            </div>

            {/* Early access checkbox */}
            <div className="mb-8">
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={earlyAccess}
                    onChange={(e) => setEarlyAccess(e.target.checked)}
                    className="sr-only"
                  />
                  <div className={`w-5 h-5 rounded border-2 transition-colors flex items-center justify-center ${
                    earlyAccess ? 'bg-gold border-gold' : 'border-white/30 group-hover:border-white/50'
                  }`}>
                    {earlyAccess && <MaterialIcon name="check" size={14} className="text-charcoal" />}
                  </div>
                </div>
                <span className="text-sm text-cream/70 group-hover:text-cream transition-colors">
                  I want early pilot access (limited spots)
                </span>
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-gold text-charcoal py-4 rounded-xl font-semibold text-base flex items-center justify-center gap-2 hover:bg-gold-dark transition-colors shadow-lg shadow-gold/20"
            >
              Get early access
              <MaterialIcon name="arrow_forward" size={20} />
            </button>

            <p className="text-xs text-cream/40 text-center mt-4">
              We'll only email you about Genefits. No spam, ever.
            </p>
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
              <MaterialIcon name="check" size={32} className="text-green-400" />
            </div>
            <h3 className="text-2xl font-semibold text-cream mb-3">You're on the list!</h3>
            <p className="text-cream/60">
              We'll be in touch soon with early access details. Keep an eye on your inbox.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

