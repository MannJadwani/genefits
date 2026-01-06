"use client"

import React from "react"
import { motion, type MotionProps } from "motion/react"

const animationProps: MotionProps = {
  initial: { "--x": "100%", scale: 0.8 } as React.CSSProperties,
  animate: { "--x": "-100%", scale: 1 } as React.CSSProperties,
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring",
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  },
}

interface ShinyButtonProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps>,
    MotionProps {
  children: React.ReactNode
  className?: string
  variant?: 'primary' | 'secondary'
}

export const ShinyButton = React.forwardRef<HTMLButtonElement, ShinyButtonProps>(
  ({ children, className = '', variant = 'primary', ...props }, ref) => {
    const variants = {
      primary: {
        bg: 'bg-charcoal',
        text: 'text-cream',
        border: 'border-charcoal',
        shadow: 'hover:shadow-[0_0_30px_rgba(26,26,26,0.3)]',
      },
      secondary: {
        bg: 'bg-cream',
        text: 'text-charcoal',
        border: 'border-charcoal',
        shadow: 'hover:shadow-[0_0_30px_rgba(26,26,26,0.15)]',
      },
    }

    const v = variants[variant]

    return (
      <motion.button
        ref={ref}
        className={`
          relative cursor-pointer rounded-full border-2 px-8 py-3.5
          font-sans font-medium text-base
          backdrop-blur-xl transition-shadow duration-300 ease-in-out
          ${v.bg} ${v.border} ${v.shadow}
          ${className}
        `}
        {...animationProps}
        {...props}
      >
        <span
          className={`
            relative block size-full tracking-wide uppercase text-sm
            ${v.text}
          `}
          style={{
            maskImage:
              "linear-gradient(-75deg, var(--color-gold) calc(var(--x) + 20%), transparent calc(var(--x) + 30%), var(--color-gold) calc(var(--x) + 100%))",
            WebkitMaskImage:
              "linear-gradient(-75deg, var(--color-gold) calc(var(--x) + 20%), transparent calc(var(--x) + 30%), var(--color-gold) calc(var(--x) + 100%))",
          }}
        >
          {children}
        </span>
        <span
          style={{
            mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box exclude, linear-gradient(rgb(0,0,0), rgb(0,0,0))",
            WebkitMask:
              "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box exclude, linear-gradient(rgb(0,0,0), rgb(0,0,0))",
            backgroundImage:
              "linear-gradient(-75deg, var(--color-gold)/10% calc(var(--x)+20%), var(--color-gold)/50% calc(var(--x)+25%), var(--color-gold)/10% calc(var(--x)+100%))",
          }}
          className="absolute inset-0 z-10 block rounded-[inherit] p-px"
        />
      </motion.button>
    )
  }
)

ShinyButton.displayName = "ShinyButton"

