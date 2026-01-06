import { Star, CrossPattern, DecorativeArc, InteractiveHoverButton, DotPattern } from '../ui';
import { TrustBadges } from './TrustBadges';
import { ProductMockup } from './ProductMockup';

export function Hero() {
  return (
    <section className="relative min-h-screen lg:h-screen bg-cream overflow-hidden flex items-center py-20 lg:py-0">
      {/* Dot Pattern Background */}
      <DotPattern 
        width={24} 
        height={24} 
        cr={1.2}
        className="text-charcoal/[0.07] [mask-image:radial-gradient(ellipse_at_center,white_20%,transparent_70%)]"
      />

      {/* Decorative background elements */}
      <DecorativeArc position="top-right" className="w-[600px] h-[600px]" />
      <DecorativeArc position="bottom-left" className="w-[500px] h-[500px]" />
      
      {/* Secondary decorative circles */}
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] border border-charcoal/[0.04] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/3 w-[200px] h-[200px] border border-charcoal/[0.03] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-16 lg:pt-20">
        {/* Top decorative star */}
        <Star 
          size="lg" 
          className="text-charcoal absolute top-8 left-8 md:left-16 animate-[pulse-soft_3s_ease-in-out_infinite]" 
        />

        {/* Main content - Two column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl leading-[1.1] tracking-tight text-charcoal mb-6">
              Try on clothes
              <span className="inline-flex items-center mx-2 sm:mx-3 align-middle">
                <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-charcoal rounded-full transition-transform hover:scale-105">
                  <svg 
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-7 lg:h-7 text-cream" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </span>
              on the product page.
              <br />
              <span className="italic">In seconds.</span>
            </h1>

            {/* Subheadline */}
            <p className="font-sans text-lg md:text-xl text-charcoal/70 mb-8 leading-relaxed">
              Genefits adds a virtual try-on button to every product page so shoppers 
              can upload a photo and preview the fit before they buy.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-8">
              <InteractiveHoverButton variant="primary" icon="arrow-right" href="#waitlist">
                Join the waitlist
              </InteractiveHoverButton>
              <InteractiveHoverButton variant="secondary" icon="arrow-up-right" href="#waitlist">
                Request a demo
              </InteractiveHoverButton>
            </div>

            {/* Micro-trust badges */}
            <div className="lg:justify-start">
              <TrustBadges />
            </div>

            {/* Stats section */}
            <div className="mt-10 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-6 sm:gap-10">
              <div className="text-center lg:text-left">
                <p className="text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-1">Early access</p>
                <p className="font-sans text-2xl font-semibold text-charcoal">500+</p>
                <p className="text-sm text-charcoal/60">Waitlist signups</p>
              </div>
              
              <div className="hidden sm:block w-px h-16 bg-charcoal/10" />
              
              <div className="text-center lg:text-left">
                <p className="text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-1">Coming soon</p>
                <p className="font-sans text-2xl font-semibold text-charcoal">Pilot</p>
                <p className="text-sm text-charcoal/60">Stores launching</p>
              </div>
            </div>
          </div>

          {/* Right Column - Product Visual */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <ProductMockup />
          </div>
        </div>

        {/* Cross pattern decoration */}
        <CrossPattern className="absolute right-8 md:right-16 bottom-16 text-charcoal/80" />

        {/* Decorative stars */}
        <Star 
          size="sm" 
          className="text-charcoal/60 absolute bottom-24 left-12 animate-[float_6s_ease-in-out_infinite]" 
        />
        <Star 
          size="md" 
          className="text-charcoal/40 absolute top-10 right-8 " 
        />
      </div>
    </section>
  );
}
