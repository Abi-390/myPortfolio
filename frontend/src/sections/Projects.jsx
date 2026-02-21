import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { projectsData } from '../data/projects'
import Card from '../components/Card'

/**
 * Projects Section
 * - Displays projects dynamically from data file
 * - Hover animations and interactions
 * - Links to github and live demos
 */
const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
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
            Selected Projects
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl">
            A collection of works that showcase my ability to build robust applications with modern technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <Card key={project.id} delay={index * 0.1}>
              {/* Project Image */}
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden bg-secondary/50 group text-gray-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Year Badge */}
                <motion.div
                  className="absolute top-4 right-4 bg-accent/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium"
                  whileHover={{ scale: 1.1 }}
                >
                  {project.year}
                </motion.div>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-text-primary">
                  {project.title}
                </h3>

                <p className="text-text-secondary leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-md bg-accent/10 text-accent text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-accent/10">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-accent hover:text-accent-dark transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    <FiGithub size={18} />
                    <span className="text-sm">Code</span>
                  </motion.a>

                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-accent hover:text-accent-dark transition-colors ml-auto"
                    whileHover={{ x: 4 }}
                  >
                    <span className="text-sm">Live Demo</span>
                    <FiExternalLink size={18} />
                  </motion.a>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Projects */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://github.com/Abi-390?tab=repositories"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-dark font-medium group"
            whileHover={{ x: 4 }}
          >
            View Archive
            <motion.span
              className="group-hover:translate-x-1 transition-transform"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects