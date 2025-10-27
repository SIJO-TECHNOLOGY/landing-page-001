import FeatureBadge from './FeatureBadge'

const features = [
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
  {
    name: 'Observability Core',
    shortName: 'Volume',
    description: 'Real-time insight and scaling foundation',
    tooltip: 'Know everything that happens, across every layer.',
  },
  {
    name: 'AI Diagnostics',
    shortName: 'PinPoint',
    description: 'Predictive analytics and root-cause detection',
    tooltip: 'Pinpoint performance gaps before they become downtime.',
  },
  {
    name: 'End-to-End Visibility',
    shortName: 'Trace',
    description: 'Cross-service telemetry and compliance trail',
    tooltip: 'Follow every transaction, every signal, end-to-end.',
  },
  {
    name: 'PIR Engine',
    shortName: 'PIR',
    description: 'Resilience and continuity model',
    tooltip: 'Predict incidents. Isolate impact. Recover instantly.',
  },
]

export default function Hero() {
  return (
    <section className="pt-32 pb-4 px-6 container mx-auto">
      <div className="max-w-5xl mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
          Turn Your Business Into a
          <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Profit Machine with AI
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
          We help businesses automate and optimize operations, boost productivity, and save millions every quarter!
        </p>

        {/* CTA Button */}
        <button className="bg-primary-purple hover:bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center gap-2 transition-all transform hover:scale-105">
          Discover my AI readiness
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>

        {/* Feature Navigation Bar */}
        <div className="mt-12 flex items-center justify-center gap-8 flex-wrap">
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
      </div>
    </section>
  )
}

