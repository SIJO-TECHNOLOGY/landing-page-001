export default function StatsShowcase() {
  const stats = [
    {
      number: '99.9%',
      label: 'Uptime Guarantee',
      icon: '⚡',
    },
    {
      number: '85%',
      label: 'Downtime Reduction',
      icon: '📉',
    },
    {
      number: '24/7',
      label: 'Auto-Recovery',
      icon: '🔧',
    },
  ]

  return (
    <div className="relative pt-8 pb-16 px-6 overflow-hidden">
      {/* Stats Grid */}
      <div className="relative z-10 max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="group text-center p-6 rounded-2xl bg-gradient-to-br from-purple-900/30 to-purple-900/10 border border-purple-800/30 hover:border-purple-600/60 transition-all hover:scale-105 backdrop-blur-sm"
          >
            <div className="text-4xl mb-2">{stat.icon}</div>
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              {stat.number}
            </div>
            <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

