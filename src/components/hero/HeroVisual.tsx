import { Upload, Sparkles, CheckCircle } from 'lucide-react';
import { ShinyButton } from '../ui';

export function HeroVisual() {
  return (
    <div className="mt-20 flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8">
      {/* Step 1: Product Page */}
      <VisualCard
        title="Product page"
        subtitle="Shopper browsing"
        icon={<ShirtIcon />}
        highlight={false}
      >
        <div className="relative">
          <div className="w-full aspect-[3/4] bg-gradient-to-b from-cream-dark to-cream rounded-xl flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-24 mx-auto mb-3 bg-charcoal/10 rounded-lg flex items-center justify-center">
                <ShirtIcon className="w-12 h-12 text-charcoal/40" />
              </div>
              <p className="text-xs text-charcoal/50">Summer Dress</p>
              <p className="text-sm font-medium text-charcoal">$89.00</p>
            </div>
          </div>
          {/* Try-on button overlay with ShinyButton */}
          <div className="absolute bottom-4 left-4 right-4">
            <ShinyButton 
              variant="primary" 
              className="w-full py-2.5 px-4 text-xs flex items-center justify-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Try it on
            </ShinyButton>
          </div>
        </div>
      </VisualCard>

      {/* Arrow connector */}
      <div className="hidden lg:flex items-center">
        <div className="w-12 h-0.5 bg-charcoal/20" />
        <div className="w-3 h-3 border-r-2 border-t-2 border-charcoal/20 transform rotate-45 -ml-1.5" />
      </div>
      <div className="lg:hidden">
        <div className="w-0.5 h-8 bg-charcoal/20" />
        <div className="w-3 h-3 border-r-2 border-b-2 border-charcoal/20 transform rotate-45 -mt-1.5 mx-auto" />
      </div>

      {/* Step 2: Upload Photo */}
      <VisualCard
        title="Upload photo"
        subtitle="Quick & easy"
        icon={<Upload className="w-5 h-5" />}
        highlight
      >
        <div className="w-full aspect-[3/4] bg-gradient-to-b from-gold/20 to-gold/5 rounded-xl flex items-center justify-center border-2 border-dashed border-gold/40">
          <div className="text-center px-4">
            <div className="w-16 h-16 mx-auto mb-3 bg-gold/20 rounded-full flex items-center justify-center">
              <Upload className="w-8 h-8 text-gold-dark" />
            </div>
            <p className="text-sm font-medium text-charcoal mb-1">Drop photo here</p>
            <p className="text-xs text-charcoal/50">or click to browse</p>
          </div>
        </div>
      </VisualCard>

      {/* Arrow connector */}
      <div className="hidden lg:flex items-center">
        <div className="w-12 h-0.5 bg-charcoal/20" />
        <div className="w-3 h-3 border-r-2 border-t-2 border-charcoal/20 transform rotate-45 -ml-1.5" />
      </div>
      <div className="lg:hidden">
        <div className="w-0.5 h-8 bg-charcoal/20" />
        <div className="w-3 h-3 border-r-2 border-b-2 border-charcoal/20 transform rotate-45 -mt-1.5 mx-auto" />
      </div>

      {/* Step 3: Try-on Result */}
      <VisualCard
        title="Virtual try-on"
        subtitle="AI-generated preview"
        icon={<CheckCircle className="w-5 h-5" />}
        highlight={false}
      >
        <div className="relative w-full aspect-[3/4] bg-gradient-to-b from-cream-dark to-cream rounded-xl overflow-hidden">
          {/* Simulated result */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="w-24 h-32 bg-charcoal/10 rounded-2xl flex items-center justify-center">
                <PersonIcon className="w-16 h-20 text-charcoal/30" />
              </div>
              {/* Overlaid dress effect */}
              <div className="absolute inset-0 flex items-center justify-center opacity-60">
                <div className="w-16 h-20 bg-gold/30 rounded-xl transform translate-y-2" />
              </div>
            </div>
          </div>
          {/* Success badge */}
          <div className="absolute top-3 right-3">
            <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
              <CheckCircle className="w-3 h-3" />
              Generated
            </div>
          </div>
        </div>
      </VisualCard>
    </div>
  );
}

interface VisualCardProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  highlight: boolean;
  children: React.ReactNode;
}

function VisualCard({ title, subtitle, icon, highlight, children }: VisualCardProps) {
  return (
    <div 
      className={`
        relative w-full max-w-[280px] p-4 rounded-2xl
        transition-all duration-300
        ${highlight 
          ? 'bg-charcoal text-cream shadow-xl shadow-charcoal/20' 
          : 'bg-white/60 backdrop-blur-sm border border-charcoal/10 shadow-lg'
        }
      `}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className={`font-medium text-sm ${highlight ? 'text-cream' : 'text-charcoal'}`}>
            {title}
          </h3>
          <p className={`text-xs ${highlight ? 'text-cream/60' : 'text-charcoal/50'}`}>
            {subtitle}
          </p>
        </div>
        <div 
          className={`
            w-8 h-8 rounded-full flex items-center justify-center
            ${highlight ? 'bg-gold text-charcoal' : 'bg-charcoal/5 text-charcoal/60'}
          `}
        >
          {icon}
        </div>
      </div>
      
      {/* Content */}
      {children}
    </div>
  );
}

function ShirtIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3l-4.5 3.75v2.25h3v12h13.5v-12h3V6.75L17.25 3l-3 3h-4.5l-3-3z" />
    </svg>
  );
}

function PersonIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="6" r="4" />
      <path d="M12 12c-4.5 0-8 2.5-8 6v2h16v-2c0-3.5-3.5-6-8-6z" />
    </svg>
  );
}
