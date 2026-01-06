import { motion } from 'motion/react';

export function SocialProof() {
  return (
    <section className="py-16 bg-cream border-y border-charcoal/5">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Left - Message */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-charcoal/10 border-2 border-cream flex items-center justify-center"
                  >
                    <span className="text-xs font-medium text-charcoal/40">
                      {String.fromCharCode(64 + i)}
                    </span>
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-medium text-charcoal">500+ stores</p>
                <p className="text-xs text-charcoal/50">on the waitlist</p>
              </div>
            </div>

            <div className="hidden sm:block w-px h-10 bg-charcoal/10" />

            <div className="text-center sm:text-left">
              <p className="text-sm font-medium text-charcoal">Early access spots limited</p>
              <p className="text-xs text-charcoal/50">Pilot program launching Q1 2026</p>
            </div>
          </div>

          {/* Right - Logos placeholder */}
          <div className="flex items-center gap-6 opacity-40">
            <p className="text-xs text-charcoal/60 uppercase tracking-wider">Works with</p>
            <div className="flex items-center gap-4">
              <ShopifyLogo />
              <span className="text-charcoal/30">+</span>
              <span className="text-sm font-medium text-charcoal/40">More coming</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ShopifyLogo() {
  return (
    <svg className="h-6 w-auto text-charcoal/50" viewBox="0 0 109 40" fill="currentColor">
      <path d="M27.6 9.5c-.1-.1-.2-.1-.3-.1s-.2 0-.3.1c-.1.1-2.2 2-2.2 2s-1.6-1.7-1.8-1.9c-.2-.2-.6-.2-.8-.1 0 0-.4.1-.9.2-.5-1.5-1.4-2.8-3-2.8h-.1c-.5-.6-1-.8-1.5-.8-3.6 0-5.3 4.5-5.9 6.8-.9.3-1.5.5-1.6.5-.5.2-.5.2-.6.6 0 .3-1.3 10.2-1.3 10.2l10.5 1.8V9.6c-.1 0-.1-.1-.2-.1zm-3.8.7c-.6.2-1.3.4-2 .6.4-1.5 1.1-2.2 1.7-2.5.3.5.4 1.2.3 1.9zm-2.1-2.8c.1 0 .3.1.4.2-.8.4-1.7 1.4-2.1 3.4-.5.2-1.1.3-1.6.5.4-1.8 1.6-4.1 3.3-4.1zm.5 10.3s-.7-.4-1.6-.4c-1.3 0-1.3.8-1.3 1 0 1.1 2.9 1.5 2.9 4.1 0 2-1.3 3.3-3 3.3-2.1 0-3.1-1.3-3.1-1.3l.5-1.8s1.1.9 2 .9c.6 0 .8-.5.8-.8 0-1.4-2.4-1.5-2.4-3.9 0-2 1.4-3.9 4.3-3.9 1.1 0 1.7.3 1.7.3l-.8 2.5z"/>
      <path d="M28.9 9.3c0-.1-.1-.2-.2-.2-.1 0-2-.1-2-.1s-1.6-1.5-1.7-1.7V26l6.2-1.3S28.9 9.5 28.9 9.3zM41.2 15.9c-.8-.4-1.2-.8-1.2-1.2 0-.6.5-.9 1.3-.9.9 0 1.8.4 1.8.4l.7-2.1s-.6-.5-2.4-.5c-2.5 0-4.2 1.4-4.2 3.4 0 1.1.8 2 1.9 2.6.8.5 1.1.8 1.1 1.3 0 .5-.4.9-1.2.9-1.2 0-2.3-.6-2.3-.6l-.7 2.1s1 .7 2.7.7c2.6 0 4.4-1.3 4.4-3.5 0-1.2-.9-2.1-1.9-2.6zM52.5 12.3c-1.3 0-2.3.6-3 1.5l-.1-.1 1.1-5.8h-2.9l-2.8 14.8h2.9l1-5.1c.4-2 1.4-3.2 2.4-3.2.7 0 1 .5 1 1.1 0 .4-.1.9-.2 1.3l-1.1 5.9h2.9l1.2-6.1c.1-.6.2-1.2.2-1.7.1-1.5-.8-2.6-2.6-2.6zM60.4 12.3c-3.5 0-5.8 3.2-5.8 6.7 0 2.3 1.4 4 3.8 4 3.4 0 5.7-3.1 5.7-6.7 0-2.1-1.2-4-3.7-4zm-1.6 8.4c-.9 0-1.4-.8-1.4-1.8 0-1.6.8-4.4 2.4-4.4 1 0 1.4.8 1.4 1.6 0 1.7-.9 4.6-2.4 4.6zM72.3 12.3c-2 0-3.1 1.7-3.1 1.7h-.1l.2-1.6h-2.6c-.1 1.2-.4 3-.6 4.3l-2 10.5h2.9l.8-4.2h.1s.6.4 1.7.4c3.4 0 5.6-3.5 5.6-7 0-2-.9-4.1-3-4.1zm-2.8 8.5c-.7 0-1.2-.4-1.2-.4l.5-2.8c.3-1.8 1.3-3 2.4-3 .9 0 1.2.8 1.2 1.6 0 1.9-1.2 4.6-2.9 4.6zM79.6 8c-.9 0-1.7.7-1.7 1.7s.7 1.5 1.5 1.5c1 0 1.7-.6 1.7-1.7 0-.9-.6-1.5-1.5-1.5zM75.9 22.6h2.9l1.9-10.1h-2.9l-1.9 10.1zM88.5 12.5h-2l.1-.5c.2-1 .7-1.9 1.7-1.9.5 0 .9.1.9.1l.6-2.3s-.5-.2-1.4-.2c-.9 0-1.9.3-2.6.9-.9.8-1.3 2-1.5 3.2l-.1.6h-1.4l-.4 2.2h1.4l-1.5 7.9h2.9l1.5-7.9h2l.3-2.1zM95.2 12.5s-1.8 4.6-2.6 7.1h-.1c-.1-.8-.7-7.1-.7-7.1h-3l1.7 9.2c0 .2 0 .3-.1.4-.3.6-.8 1.2-1.4 1.6-.5.4-1 .6-1.5.8l.8 2.5c.6-.1 1.8-.6 2.9-1.7 1.3-1.4 2.6-3.6 3.8-6.6l3.1-6.1h-2.9v-.1z"/>
    </svg>
  );
}

