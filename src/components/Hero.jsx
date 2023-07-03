import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {BsGithub, BsLinkedin, BsTwitter} from 'react-icons/bs'
import SkillBadge from './SkillBadge'
import {motion, AnimatePresence} from 'framer-motion'
import { fadeAnimation, slideAnimation } from '@/app/framer'

function Hero() {
  return (
    <AnimatePresence> 
    <motion.section className='bg-[#111] h-[100vh]'>
        <div className="content1 flex items-center justify-center h-[35em]">
            <div className="hero flex items-center justify-center relative gap-40">
                <motion.div {...slideAnimation('left')} className="hero-text flex flex-col">
                    <h1 className='text-[4.8rem] leading-4 mb-[2rem] font-serif font-extrabold'> <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-500'>AARYA</span> 
                    <br/> <br/> <br/> <br/> <br/>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600'>CHOPKAR</span></h1>
                    <p className='text-[1.2rem] leading-4 text-center mt-4'>Hi, I'm a Front-end Developer who loves to create stuff.</p>
                    <ul className='flex mt-6'>
                        <li className='hover:text-[#f1cf29] hover:rotate-12 transition-all'>
                            <Link href={'https://github.com/accodes21'} target='_blank' className='text-3xl'><BsGithub/></Link>
                        </li>
                        <li className='ml-4 hover:text-[#f1cf29] hover:rotate-12 transition-all'>
                            <Link href={'https://www.linkedin.com/in/aarya-chopkar-581aa2228'} target='_blank' className='text-3xl'><BsLinkedin/></Link>
                        </li>
                        <li className='ml-4 hover:text-[#f1cf29] hover:rotate-12 transition-all'>
                        <Link href={'https://twitter.com/aarya_chopkar'} target='_blank' className='text-3xl'><BsTwitter/></Link>
                        </li>
                    </ul>
                </motion.div>
                <motion.div {...slideAnimation('right')} className="image">
                    <Image className='imag' priority={true} src='/pf.png' width={300} height={300} alt='profile'/>
                </motion.div>
            </div>
        </div>
        <SkillBadge/>
    </motion.section>
    </AnimatePresence>
  )
}

export default Hero