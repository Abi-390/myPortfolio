import { motion } from 'framer-motion'
import { FiCheckCircle } from 'react-icons/fi'
import { certificationsData } from '../data/projects'
import Card from '../components/Card'

/**
 * Certifications Section
 * - Displays professional certifications
 * - Status badges (Active, Lifetime, etc.)
 * - Verify credential links
 */
const Certifications = () => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-500/20 text-green-400'
      case 'Lifetime':
        return 'bg-blue-500/20 text-blue-400'
      default:
        return 'bg-yellow-500/20 text-yellow-400'
    }
  }

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Certifications
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl">
            Verified achievements and professional credentials from industry leaders.
          </p>
        </motion.div>

        {/* Certifications List */}
        <div className="space-y-6">
          {certificationsData.map((cert, index) => (
            <Card
              key={cert.id}
              className="!p-0 overflow-hidden"
              delay={index * 0.1}
              hoverable={false}
            >
              <div className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                {/* Left Content */}
                <div className="flex-1">
                  <div className="flex items-start gap-4">
                    {/* Icon Placeholder */}
                    <motion.div
                      className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.05 }}
                    >
                      <FiCheckCircle className="text-2xl text-accent" />
                    </motion.div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-text-primary mb-2">
                        {cert.title}
                      </h3>

                      {/* Meta Info */}
                      <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary mb-3">
                        <span className="flex items-center gap-2">
                          📌 {cert.issuer}
                        </span>
                        <span className="flex items-center gap-2">
                          📅 {cert.date}
                        </span>
                      </div>

                      {/* Status Badge */}
                      <motion.div
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(cert.status)}`}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="w-2 h-2 rounded-full bg-current" />
                        {cert.status}
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Right - Action Button */}
                <motion.a
                  href={cert.link}
                  className="px-6 py-2.5 rounded-lg bg-accent text-white font-medium hover:bg-accent-dark transition-colors w-full md:w-auto text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Verify Credential
                </motion.a>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <motion.p
          className="text-center text-text-secondary mt-12 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          All certifications are current and verified. Additional credentials available upon request.
        </motion.p>
      </div>
    </section>
  )
}

export default Certifications