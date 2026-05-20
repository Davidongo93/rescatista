import { motion } from 'framer-motion'

interface WhatsAppIconProps {
  size?: number
  className?: string
}

export function WhatsAppIcon({ size = 64, className = '' }: WhatsAppIconProps) {
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
        <linearGradient id="wa-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#25D366" />
          <stop offset="100%" stopColor="#128C7E" />
        </linearGradient>
        <filter id="wa-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
          <feOffset dx="0" dy="2" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.4" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <circle cx="32" cy="32" r="30" fill="url(#wa-gradient)" filter="url(#wa-shadow)" />
      <path
        d="M44.5 19.4C41.2 16.1 36.8 14.3 32.1 14.3C22.5 14.3 14.7 22.1 14.7 31.7C14.7 34.8 15.5 37.8 17 40.4L14.5 49.5L23.9 47C26.4 48.4 29.2 49.1 32.1 49.1C41.7 49.1 49.5 41.3 49.5 31.7C49.5 27 47.7 22.7 44.5 19.4ZM32.1 46.2C29.5 46.2 26.9 45.5 24.6 44.1L24.1 43.8L18.5 45.2L20 39.7L19.7 39.2C18.2 36.8 17.4 34 17.4 31.2C17.4 23.6 23.6 17.4 32.2 17.4C36 17.4 39.5 18.9 42.2 21.6C44.9 24.3 46.4 27.9 46.4 31.7C46.4 39.3 39.7 46.2 32.1 46.2ZM40.1 35.4C39.7 35.2 37.5 34.1 37.1 34C36.7 33.9 36.4 33.8 36.1 34.2C35.8 34.6 35 35.7 34.7 36C34.5 36.3 34.2 36.4 33.8 36.2C33.4 36 31.9 35.5 30.2 34C28.8 32.8 27.9 31.3 27.7 30.9C27.5 30.5 27.7 30.3 27.9 30.1C28.1 29.9 28.3 29.6 28.5 29.4C28.7 29.2 28.8 29 28.9 28.7C29 28.4 29 28.2 28.9 28C28.8 27.8 27.9 25.6 27.5 24.7C27.2 23.9 26.8 24 26.5 24C26.3 24 26 24 25.7 24C25.4 24 24.9 24.1 24.5 24.5C24.1 24.9 23 25.9 23 28.1C23 30.3 24.6 32.4 24.8 32.7C25 33 27.9 37.4 32.3 39.3C33.4 39.8 34.2 40 34.9 40.2C36 40.6 37 40.5 37.8 40.4C38.7 40.3 40.5 39.3 40.9 38.3C41.3 37.3 41.3 36.4 41.2 36.2C41.1 36 40.7 35.9 40.1 35.4Z"
        fill="white"
      />
    </svg>
  )
}

interface WhatsAppFloatingButtonProps {
  href?: string
  size?: number
  className?: string
  position?: 'fixed' | 'absolute'
  corner?: 'bottom-right' | 'bottom-left'
}

export function WhatsAppFloatingButton({
  href = 'https://wa.me/573003485579',
  size = 64,
  className = '',
  position = 'absolute',
  corner = 'bottom-right',
}: WhatsAppFloatingButtonProps) {
  const cornerClasses = {
    'bottom-right': 'bottom-6 right-6 sm:bottom-8 sm:right-8',
    'bottom-left': 'bottom-6 left-6 sm:bottom-8 sm:left-8',
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      title="Contactar por WhatsApp"
      className={`${position} ${cornerClasses[corner]} z-30 ${className}`}
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.8, type: 'spring', stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.1, rotate: [0, -8, 8, -4, 0] }}
      whileTap={{ scale: 0.92 }}
    >
      <div className="relative">
        {/* Outer pulse ring */}
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping"
        />
        {/* Soft glow */}
        <span
          aria-hidden="true"
          className="absolute -inset-2 rounded-full bg-[#25D366]/20 blur-xl"
        />
        <WhatsAppIcon size={size} className="relative drop-shadow-2xl" />
      </div>
    </motion.a>
  )
}
