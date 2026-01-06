interface MaterialIconProps {
  name: string;
  className?: string;
  filled?: boolean;
  size?: number;
}

export function MaterialIcon({ 
  name, 
  className = '', 
  filled = false,
  size = 24 
}: MaterialIconProps) {
  return (
    <span 
      className={`material-symbols-rounded ${className}`}
      style={{ 
        fontSize: size,
        fontVariationSettings: filled ? "'FILL' 1" : "'FILL' 0"
      }}
    >
      {name}
    </span>
  );
}

