import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <section className='bg-[#111]'>
        <div className="content flex items-center justify-center h-[40rem] gap-40">
            <div className="hero flex items-center justify-center relative gap-40">
                <div className="hero-text flex flex-col">
                    <h1 className='text-[4.8rem] leading-4 mb-[2rem]'>AARYA CHOPKAR</h1>
                    <p className='text-[1.2rem] leading-4 text-center mt-4'>Hi, I'm a passionate Front-end React Developer based in India. 📍</p>
                </div>
                <div className="image">
                    <Image className='imag' src='/pf.jpg' width={300} height={300} alt='profile'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero