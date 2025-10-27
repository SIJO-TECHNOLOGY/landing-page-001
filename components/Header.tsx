'use client'

import { useState } from 'react'
import ContactModal from './ContactModal'

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-primary-dark/80 backdrop-blur-lg border-b border-purple-900/20">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">A</span>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Acebyte Technology
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-gray-300 hover:text-white transition-colors">
            Services
          </a>
          <a href="#learn" className="text-gray-300 hover:text-white transition-colors">
            Learn
          </a>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-primary-purple hover:bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            Get in touch
          </button>
        </nav>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-purple-900/30 transition-all relative z-50"
          aria-label="Menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center gap-1">
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden border-t border-purple-900/20 bg-primary-dark/95 overflow-hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="container mx-auto px-6 py-4 space-y-4">
          <a 
            href="#services" 
            className="block text-gray-300 hover:text-white transition-all transform hover:translate-x-2 py-2" 
            onClick={() => setIsMobileMenuOpen(false)}
            style={{ animationDelay: '50ms' }}
          >
            Services
          </a>
          <a 
            href="#learn" 
            className="block text-gray-300 hover:text-white transition-all transform hover:translate-x-2 py-2" 
            onClick={() => setIsMobileMenuOpen(false)}
            style={{ animationDelay: '100ms' }}
          >
            Learn
          </a>
          <button 
            onClick={() => {
              setIsModalOpen(true)
              setIsMobileMenuOpen(false)
            }}
            className="w-full bg-primary-purple hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/50"
            style={{ animationDelay: '150ms' }}
          >
            Get in touch
          </button>
        </div>
      </div>
    </header>

    <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

