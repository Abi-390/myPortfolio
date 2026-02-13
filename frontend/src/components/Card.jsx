import { motion } from 'framer-motion'

/**
 * Reusable Card Component
 * Used for projects, certifications, and other card-based content
 */
const Card = ({
  children,
  className = '',
  hoverable = true,
  delay = 0,
  ...props
}) => {
  return (
    <motion.div
      className={`bg-secondary/50 backdrop-blur-sm rounded-xl border border-accent/10 hover:border-accent/30 p-6 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={hoverable ? { y: -8, boxShadow: '0 20px 25px -5px rgba(59, 130, 246, 0.2)' } : {}}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default Card