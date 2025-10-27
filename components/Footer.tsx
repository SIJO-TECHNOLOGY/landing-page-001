export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-purple-900/30 relative overflow-hidden">
      {/* Background Logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-9xl font-bold text-purple-900/10 blur-sm">Acebyte Technology</span>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Side */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Acebyte Technology
              </span>
            </div>
            <p className="text-gray-400 text-sm">Acebyte Technology Inc. 77 Rue Henri Farman, 75015 Issy-les-Moulineaux, France</p>
            <p className="text-gray-500 text-sm">Copyright © 2023. All rights reserved.</p>
          </div>

          {/* Right Side */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Cookie Policy
              </a>
            </div>
            <button className="bg-primary-purple hover:bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
              Book a free consultation
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

