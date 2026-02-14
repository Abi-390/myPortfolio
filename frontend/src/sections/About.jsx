import { motion } from 'framer-motion'
import { FiCode, FiLayout, FiZap } from 'react-icons/fi'

/**
 * About Section
 * - Introduction and expertise
 * - Three key competencies with icons
 * - Animated text reveal
 */
const About = () => {
  const expertiseAreas = [
    {
      icon: FiCode,
      title: 'Full-Stack Development',
      description: 'Experience in building multiple end-to-end web applications with modern frameworks and clean architecture patterns.'
    },
    {
      icon: FiLayout,
      title: 'UI/UX Design',
      description: 'Focus on creating intuitive interfaces with exceptional user experiences and accessibility standards.'
    },
    {
      icon: FiZap,
      title: 'Performance',
      description: 'Optimizing applications for speed and scalability, ensuring sub-second load times and smooth interactions.'
    }
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary to-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Crafting Digital
            <span className="gradient-text"> Experiences</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            I'm a full-stack developer focusing on building high-performance web applications with modern technologies and exceptional design.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              className="group p-8 rounded-xl bg-secondary/50 backdrop-blur-sm border border-accent/10 hover:border-accent/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(59, 130, 246, 0.2)' }}
            >
              <motion.div
                className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <area.icon className="text-accent text-xl" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3">{area.title}</h3>
              <p className="text-text-secondary leading-relaxed">{area.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Experience & Background */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="space-y-6">
            <h3 className="text-3xl font-display font-bold">
              Passionate About Building
            </h3>
            <p className="text-text-secondary leading-relaxed">
              With a deep passion & love software development, I've dedicated 3+ years learning variouse aspects of software development which includes turning complex problems into intuitive digital solutions, Mobile first apporach, User & Server side optimization etc. I believe that good code is as important as good design.
            </p>
            <p className="text-text-secondary leading-relaxed">
              My approach combines clean architecture with exceptional user interface design, ensuring that every project is not only functional but also delightful to use.
            </p>

            {/* Skills List */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {['React.js', 'TypeScript', 'Node.js', 'DevOps', 'AWS', 'Database Design'].map((skill) => (
                <motion.div
                  key={skill}
                  className="flex items-center gap-2"
                  whileHover={{ x: 4 }}
                >
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span className="text-text-secondary">{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image Placeholder */}
          <motion.div
            className="relative h-96 rounded-xl overflow-hidden border border-accent/20"
            whileHover={{ boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)' }}
          >
            <div className="w-full h-full bg-gradient-to-br from-accent/5 to-secondary/50 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🚀</div>
                <p className="text-text-secondary">Featured Work</p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-accent/20 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About