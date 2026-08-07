import React from 'react'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <main>
      <SEO 
        title="EHI Homes & Properties Ltd | Real Estate Agency & Luxury Land in Lagos, Nigeria"
        description="EHI Homes & Properties Ltd helps individuals, families, and investors find genuine, secure, and affordable land and luxury property opportunities in Isheri and across Lagos State, Nigeria."
        canonical="https://ehihomes.com/"
        ogImage="https://ehihomes.com/house_hero.png"
      />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}

export default Home