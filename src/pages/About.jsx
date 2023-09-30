import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion,AnimatePresence } from 'framer-motion'
import { introHeaderVariants, introPictureVariants } from '@/app/framer'

const About = () => {
  return (
    <AnimatePresence>
    <motion.section id='about' className='about bg-black p-36'>
        <div className="container about-container pl-16 pr-16">
            <div className="content1 about-content grid items-center justify-center grid-cols-2">
                <motion.div initial="hide" whileInView="show" viewport={{ once: true }} variants={...introHeaderVariants('left')} className="img-side relative pr-4">
                    <Image className='rounded-3xl' width={560} height={480} src='/gif.gif' alt='Developer'/>
                </motion.div>
                <motion.div initial="hide" whileInView="show" viewport={{ once: true }} variants={...introHeaderVariants('right')} className="text-side pl-4">
                    <h2 className='about-head text-[#f1cf29] font-bold text-2xl'>ABOUT ME</h2>
                    <h3 className='about-sub text-3xl mb-8'>Web Developer based in India</h3>
                    <p className='text-xl text-gray-300'>As a Junior Front-End Developer, I possess an impressive sets of skills in HTML, CSS, JavaScript, React, Tailwind, and Next. I design and maintain websites that offer a smooth user experience. My expertise lies in creating dynamic, engaging interfaces through writing clean code and utilizing new-age development tools and techniques. I am also a acitve contributor to various Open Source projects. I am member of various Tech Communities including <Link href={'https://github.com/EddieHubCommunity'} target='_blank' className='underline hover:text-[#f1cf29]'>EddieHub</Link>, <Link href={'https://github.com/AskDevs'} target='_blank' className='underline hover:text-[#f1cf29]'>AskDevs</Link>, <Link href={'https://gdg.community.dev/gdg-jammu/'} target='_blank' className='underline hover:text-[#f1cf29]'>GDG Jammu</Link> etc.
                    </p>
                </motion.div>
            </div>
        </div>
    </motion.section>
    </AnimatePresence>
  )
}

export default About