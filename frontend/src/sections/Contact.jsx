import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiMapPin, FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi'
import Button from '../components/Button'

/**
 * Contact Section
 * - Contact form with validation
 * - Social media links
 * - Contact information
 */
const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  // Basic form validation
  const validateForm = () => {
    const newErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      // Here you would typically send the form data to a server
      console.log('Form submitted:', formData)
      setSubmitted(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ fullName: '', email: '', message: '' })
        setSubmitted(false)
      }, 3000)
    }
  }

  const socialLinks = [
    { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FiGithub, href: 'https://github.com', label: 'GitHub' },
    { icon: FiTwitter, href: 'https://twitter.com', label: 'Twitter' },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
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
            Let's Connect
          </h2>
          <p className="text-lg text-text-secondary">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name Input */}
              <motion.div whileHover={{ scale: 1.02 }}>
                <label className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={`w-full px-4 py-3 rounded-lg bg-secondary/50 border-2 text-text-primary placeholder-text-secondary/50 transition-colors focus:outline-none ${
                    errors.fullName
                      ? 'border-red-500/50 focus:border-red-500'
                      : 'border-accent/20 focus:border-accent/50'
                  }`}
                />
                {errors.fullName && (
                  <p className="text-red-400 text-sm mt-1">{errors.fullName}</p>
                )}
              </motion.div>

              {/* Email Input */}
              <motion.div whileHover={{ scale: 1.02 }}>
                <label className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={`w-full px-4 py-3 rounded-lg bg-secondary/50 border-2 text-text-primary placeholder-text-secondary/50 transition-colors focus:outline-none ${
                    errors.email
                      ? 'border-red-500/50 focus:border-red-500'
                      : 'border-accent/20 focus:border-accent/50'
                  }`}
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </motion.div>

              {/* Message Textarea */}
              <motion.div whileHover={{ scale: 1.02 }}>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows="5"
                  className={`w-full px-4 py-3 rounded-lg bg-secondary/50 border-2 text-text-primary placeholder-text-secondary/50 transition-colors focus:outline-none resize-none ${
                    errors.message
                      ? 'border-red-500/50 focus:border-red-500'
                      : 'border-accent/20 focus:border-accent/50'
                  }`}
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                )}
              </motion.div>

              {/* Submit Button */}
              <motion.div whileHover={{ scale: 1.02 }}>
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={submitted}
                >
                  {submitted ? 'Message Sent! ✓' : 'Send Message'}
                </Button>
              </motion.div>

              {submitted && (
                <motion.p
                  className="text-green-400 text-sm text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Thank you! I'll get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Right - Contact Info & Social */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              {/* Email */}
              <motion.a
                href="mailto:hello@developer.me"
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors group mb-4"
                whileHover={{ x: 4 }}
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <FiMail className="text-xl text-accent" />
                </div>
                <div>
                  <p className="text-sm text-text-secondary">Email</p>
                  <p className="font-medium text-text-primary">hello@developer.me</p>
                </div>
              </motion.a>

              {/* Location */}
              <motion.div
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors group"
                whileHover={{ x: 4 }}
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <FiMapPin className="text-xl text-accent" />
                </div>
                <div>
                  <p className="text-sm text-text-secondary">Location</p>
                  <p className="font-medium text-text-primary">San Francisco, California</p>
                </div>
              </motion.div>
            </div>

            {/* Divider */}
            <div className="w-12 h-1 bg-gradient-to-r from-accent to-accent/30 rounded-full" />

            {/* Social Networks */}
            <div>
              <h3 className="text-xl font-bold mb-4">Social Networks</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-secondary/50 border border-accent/20 flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/50 transition-all duration-300"
                    whileHover={{
                      scale: 1.1,
                      boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
                    }}
                    whileTap={{ scale: 0.95 }}
                    title={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="p-6 rounded-lg bg-accent/5 border border-accent/20">
              <p className="text-sm text-text-secondary">
                I'm always interested in hearing about new projects and opportunities. Feel free to reach out if you have any questions or just want to connect!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact