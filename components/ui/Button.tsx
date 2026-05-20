import { ReactNode, forwardRef, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'gradient'
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl'

interface BaseButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  fullWidth?: boolean
  className?: string
}

type ButtonAsButton = BaseButtonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> & {
    as?: 'button'
  }

type ButtonAsLink = BaseButtonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonProps> & {
    as: 'a'
    href?: string
  }

type ButtonProps = ButtonAsButton | ButtonAsLink

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm min-h-[36px]',
  md: 'px-5 py-2.5 text-base min-h-[44px]',
  lg: 'px-7 py-3.5 text-base min-h-[52px]',
  xl: 'px-9 py-4 text-lg min-h-[60px]',
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: `
    relative overflow-hidden
    bg-gradient-to-br from-brand-orange-500 via-brand-orange-600 to-brand-orange-700
    text-white font-semibold
    shadow-[0_4px_24px_-4px_rgba(234,88,12,0.45),inset_0_1px_0_0_rgba(255,255,255,0.15)]
    border border-brand-orange-400/30
    hover:shadow-[0_8px_40px_-4px_rgba(234,88,12,0.65),inset_0_1px_0_0_rgba(255,255,255,0.25)]
    hover:border-brand-orange-300/50
    active:scale-[0.98]
  `,
  secondary: `
    relative overflow-hidden
    bg-gradient-to-br from-brand-indigo-500 via-brand-indigo-600 to-brand-indigo-700
    text-white font-semibold
    shadow-[0_4px_24px_-4px_rgba(79,70,229,0.45),inset_0_1px_0_0_rgba(255,255,255,0.15)]
    border border-brand-indigo-400/30
    hover:shadow-[0_8px_40px_-4px_rgba(79,70,229,0.65),inset_0_1px_0_0_rgba(255,255,255,0.25)]
    hover:border-brand-indigo-300/50
    active:scale-[0.98]
  `,
  gradient: `
    relative overflow-hidden
    bg-gradient-to-r from-brand-indigo-600 via-purple-600 to-brand-orange-500
    bg-[length:200%_100%] bg-left
    text-white font-semibold
    shadow-[0_4px_24px_-4px_rgba(124,58,237,0.5),inset_0_1px_0_0_rgba(255,255,255,0.2)]
    border border-white/15
    hover:bg-right hover:shadow-[0_8px_40px_-4px_rgba(124,58,237,0.7)]
    transition-[background-position,box-shadow,border-color] duration-700
    active:scale-[0.98]
  `,
  outline: `
    relative overflow-hidden
    bg-white/[0.03] backdrop-blur-md
    text-white font-medium
    border border-white/20
    hover:bg-white/[0.08] hover:border-brand-orange-400/40
    hover:text-brand-orange-300
    active:scale-[0.98]
  `,
  ghost: `
    bg-transparent
    text-white/80 font-medium
    border border-transparent
    hover:bg-white/5 hover:text-white
    active:scale-[0.98]
  `,
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button(props, ref) {
    const {
      variant = 'primary',
      size = 'md',
      children,
      icon,
      iconPosition = 'left',
      fullWidth = false,
      className = '',
      ...rest
    } = props

    const baseClasses = `
      inline-flex items-center justify-center gap-2.5
      rounded-xl
      transition-all duration-300 ease-out
      focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black
      disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
      cursor-pointer
      group
      ${fullWidth ? 'w-full' : ''}
      ${sizeClasses[size]}
      ${variantClasses[variant]}
      ${className}
    `

    const content = (
      <>
        {(variant === 'primary' || variant === 'secondary' || variant === 'gradient') && (
          <span
            aria-hidden="true"
            className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-out"
          />
        )}
        {icon && iconPosition === 'left' && (
          <span className="relative z-10 inline-flex shrink-0 transition-transform duration-300 group-hover:-translate-x-0.5">
            {icon}
          </span>
        )}
        <span className="relative z-10">{children}</span>
        {icon && iconPosition === 'right' && (
          <span className="relative z-10 inline-flex shrink-0 transition-transform duration-300 group-hover:translate-x-0.5">
            {icon}
          </span>
        )}
      </>
    )

    if (props.as === 'a') {
      const { as, ...anchorProps } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a' }
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={baseClasses}
          {...anchorProps}
        >
          {content}
        </a>
      )
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={baseClasses}
        {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {content}
      </button>
    )
  }
)

// Animated CTA Button — for hero/feature placements with framer-motion entrance
interface AnimatedCTAProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: ReactNode
  icon?: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
}

export function AnimatedCTA({
  children,
  icon,
  variant = 'primary',
  size = 'lg',
  href,
  ...motionProps
}: AnimatedCTAProps) {
  const ButtonContent = (
    <Button variant={variant} size={size} icon={icon}>
      {children}
    </Button>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        className="inline-block"
      >
        {ButtonContent}
      </motion.a>
    )
  }

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className="inline-block"
      {...(motionProps as any)}
    >
      {ButtonContent}
    </motion.div>
  )
}
