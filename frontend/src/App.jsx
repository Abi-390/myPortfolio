import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import TechStack from './sections/TechStack'
import Certifications from './sections/Certifications'
import Education from './sections/Education'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

/**
 * Main App Component
 * - Root component that orchestrates all sections
 * - Manages global layout and structure
 * - Combines all sections in logical order
 */
function App() {
  useEffect(() => {
    // Smooth scroll behavior for the entire page
    document.documentElement.style.scrollBehavior = 'smooth'
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  return (
    <div className="w-full min-h-screen  bg-gradient-to-b from-slate-900 via-blue-900 to-slate-950  text-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="w-full">
        {/* Hero Section - First fold, full attention */}
        <Hero />

        {/* About Section - Introduction to expertise */}
        <About />

        {/* Projects Section - Showcase of work */}
        <Projects />

        {/* Tech Stack Section - Technical expertise */}
        <TechStack />

        {/* Certifications Section - Professional credentials */}
        <Certifications />

        {/* Education Section - Academic background */}
        <Education />

        {/* Contact Section - Call to action and contact form */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App