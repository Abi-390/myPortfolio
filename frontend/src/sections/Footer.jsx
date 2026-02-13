import { motion } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

/**
 * Footer Component
 * - Copyright information
 * - Quick links
 * - Back to top button
 */

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const footerLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ];

  return (
    <footer className="border-t border-secondary py-12 px-4 sm:px-6 lg:px-8 bg-primary/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Left - Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-white font-bold">
                A
              </div>
              <span className="font-display text-xl font-bold">
                AbiCodes
              </span>
            </div>
            <p className="text-text-secondary text-sm">
              Full-Stack Developer building scalable web solutions
            </p>
          </motion.div>

          {/* Center - Quick Links */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-text-secondary hover:text-accent transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right - Back to Top */}
          <motion.div
            className="flex justify-center md:justify-end items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center hover:bg-accent/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Back to top"
            >
              <FiArrowUp className="text-accent" />
            </motion.button>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent mb-8" />

        {/* Bottom */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-secondary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p>
            © {new Date().getFullYear()} Abinash Deka. All rights reserved.
          </p>

          <div className="flex gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
