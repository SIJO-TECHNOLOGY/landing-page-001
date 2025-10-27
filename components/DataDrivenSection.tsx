export default function DataDrivenSection() {
  return (
    <section className="py-20 px-6 container mx-auto">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Data-Driven Business Breakthroughs
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Trusted by businesses across industries to boost efficiency and cut costs
          </p>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-900/20 to-purple-900/5 border border-purple-800/30">
            <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              $500K+
            </div>
            <p className="text-gray-300 text-lg">Average annual savings reported by our clients</p>
          </div>
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-900/20 to-purple-900/5 border border-purple-800/30">
            <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              30%
            </div>
            <p className="text-gray-300 text-lg">Faster operations across systems</p>
          </div>
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-900/20 to-purple-900/5 border border-purple-800/30">
            <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              40%
            </div>
            <p className="text-gray-300 text-lg">Reduction in operational inefficiencies</p>
          </div>
        </div>

        {/* Testimonial */}
        <div className="max-w-4xl mx-auto p-12 rounded-2xl bg-gradient-to-br from-purple-900/20 to-purple-900/5 border border-purple-800/30">
          <p className="text-2xl text-white mb-8 italic">
          &ldquo;Working with Acebyte Technology completely changed the way we manage our operations. Their AI-driven platform brought us clarity, efficiency, and transparency. We cut operational costs by 35% and accelerated timelines by nearly a month.&ldquo;
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">JD</span>
            </div>
            <div>
              <p className="text-white font-semibold">John Doe</p>
              <p className="text-gray-400 text-sm">Operations Director</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
