import Image from 'next/image'
import { motion } from 'framer-motion'

interface ColombiaVerticalIconProps {
  size?: number
  className?: string
}

/**
 * Real Fundación Colombia Vertical brand logo image.
 * Uses the official asset at /public/colombiaverticalbutton.png.
 */
export function ColombiaVerticalIcon({ size = 64, className = '' }: ColombiaVerticalIconProps) {
  return (
    <Image
      src="/colombiaverticalbutton.png"
      alt="Fundación Colombia Vertical"
      width={size}
      height={size}
      priority
      className={`rounded-full ${className}`}
    />
  )
}

interface ColombiaVerticalButtonProps {
  onClick?: () => void
  href?: string
  size?: number
  position?: 'fixed' | 'absolute'
  corner?: 'bottom-right' | 'bottom-left'
  className?: string
}

export function ColombiaVerticalFloatingButton({
  onClick,
  href,
  size = 72,
  position = 'absolute',
  corner = 'bottom-left',
  className = '',
}: ColombiaVerticalButtonProps) {
  const cornerClasses = {
    'bottom-right': 'bottom-6 right-6 sm:bottom-8 sm:right-8',
    'bottom-left': 'bottom-6 left-6 sm:bottom-8 sm:left-8',
  }

  const Element = href ? motion.a : motion.button
  const elementProps: any = href ? { href } : { onClick, type: 'button' }

  return (
    <Element
      {...elementProps}
      aria-label="Colombia Vertical — ver videos"
      title="Conoce Colombia Vertical"
      className={`${position} ${cornerClasses[corner]} z-30 cursor-pointer ${className}`}
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.1, rotate: -5 }}
      whileTap={{ scale: 0.92 }}
    >
      <div className="relative">
        {/* Outer pulse ring */}
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-yellow-400/40 animate-ping"
        />
        {/* Soft glow */}
        <span
          aria-hidden="true"
          className="absolute -inset-2 rounded-full bg-gradient-to-br from-yellow-400/40 to-brand-orange-500/40 blur-xl"
        />
        <ColombiaVerticalIcon size={size} className="relative drop-shadow-2xl" />
      </div>
    </Element>
  )
}
