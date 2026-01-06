import { motion } from 'motion/react';
import { MaterialIcon } from '../ui';

const trustPoints = [
  {
    icon: 'lock',
    title: 'Photos processed securely',
    description: 'End-to-end encryption. Your shoppers\' photos never leave our secure infrastructure.',
  },
  {
    icon: 'visibility_off',
    title: 'No training on shopper photos',
    description: 'By default, we don\'t use shopper photos to train our models. Your customers\' privacy matters.',
  },
  {
    icon: 'schedule',
    title: 'Configurable retention',
    description: 'Choose how long to keep generated previews. Auto-delete after 24 hours, 7 days, or 30 days.',
  },
  {
    icon: 'speed',
    title: 'Zero performance impact',
    description: 'Our lightweight integration won\'t slow down your product pages. Async loading by default.',
  },
];

export function Trust() {
  return (
    <section id="trust" className="py-24 bg-cream-dark" aria-labelledby="trust-heading">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-3">Trust & Privacy</p>
            <h2 id="trust-heading" className="font-serif text-4xl md:text-5xl text-charcoal mb-6">
              Built with privacy first
            </h2>
            <p className="text-lg text-charcoal/60 mb-8 leading-relaxed">
              We understand that asking shoppers to upload their photos is a big ask. 
              That's why we've built Genefits with privacy at its core.
            </p>

            {/* Trust badge */}
            <div className="inline-flex items-center gap-3 bg-white rounded-full px-4 py-2 shadow-sm border border-charcoal/5">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <MaterialIcon name="verified_user" size={18} className="text-green-600" filled />
              </div>
              <div>
                <p className="text-sm font-medium text-charcoal">GDPR & CCPA Compliant</p>
                <p className="text-xs text-charcoal/50">Your data, your control</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Trust points */}
          <div className="space-y-4">
            {trustPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 bg-white rounded-xl p-5 border border-charcoal/5 shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-charcoal/5 flex items-center justify-center flex-shrink-0">
                  <MaterialIcon name={point.icon} size={20} className="text-charcoal/70" />
                </div>
                <div>
                  <h3 className="font-medium text-charcoal mb-1">{point.title}</h3>
                  <p className="text-sm text-charcoal/60 leading-relaxed">{point.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

