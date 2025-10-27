import FeatureBadge from './FeatureBadge'

const features = [
  {
    name: 'AI Diagnostics',
    shortName: 'PinPoint',
    description: 'Predictive analytics and root-cause detection',
    tooltip: 'Pinpoint performance gaps before they become downtime.',
  },
  {
    name: 'Observability Core',
    shortName: 'Volume',
    description: 'Real-time insight and scaling foundation',
    tooltip: 'Know everything that happens, across every layer.',
  },
  {
    name: 'Autonomous Recovery',
    shortName: 'U-Turn',
    description: 'Intelligent rollback and resilience engine',
    tooltip: 'Systems that heal themselves before you notice the issue.',
  },
  {
    name: 'Unified Data Layer',
    shortName: 'Dune',
    description: 'Adaptive, self-organizing data infrastructure',
    tooltip: 'Transform fragmented data into one adaptive landscape.',
  },
]

export default function AIResults() {
  const solutions = [
    {
      title: 'Business Operations',
      description: 'Streamline workflows, reduce manual tasks, and boost team productivity with intelligent automation',
      icon: '⚙️',
    },
    {
      title: 'Customer Experience',
      description: 'Deliver exceptional customer experiences with AI-powered insights and personalization',
      icon: '🎯',
    },
    {
      title: 'Data & Analytics',
      description: 'Turn your data into actionable insights with advanced AI analytics and reporting',
      icon: '📈',
    },
  ]

  return (
    <section className="py-20 px-6 container mx-auto">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI that delivers real business results
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Purpose-built AI models for predicting issues, automating tasks, and eliminating manual work
          </p>
          <button className="bg-primary-purple hover:bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center gap-2 transition-all">
            Discover my AI readiness
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>

        {/* Feature Navigation */}
        <div className="flex items-center justify-center gap-6 flex-wrap mb-16">
          {features.map((feature, index) => (
            <FeatureBadge 
              key={index} 
              name={feature.name} 
              shortName={feature.shortName}
              description={feature.description}
              tooltip={feature.tooltip}
            />
          ))}
        </div>

        {/* Solution Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/20 to-purple-900/5 border border-purple-800/30 hover:border-purple-600/50 transition-all transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">{solution.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3">{solution.title}</h3>
              <p className="text-gray-300">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

