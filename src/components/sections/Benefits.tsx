import { motion } from 'motion/react';
import { MaterialIcon } from '../ui';

const benefits = [
  {
    icon: 'trending_up',
    title: 'More confident purchases',
    description: 'Shoppers who see themselves in your clothes are 3x more likely to buy.',
    stat: '3x',
    statLabel: 'conversion lift',
  },
  {
    icon: 'touch_app',
    title: 'Better product engagement',
    description: 'Interactive try-on keeps shoppers on your pages longer, exploring more items.',
    stat: '+40%',
    statLabel: 'time on page',
  },
  {
    icon: 'sentiment_satisfied',
    title: 'Fewer "will this suit me?" drop-offs',
    description: 'Answer the #1 question blocking purchases: how will this actually look on me?',
    stat: '-25%',
    statLabel: 'cart abandonment',
  },
  {
    icon: 'inventory_2',
    title: 'Works across your catalog',
    description: 'Enable try-on for any product—dresses, tops, jackets, and more.',
    stat: '100%',
    statLabel: 'catalog coverage',
  },
];

export function Benefits() {
  return (
    <section className="py-24 bg-charcoal text-cream">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-cream/50 mb-3">Why merchants love us</p>
          <h2 className="font-serif text-4xl md:text-5xl text-cream mb-4">
            Turn browsers into buyers
          </h2>
          <p className="text-lg text-cream/60 max-w-xl mx-auto">
            Virtual try-on removes the guesswork from online shopping.
          </p>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/10 hover:bg-white/10 transition-colors group"
            >
              <div className="flex items-start gap-5">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/30 transition-colors">
                  <MaterialIcon name={benefit.icon} size={24} className="text-gold" filled />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-cream mb-2">{benefit.title}</h3>
                  <p className="text-cream/60 text-sm leading-relaxed mb-4">{benefit.description}</p>
                  
                  {/* Stat */}
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-gold">{benefit.stat}</span>
                    <span className="text-xs text-cream/50">{benefit.statLabel}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

