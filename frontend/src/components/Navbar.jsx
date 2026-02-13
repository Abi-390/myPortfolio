import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Tech Stack", href: "#techstack" },
    { label: "Academic", href: "#academic" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary/95 backdrop-blur-md border-b border-secondary"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2 font-display text-2xl font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-gray-900 font-bold md:hidden">
              A
            </div>
            <span className="hidden sm:inline text-gray-900">AbiCodes</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Desktop Contact Button */}
          <motion.a
            href="#contact"
            className="hidden sm:inline-block px-6 py-2 bg-accent hover:bg-accent-dark text-white rounded-lg font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-text-primary"
            whileTap={{ scale: 0.95 }}
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className="md:hidden overflow-hidden"
          initial={{ height: 0 }}
          animate={{ height: mobileMenuOpen ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-text-secondary hover:text-text-primary hover:bg-secondary"
              >
                {item.label}
              </button>
            ))}

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full px-3 py-2 rounded-md text-base font-medium bg-accent text-white hover:bg-accent-dark"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
