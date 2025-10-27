export default function ThreeSteps() {
  const steps = [
    {
      step: 1,
      title: 'Free assessment and discovery',
      description: 'We assess your current operations, identify immediate opportunities, and show you exactly where you can reduce costs and improve efficiency.',
    },
    {
      step: 2,
      title: 'Custom optimization roadmap',
      description: 'Receive a tailored action plan with clear ROI projections, realistic timelines, and a zero-disruption implementation strategy.',
    },
    {
      step: 3,
      title: 'Implementation and support',
      description: 'We guide you through every step while you focus on running your business. See tangible improvements within 2 weeks.',
    },
  ]

  return (
    <section className="py-20 px-6 container mx-auto">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Kickstart your business optimization in 3 easy steps
        </h2>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {steps.map((item, index) => (
          <div
            key={index}
            className="flex gap-8 p-8 rounded-2xl bg-gradient-to-br from-purple-900/20 to-purple-900/5 border border-purple-800/30 hover:border-purple-600/50 transition-all"
          >
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-white">{item.step}</span>
              </div>
            </div>
            <div className="text-left">
              <p className="text-purple-400 font-semibold mb-2">STEP {item.step}</p>
              <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="bg-primary-purple hover:bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center gap-2 transition-all transform hover:scale-105">
          Start my assessment
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>
    </section>
  )
}

