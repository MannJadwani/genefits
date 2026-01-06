import { motion } from 'motion/react';
import { MaterialIcon } from '../ui';

const features = [
  {
    icon: 'palette',
    title: 'Variant-aware',
    description: 'Try-on works with size and color variants. Shoppers see exactly what they\'re buying.',
    available: true,
  },
  {
    icon: 'bolt',
    title: 'Fast generation',
    description: 'Results in seconds, not minutes. No waiting around for your preview.',
    available: true,
  },
  {
    icon: 'smartphone',
    title: 'Mobile-friendly modal',
    description: 'Beautiful experience on any device. Optimized for touch interactions.',
    available: true,
  },
  {
    icon: 'bar_chart',
    title: 'Analytics dashboard',
    description: 'Track try-on usage, conversion rates, and top-performing products.',
    available: false,
    comingSoon: true,
  },
  {
    icon: 'water_drop',
    title: 'Watermark controls',
    description: 'Optional branded watermarks on generated previews. Your brand, your rules.',
    available: false,
    comingSoon: true,
  },
  {
    icon: 'tune',
    title: 'Customizable UI',
    description: 'Match the try-on button and modal to your store\'s branding.',
    available: true,
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-3">Features</p>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">
            Everything you need
          </h2>
          <p className="text-lg text-charcoal/60 max-w-xl mx-auto">
            Powerful features built for modern e-commerce.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`
                relative p-6 rounded-2xl border transition-all
                ${feature.available 
                  ? 'bg-white border-charcoal/5 hover:border-charcoal/20 hover:shadow-lg' 
                  : 'bg-cream-dark/50 border-charcoal/5'
                }
              `}
            >
              {/* Coming soon badge */}
              {feature.comingSoon && (
                <div className="absolute top-4 right-4 text-[10px] font-medium text-charcoal/50 bg-charcoal/5 px-2 py-1 rounded-full">
                  Coming soon
                </div>
              )}

              {/* Icon */}
              <div className={`
                w-11 h-11 rounded-xl flex items-center justify-center mb-4
                ${feature.available ? 'bg-charcoal' : 'bg-charcoal/20'}
              `}>
                <MaterialIcon 
                  name={feature.icon} 
                  size={22} 
                  className={feature.available ? 'text-cream' : 'text-charcoal/40'} 
                  filled 
                />
              </div>

              {/* Content */}
              <h3 className={`text-lg font-semibold mb-2 ${feature.available ? 'text-charcoal' : 'text-charcoal/50'}`}>
                {feature.title}
              </h3>
              <p className={`text-sm leading-relaxed ${feature.available ? 'text-charcoal/60' : 'text-charcoal/40'}`}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

