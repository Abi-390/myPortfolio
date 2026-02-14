import { motion } from 'framer-motion'
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiPython,
  SiGo,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiPrisma,
  SiDocker,
 
  SiGithubactions,
  SiFigma,
} from 'react-icons/si'
import { techStackData } from '../data/projects'

/**
 * Tech Stack Section
 * - Organized by categories: Frontend, Backend, Database, DevOps
 * - Icon animations on hover
 * - Responsive grid layout
 */
const TechStack = () => {
  const icons = {
    SiReact,
    SiTypescript,
    SiTailwindcss,
    SiFramer,
    SiNodedotjs,
    SiPython,
    SiGo,
    SiGraphql,
    SiPostgresql,
    SiMongodb,
    SiRedis,
    SiPrisma,
    SiDocker,
    
    SiGithubactions,
    SiFigma,
  }

  const categories = [
    { title: 'Frontend', key: 'frontend', color: 'from-blue-500 to-cyan-500' },
    { title: 'Backend', key: 'backend', color: 'from-purple-500 to-pink-500' },
    { title: 'Database', key: 'database', color: 'from-green-500 to-emerald-500' },
    { title: 'Tools & DevOps', key: 'devops', color: 'from-orange-500 to-red-500' },
  ]

  return (
    <section id="techstack" className="py-20 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-sm font-medium text-accent">CORE COMPETENCIES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Tech Stack & Ecosystem
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across the modern web stack. I prioritize in building scalable, performance-driven applications using industry-leading tools.
          </p>
        </motion.div>

        {/* Tech Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Category Header */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-1 h-8 rounded-full bg-gradient-to-b ${category.color}`} />
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>
              </div>

              {/* Tech Items Grid */}
              <div className="grid grid-cols-2 gap-4">
                {techStackData[category.key].map((tech, index) => {
                  const IconComponent = icons[tech.icon]

                  return (
                    <motion.div
                      key={tech.name}
                      className="group p-6 rounded-lg bg-secondary/50 backdrop-blur-sm border border-accent/10 hover:border-accent/30 transition-all duration-300"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{
                        y: -6,
                        boxShadow: '0 20px 25px -5px rgba(59, 130, 246, 0.2)',
                        borderColor: 'rgba(59, 130, 246, 0.3)',
                      }}
                    >
                      {/* Icon */}
                      <motion.div
                        className="mb-4"
                        whileHover={{
                          scale: 1.2,
                          rotate: 5,
                          color: '#3B82F6',
                        }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        {IconComponent && (
                          <IconComponent className="text-3xl text-text-secondary group-hover:text-accent transition-colors" />
                        )}
                      </motion.div>

                      {/* Tech Name */}
                      <h4 className="font-semibold text-text-primary group-hover:text-accent transition-colors">
                        {tech.name}
                      </h4>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-20 p-8 rounded-xl bg-secondary/50 border border-accent/20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-text-secondary">
            Always learning and exploring new technologies to stay at the forefront of web development.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default TechStack