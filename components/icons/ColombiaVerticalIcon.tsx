import { motion } from 'framer-motion'

interface ColombiaVerticalIconProps {
  size?: number
  className?: string
}

/**
 * Stylized SVG mark for Fundación Colombia Vertical.
 * Represents a vertical climbing rope ascending past a tree silhouette —
 * the core symbol of arborismo + rope ascension work.
 * Uses the brand's indigo→orange palette, no white background.
 */
export function ColombiaVerticalIcon({ size = 64, className = '' }: ColombiaVerticalIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="cv-bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4F46E5" />
          <stop offset="60%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#EA580C" />
        </linearGradient>
        <linearGradient id="cv-tree" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#FDBA74" />
          <stop offset="100%" stopColor="#FB923C" />
        </linearGradient>
        <linearGradient id="cv-rope" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#FFEDD5" stopOpacity="0.85" />
        </linearGradient>
        <filter id="cv-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" />
          <feOffset dx="0" dy="2" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.5" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background circle with brand gradient */}
      <circle cx="32" cy="32" r="30" fill="url(#cv-bg-gradient)" filter="url(#cv-shadow)" />

      {/* Inner subtle highlight */}
      <circle cx="32" cy="32" r="28" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />

      {/* Tree silhouette (left side) - stylized canopy */}
      <g transform="translate(0, 2)">
        {/* Tree trunk */}
        <path
          d="M22 50 L22 38 L20 38 L20 30 L24 30 L24 50 Z"
          fill="url(#cv-tree)"
          opacity="0.95"
        />
        {/* Tree canopy - layered triangles */}
        <path
          d="M22 14 L14 26 L18 26 L11 36 L17 36 L10 46 L34 46 L27 36 L33 36 L26 26 L30 26 Z"
          fill="url(#cv-tree)"
        />
      </g>

      {/* Vertical climbing rope (right side) */}
      <g transform="translate(0, 0)">
        <path
          d="M42 10 Q44 18, 42 26 Q40 34, 42 42 Q44 50, 42 56"
          stroke="url(#cv-rope)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Rope knot details */}
        <circle cx="42" cy="22" r="2" fill="url(#cv-rope)" />
        <circle cx="42" cy="38" r="2" fill="url(#cv-rope)" />
        <circle cx="42" cy="52" r="2" fill="url(#cv-rope)" />
      </g>

      {/* Carabiner at top (small accent) */}
      <path
        d="M40 8 Q42 6, 44 8 L44 12 Q42 14, 40 12 Z"
        fill="none"
        stroke="rgba(255,255,255,0.9)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Small "CV" mark or accent dot at bottom */}
      <circle cx="32" cy="56" r="1.5" fill="rgba(255,255,255,0.7)" />
    </svg>
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
  size = 64,
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
          className="absolute inset-0 rounded-full bg-brand-orange-500/30 animate-ping"
        />
        {/* Soft glow */}
        <span
          aria-hidden="true"
          className="absolute -inset-2 rounded-full bg-gradient-to-br from-brand-indigo-500/30 to-brand-orange-500/30 blur-xl"
        />
        <ColombiaVerticalIcon size={size} className="relative drop-shadow-2xl" />
      </div>
    </Element>
  )
}
