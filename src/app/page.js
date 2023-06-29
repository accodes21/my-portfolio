import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/pages/About'
import Projects from '@/pages/Projects'

export default function Home() {
  return (
    <main className='h-full w-full'>
      <Header/>
      <Hero/>
      <About/>
      <Projects/>
    </main>
  )
}
