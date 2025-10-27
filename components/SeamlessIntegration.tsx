export default function SeamlessIntegration() {
  const integrations = [
    'Salesforce',
    'SAP',
    'Oracle',
    'Microsoft',
    'NetSuite',
    'Workday',
    'HubSpot',
    'Shopify',
  ]

  return (
    <section className="py-20 px-6 container mx-auto">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Seamless Integration with Your Systems
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Connect with your existing tools through our flexible API architecture. No disruption, no chaos—just powerful integration.
          </p>
          <button className="bg-primary-purple hover:bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center gap-2 transition-all">
            Discover my AI readiness
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>

        {/* Integration Grid */}
        <div className="flex flex-wrap justify-center items-center gap-6">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="px-6 py-4 rounded-xl bg-gradient-to-br from-purple-900/30 to-purple-900/10 border border-purple-800/40 text-center min-w-[120px]"
            >
              <p className="text-gray-200 font-medium">{integration}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

