import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: 'arrow-right' | 'arrow-up-right' | 'none';
  onClick?: () => void;
  className?: string;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon = 'arrow-right',
  onClick,
  className = '',
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center gap-2
    font-sans font-medium
    rounded-full
    transition-all duration-300 ease-out
    cursor-pointer
    border-2
  `;

  const variants = {
    primary: `
      bg-charcoal text-cream border-charcoal
      hover:bg-charcoal-light hover:border-charcoal-light
      hover:shadow-xl hover:shadow-charcoal/25
      hover:-translate-y-0.5
      active:scale-[0.98] active:translate-y-0
    `,
    secondary: `
      bg-cream text-charcoal border-charcoal
      hover:bg-charcoal hover:text-cream
      hover:shadow-xl hover:shadow-charcoal/15
      hover:-translate-y-0.5
      active:scale-[0.98] active:translate-y-0
    `,
    outline: `
      bg-transparent text-charcoal border-charcoal/30
      hover:border-charcoal hover:bg-charcoal/5
      hover:-translate-y-0.5
      active:scale-[0.98] active:translate-y-0
    `,
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const iconSize = {
    sm: 14,
    md: 16,
    lg: 18,
  };

  const IconComponent = icon === 'arrow-up-right' ? ArrowUpRight : ArrowRight;

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
      {icon !== 'none' && (
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          <IconComponent size={iconSize[size]} strokeWidth={2.5} />
        </span>
      )}
    </button>
  );
}

