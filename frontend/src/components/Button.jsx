import { motion } from 'framer-motion'

/**
 * Reusable Button Component
 * Supports variants: primary, secondary, outline
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled = false,
  type = 'button',
  ...props
}) => {
  const baseStyles = 'font-medium rounded-lg transition-all duration-300 font-medium'

  const variants = {
    primary: 'bg-accent hover:bg-accent-dark text-white shadow-lg hover:shadow-xl hover:shadow-accent/50',
    secondary: 'bg-secondary hover:bg-secondary/80 text-text-primary border border-accent/20',
    outline: 'border border-accent text-accent hover:bg-accent/10',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3.5 text-lg',
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className} disabled:opacity-50 disabled:cursor-not-allowed`}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button