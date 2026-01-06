import { motion } from 'motion/react';
import { MaterialIcon } from '../ui';

const steps = [
  {
    number: '01',
    icon: 'extension',
    title: 'Install Genefits',
    description: 'Add our Shopify app in minutes. No code changes needed – we integrate seamlessly with your theme.',
    highlight: 'One-click install',
  },
  {
    number: '02',
    icon: 'photo_camera',
    title: 'Shoppers upload a photo',
    description: 'A "Try it on" button appears on product pages. Shoppers upload any full-body photo.',
    highlight: 'Works on mobile & desktop',
  },
  {
    number: '03',
    icon: 'auto_awesome',
    title: 'AI generates the preview',
    description: 'Our AI creates a realistic try-on preview in seconds, showing exactly how the item looks on them.',
    highlight: 'Powered by advanced AI',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-3">How it works</p>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">
            Three simple steps
          </h2>
          <p className="text-lg text-charcoal/60 max-w-xl mx-auto">
            Get virtual try-on running on your store in minutes, not months.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-px bg-charcoal/10 -translate-x-1/2" />
              )}

              {/* Card */}
              <div className="bg-white rounded-2xl p-6 lg:p-8 border border-charcoal/5 shadow-sm hover:shadow-md transition-shadow h-full">
                {/* Number & Icon */}
                <div className="flex items-start justify-between mb-6">
                  <span className="text-5xl font-serif text-charcoal/10">{step.number}</span>
                  <div className="w-12 h-12 rounded-xl bg-charcoal flex items-center justify-center">
                    <MaterialIcon name={step.icon} size={24} className="text-cream" filled />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-charcoal mb-3">{step.title}</h3>
                <p className="text-charcoal/60 mb-4 leading-relaxed">{step.description}</p>

                {/* Highlight tag */}
                <div className="inline-flex items-center gap-1.5 text-xs font-medium text-gold-dark bg-gold/10 px-3 py-1.5 rounded-full">
                  <MaterialIcon name="check_circle" size={14} filled />
                  {step.highlight}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

