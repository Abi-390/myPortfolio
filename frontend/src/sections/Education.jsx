import { motion } from 'framer-motion'
import { educationData } from '../data/projects'

/**
 * Education Section
 * - Animated vertical timeline
 * - Scroll reveal animations
 * - Educational background display
 */
const Education = () => {
  return (
    <section id="academic" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/30 to-primary">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Academic Journey
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent to-accent/30 md:left-1/2 md:transform md:-translate-x-1/2" />

          {/* Education Items */}
          <div className="space-y-12">
            {educationData.map((edu, index) => {
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={edu.id}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Desktop: Alternate left/right */}
                  {isEven ? (
                    <>
                      {/* Left Content */}
                      <div className="md:text-right md:pr-12">
                        <EducationCard edu={edu} />
                      </div>

                      {/* Timeline Dot */}
                      <div className="relative hidden md:block">
                        <motion.div
                          className="absolute left-0 md:left-1/2 top-8 w-4 h-4 rounded-full bg-accent border-4 border-primary transform md:-translate-x-1/2 -translate-x-1/2"
                          whileInView={{ scale: [0.8, 1.2, 1] }}
                          transition={{ duration: 0.4 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Timeline Dot */}
                      <div className="relative hidden md:block">
                        <motion.div
                          className="absolute right-0 md:left-1/2 top-8 w-4 h-4 rounded-full bg-accent border-4 border-primary transform md:-translate-x-1/2 translate-x-1/2"
                          whileInView={{ scale: [0.8, 1.2, 1] }}
                          transition={{ duration: 0.4 }}
                          viewport={{ once: true }}
                        />
                      </div>

                      {/* Right Content */}
                      <div className="md:text-left md:pl-12">
                        <EducationCard edu={edu} />
                      </div>
                    </>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * Individual Education Card Component
 */
const EducationCard = ({ edu }) => (
  <motion.div
    className="p-6 rounded-lg bg-secondary/50 backdrop-blur-sm border border-accent/10 hover:border-accent/30 transition-all duration-300 group"
    whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(59, 130, 246, 0.2)' }}
  >
    {/* Year/Period */}
    <motion.div
      className="text-sm font-semibold text-accent uppercase tracking-wider mb-2"
      whileHover={{ scale: 1.05 }}
    >
      {edu.year}
    </motion.div>

    {/* Degree */}
    <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">
      {edu.degree}
    </h3>

    {/* Institution */}
    <p className="text-text-secondary mb-3">
      {edu.institution}
    </p>

    {/* Additional Info */}
    <div className="space-y-2">
      {edu.stream && (
        <p className="text-sm text-text-secondary italic">
          Stream: {edu.stream}
        </p>
      )}
      {edu.gpa && (
        <p className="text-sm text-accent font-medium">
          CGPA: {edu.gpa}
        </p>
      )}
      {edu.percentage && (
        <p className="text-sm text-accent font-medium">
          Percentage: {edu.percentage}
        </p>
      )}
    </div>
  </motion.div>
)

export default Education