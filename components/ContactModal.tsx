'use client'

import { useEffect } from 'react'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fadeIn" />
      
      {/* Modal */}
      <div 
        className="relative w-full max-w-2xl my-8 bg-gradient-to-br from-primary-dark via-purple-900/50 to-primary-darker rounded-2xl border border-purple-800/50 shadow-2xl overflow-hidden animate-slideUp max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 pointer-events-none" />
        
        {/* Header */}
        <div className="relative px-4 md:px-8 py-4 md:py-6 border-b border-purple-800/50 bg-gradient-to-r from-purple-900/30 to-transparent flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg md:text-xl">A</span>
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white">Get in Touch</h2>
                <p className="text-xs md:text-sm text-gray-400">Let&apos;s discuss your project</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-lg bg-purple-900/30 hover:bg-purple-800/50 border border-purple-800/50 transition-all hover:scale-110"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto flex-1 px-4 md:px-8 py-4 md:py-8 space-y-6">
          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Email */}
            <div className="group p-4 md:p-6 rounded-xl bg-gradient-to-br from-purple-900/30 to-purple-900/10 border border-purple-800/40 hover:border-purple-600/60 transition-all hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm text-gray-400 mb-2">Email</h3>
                  <a 
                    href="mailto:acebyte.technology@gmail.com" 
                    className="text-white font-semibold hover:text-purple-400 transition-colors break-all"
                  >
                    acebyte.technology@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="group p-4 md:p-6 rounded-xl bg-gradient-to-br from-purple-900/30 to-purple-900/10 border border-purple-800/40 hover:border-purple-600/60 transition-all hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm text-gray-400 mb-2">Phone</h3>
                  <a 
                    href="tel:+33664069734" 
                    className="text-white font-semibold hover:text-purple-400 transition-colors"
                  >
                    +33 6 64 06 97 34
                  </a>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="group p-4 md:p-6 rounded-xl bg-gradient-to-br from-purple-900/30 to-purple-900/10 border border-purple-800/40 hover:border-purple-600/60 transition-all hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm text-gray-400 mb-2">Office</h3>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=77+Rue+Henri+Farman,+75015+Issy-les-Moulineaux,+France" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-semibold hover:text-purple-400 transition-colors"
                  >
                    77 Rue Henri Farman<br />
                    75015 Issy-les-Moulineaux<br />
                    France
                  </a>
                </div>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="group p-4 md:p-6 rounded-xl bg-gradient-to-br from-purple-900/30 to-purple-900/10 border border-purple-800/40 hover:border-purple-600/60 transition-all hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm text-gray-400 mb-2">LinkedIn</h3>
                  <a 
                    href="https://linkedin.com/in/austin-cezhang" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-semibold hover:text-purple-400 transition-colors break-all"
                  >
                    linkedin.com/in/austin-cezhang
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Action Button - Sticky Footer */}
        <div className="px-4 md:px-8 py-4 border-t border-purple-800/50 bg-gradient-to-r from-purple-900/30 to-transparent flex-shrink-0">
          <button className="w-full bg-primary-purple hover:bg-purple-600 text-white px-4 md:px-6 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2">
            Schedule a Free Consultation
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

