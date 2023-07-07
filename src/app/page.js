"use client";
import Footer from '@/components/Footer';
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/pages/About'
import Contact from '@/pages/Contact';
import Projects from '@/pages/Projects'

export default function Home() {
  return (
    <>
      <Header/>
    <main className='h-full w-full'>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </main>
    </>
  )
}
