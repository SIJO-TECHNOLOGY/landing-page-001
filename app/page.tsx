import Header from '@/components/Header'
import Hero from '@/components/Hero'
import StatsShowcase from '@/components/StatsShowcase'
import TestimonialIntro from '@/components/TestimonialIntro'
import PurposeBuiltAI from '@/components/PurposeBuiltAI'
import SeamlessIntegration from '@/components/SeamlessIntegration'
import DataDrivenSection from '@/components/DataDrivenSection'
import AIResults from '@/components/AIResults'
import ThreeSteps from '@/components/ThreeSteps'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-primary-darker to-primary-dark">
      <Header />
      <Hero />
      <StatsShowcase />
      <TestimonialIntro />
      <PurposeBuiltAI />
      <SeamlessIntegration />
      <DataDrivenSection />
      <AIResults />
      <ThreeSteps />
      <Footer />
    </main>
  )
}

