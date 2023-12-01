"use client";
import Footer from '@/components/Footer';
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/pages/About'
import Contact from '@/pages/Contact';
import Projects from '@/pages/Projects'
import { useEffect, useRef } from 'react'

export default function Home() {

  const loader = useRef(null);
  const path = useRef(null);
  const initialCurve = 200;
  const duration = 300;
  let start;

  useEffect(() => {
    setPath(initialCurve)
    setTimeout( () => {
      requestAnimationFrame(animate)
    }, 100)
  },[])

  const animate = (timestamp) => {
    if(start === undefined){
      start = timestamp
    }
    const elapsed = timestamp - start;
    loader.current.style.top = easeOutQuad(elapsed, 0, -loaderHeight(), duration) + "px"

    if(elapsed < duration){
      requestAnimationFrame(animate)
    }
  }

  const easeOutQuad = (time, start, end, duration) => {
    return -end * (time /= duration) * (time - 2) + start;
  }

  const loaderHeight = () => {
    const loaderBounds = loader.current.getBoundingClientRect();
    return loaderBounds.height;
  }

  const setPath = (curve) => {
    const width = window.innerWidth
    const height = loaderHeight();
    path.current.setAttributeNS(null, "d",
    `M0 0
    L${width} 0
    L${width} ${height}
    Q${width/2} ${height - curve} 0 ${height}
    L0 0`
    )
  }

  return (
    <>
      <div ref={loader} className="h-[110vh] w-full fixed z-10">
        <svg className='h-full w-full'>
          <path ref={path} className='stroke-[#f1cf29] stroke-1 fill-[#111]'></path>
        </svg>
      </div>
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
