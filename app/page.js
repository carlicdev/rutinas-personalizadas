import Image from 'next/image'
import Hero from './components/Hero'
import ServicesSection from './components/ServicesSection'
import Process from './components/Process'
import InfoSection from './components/InfoSection'
import About from './components/About'

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesSection />
      <Process />
      <InfoSection />
      <About />
    </main>
  )
}
