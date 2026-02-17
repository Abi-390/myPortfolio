import { motion } from 'framer-motion'
import { FiArrowRight, FiDownload } from 'react-icons/fi'
import Button from '../components/Button'

/**
 * Hero Section
 * - Introduction and call-to-action
 * - Staggered animation on load
 * - Responsive image layout
 */
const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <motion.div className="space-y-6" variants={containerVariants}>
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 w-fit"
              variants={itemVariants}
            >
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-accent">Available for new projects</span>
            </motion.div>

            {/* Heading */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="text-5xl md:text-6xl font-display font-bold text-text-primary">
                Abinash
                <br />
                <span className="gradient-text">Deka</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-lg text-text-secondary max-w-lg leading-relaxed"
              variants={itemVariants}
            >
              Building scalable web solutions with a focus on modern UX and performance. Full-Stack Engineer focusing in high-performance architectures.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-4 py-4"
              variants={itemVariants}
            >
              {[
                { number: '0-1', label: 'Years Exp.' },
                { number: '20+', label: 'Projects' },
                { number: '1', label: 'Clients' },
              ].map((stat, i) => (
                <div key={i} className="text-center md:text-left">
                  <div className="text-2xl md:text-3xl font-display font-bold text-accent">
                    {stat.number}
                  </div>
                  <div className="text-sm text-text-secondary uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              variants={itemVariants}
            >
              <Button
                variant="primary"
                size="lg"
                className="flex items-center justify-center gap-2 group border"
              >
                View My Projects
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="flex items-center justify-center gap-2"
              >
                <FiDownload size={20} />
                Download Resume
              </Button>
            </motion.div>

            {/* Tech Stack Preview */}
            <motion.div
              className="pt-6 border-t border-secondary"
              variants={itemVariants}
            >
              <p className="text-sm text-text-secondary mb-3">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {['React & Node.js', 'TypeScript', 'Tailwind', 'MongoDB'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-secondary/50 text-sm text-text-secondary border border-accent/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            className="relative h-[400px] md:h-[500px]"
            variants={itemVariants}
          >
            <motion.div
              className="absolute inset-0 rounded-2xl overflow-hidden  border-accent/20 bg-gradient-to-br from-accent/10 to-secondary/20"
              whileHover={{ boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)' }}
            >
              {/* Placeholder for profile image */}
             {/* Profile Image */}
<div className="w-full h-full flex items-center justify-center bg-transparent">
  <div className="relative">
    
    {/* Glow Layer */}
    <div className="absolute inset-0 rounded-2xl bg-accent/20 blur-2xl opacity-70"></div>

    {/* Image */}
   <img
  src="me.png"
  alt="Abinash Deka"
  className="max-h-[500px] object-contain
             drop-shadow-[0_0_15px_#3b82f6]"
/>


  </div>
</div>


              {/* Floating Card - Tech Stack */}
              <motion.div
                className="absolute top-6 z-20 right-6 bg-secondary/90 backdrop-blur-md rounded-lg p-4 border border-accent/30 shadow-xl max-w-xs"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="text-xs text-accent font-semibold uppercase tracking-wider mb-2">
                  Stack Focus
                </div>
                <p className="text-sm text-text-primary font-medium">
                  React & Node.js
                </p>
              </motion.div>
            </motion.div>

            {/* Animated gradient orbs (background effect) */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-secondary/20 rounded-full blur-3xl" />
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="flex justify-center mt-20"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-center">
            <p className="text-text-secondary text-sm uppercase tracking-widest mb-3">
              Scroll
            </p>
            <div className="w-6 h-10 border border-accent rounded-full flex items-center justify-center">
              <motion.div
                className="w-1 h-3 bg-accent rounded-full"
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero