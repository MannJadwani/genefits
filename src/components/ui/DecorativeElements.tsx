interface StarProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Star({ className = '', size = 'md' }: StarProps) {
  const sizes = {
    sm: 'w-6 h-6',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
  };

  return (
    <svg
      className={`${sizes[size]} ${className}`}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
  );
}

export function Asterisk({ className = '', size = 'md' }: StarProps) {
  const sizes = {
    sm: 'w-5 h-5',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <svg
      className={`${sizes[size]} ${className}`}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M11 1V8.5L5.5 4.5L4.5 6L10 10H2V12H10L4.5 16L5.5 17.5L11 13.5V23H13V13.5L18.5 17.5L19.5 16L14 12H22V10H14L19.5 6L18.5 4.5L13 8.5V1H11Z" />
    </svg>
  );
}

export function CrossPattern({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {[...Array(6)].map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4"
          viewBox="0 0 16 16"
          fill="currentColor"
        >
          <path d="M6 0H10V6H16V10H10V16H6V10H0V6H6V0Z" />
        </svg>
      ))}
    </div>
  );
}

export function DecorativeArc({
  position,
  className = '',
}: {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
}) {
  const positionStyles = {
    'top-left': 'top-0 left-0 -translate-x-1/2 -translate-y-1/2',
    'top-right': 'top-0 right-0 translate-x-1/2 -translate-y-1/2',
    'bottom-left': 'bottom-0 left-0 -translate-x-1/2 translate-y-1/2',
    'bottom-right': 'bottom-0 right-0 translate-x-1/2 translate-y-1/2',
  };

  return (
    <div
      className={`
        absolute w-[400px] h-[400px] 
        border-2 border-charcoal/[0.06] 
        rounded-full
        pointer-events-none
        ${positionStyles[position]}
        ${className}
      `}
    />
  );
}

export function FloatingDot({ className = '' }: { className?: string }) {
  return (
    <div
      className={`
        w-2 h-2 rounded-full bg-charcoal/20
        animate-pulse
        ${className}
      `}
    />
  );
}

