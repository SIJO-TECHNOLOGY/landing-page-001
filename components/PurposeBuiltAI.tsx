export default function PurposeBuiltAI() {
  const features = [
    {
      title: 'Purpose-built for your business',
      description: 'Custom AI models designed specifically for your industry and use cases',
      icon: '🎯',
    },
    {
      title: 'Proactive Problem Solving',
      description: 'Predict issues before they happen and take corrective action automatically',
      icon: '🚀',
    },
    {
      title: 'Seamless system integration',
      description: 'Works with your existing tools and workflows without disruption',
      icon: '🔗',
    },
    {
      title: 'Market intelligence',
      description: 'Real-time insights and trends to keep you ahead of the competition',
      icon: '📊',
    },
  ]

  return (
    <section className="pt-12 pb-20 px-6 container mx-auto">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Unlock the power of <span className="text-purple-400">purpose-built AI</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Generic AI won&apos;t solve your specific business problems. Our purpose-built models are trained to predict problems, automate workflows, and optimize your operations.
          </p>
          <button className="bg-primary-purple hover:bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center gap-2 transition-all">
            Discover my AI readiness
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/20 to-purple-900/5 border border-purple-800/30 hover:border-purple-600/50 transition-all"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

