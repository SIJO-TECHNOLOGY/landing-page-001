export default function TestimonialIntro() {
  return (
    <section className="pt-12 pb-12 px-6 container mx-auto">
      <div className="max-w-4xl mx-auto text-center relative">
        {/* Large Quote Mark Background */}
        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 text-purple-900/20 text-9xl font-bold">
          "
        </div>

        {/* Quote */}
        <p className="text-3xl md:text-4xl font-bold text-white mb-8 relative z-10">
          Acebyte Technology turns complex business operations into growth engines with AI, predictive insights, and smart automation.
        </p>

        {/* Attribution */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">AZ</span>
            </div>
            <div className="text-left">
              <p className="text-white font-semibold">Austin ZHANG</p>
              <p className="text-gray-400 text-sm">Founder of Acebyte Technology</p>
            </div>
          </div>
          
          {/* Tagline - under attribution, aligned with Founder line */}
          <div className="flex justify-end w-full mr-32">
            <p className="text-sm text-gray-400 italic">
              "Engineering Intelligence. Empowering Business."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

