import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MaterialIcon } from '../ui';

const faqs = [
  {
    question: 'Does this work on all Shopify themes?',
    answer: 'Yes! Genefits uses Shopify\'s Theme App Extensions, which means it works seamlessly with any Online Store 2.0 theme. For older themes, we provide simple installation instructions.',
  },
  {
    question: 'Do shoppers need an account to use try-on?',
    answer: 'No account needed. Shoppers can upload a photo and see their try-on preview instantly. No sign-up friction, no barriers to conversion.',
  },
  {
    question: 'Is this live camera AR?',
    answer: 'No, Genefits is photo-based, not live AR. Shoppers upload an existing photo and our AI generates a preview. This approach is more accurate and works better across devices.',
  },
  {
    question: 'How accurate is the try-on preview?',
    answer: 'Our AI is trained to accurately represent fit, drape, and proportions. While it\'s not a perfect 1:1 representation, it gives shoppers a strong sense of how the item will look on them.',
  },
  {
    question: 'When are you launching?',
    answer: 'We\'re launching our pilot program in Q1 2026 with a limited number of stores. Join the waitlist to secure your spot and get early access.',
  },
  {
    question: 'What will pricing look like?',
    answer: 'We\'ll offer tiered pricing based on usage, starting with a free tier for smaller stores. Pilot participants will get special founding-member pricing locked in.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-cream">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-3">FAQ</p>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">
            Common questions
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-white rounded-xl p-5 border border-charcoal/5 hover:border-charcoal/10 transition-colors text-left group"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-medium text-charcoal group-hover:text-charcoal/80 transition-colors">
                    {faq.question}
                  </h3>
                  <div className={`
                    w-8 h-8 rounded-full bg-charcoal/5 flex items-center justify-center flex-shrink-0 
                    transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}
                  `}>
                    <MaterialIcon name="expand_more" size={20} className="text-charcoal/50" />
                  </div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-charcoal/60 mt-4 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12 p-6 bg-charcoal/5 rounded-xl"
        >
          <p className="text-charcoal/70 mb-2">Still have questions?</p>
          <a href="mailto:hello@genefits.com" className="inline-flex items-center gap-2 text-charcoal font-medium hover:text-gold transition-colors">
            <MaterialIcon name="mail" size={18} />
            hello@genefits.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}

