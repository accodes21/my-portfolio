import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/pages/About'

export default function Home() {
  return (
    <main className='h-full w-full'>
      <Header/>
      <Hero/>
      <About/>
    </main>
  )
}
