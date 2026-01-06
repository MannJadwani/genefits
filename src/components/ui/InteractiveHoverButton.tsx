import { ArrowRight, ArrowUpRight } from "lucide-react"

interface InteractiveHoverButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  icon?: 'arrow-right' | 'arrow-up-right'
  href?: string
  className?: string
  onClick?: () => void
}

export function InteractiveHoverButton({
  children,
  className = '',
  variant = 'primary',
  icon = 'arrow-right',
  href,
  onClick,
}: InteractiveHoverButtonProps) {
  const IconComponent = icon === 'arrow-up-right' ? ArrowUpRight : ArrowRight
  
  const variants = {
    primary: {
      base: 'border-charcoal bg-charcoal',
      dot: 'bg-cream',
      text: 'text-cream',
      hoverText: 'text-charcoal',
    },
    secondary: {
      base: 'border-charcoal bg-cream',
      dot: 'bg-charcoal',
      text: 'text-charcoal',
      hoverText: 'text-cream',
    },
  }

  const v = variants[variant]

  const sharedClasses = `
    group relative w-auto cursor-pointer overflow-hidden 
    rounded-full border-2 py-3 px-6 
    font-sans font-medium text-base
    transition-all duration-300
    hover:shadow-xl hover:shadow-charcoal/15 hover:-translate-y-0.5
    active:scale-[0.98] active:translate-y-0
    ${v.base}
    ${className}
  `

  const content = (
    <>
      <div className="flex items-center gap-3">
        <div 
          className={`
            h-2.5 w-2.5 rounded-full 
            transition-all duration-300 ease-out
            group-hover:scale-[100]
            ${v.dot}
          `}
        />
        <span 
          className={`
            inline-block transition-all duration-300 
            group-hover:translate-x-12 group-hover:opacity-0
            ${v.text}
          `}
        >
          {children}
        </span>
      </div>
      <div 
        className={`
          absolute top-0 z-10 flex h-full w-full 
          translate-x-12 items-center justify-center gap-2 
          opacity-0 transition-all duration-300 
          group-hover:-translate-x-1 group-hover:opacity-100
          ${v.hoverText}
        `}
      >
        <span>{children}</span>
        <IconComponent className="w-5 h-5" />
      </div>
    </>
  )

  if (href) {
    return (
      <a href={href} className={sharedClasses} onClick={onClick}>
        {content}
      </a>
    )
  }

  return (
    <button className={sharedClasses} onClick={onClick}>
      {content}
    </button>
  )
}
