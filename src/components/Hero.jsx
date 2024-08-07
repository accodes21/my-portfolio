import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import SkillBadge from './SkillBadge'
import { motion, AnimatePresence } from 'framer-motion'
import { slideAnimation, introHeaderVariants } from '@/app/framer'

const Hero = () => {
    return (
        <AnimatePresence>
            <motion.section className='bg-[#111] h-fit w-full'>
                <div className="content1 flex items-center justify-center h-[35em]">
                    <div className="hero flex items-center justify-center relative gap-40">
                        <motion.div {...slideAnimation('left')} className="hero-text flex flex-col">
                            <h1 className=' heading text-[4.8rem] leading-4 mb-[2rem] font-serif font-extrabold'> <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-500'>AARYA</span>
                                <br /> <br /> <br /> <br /> <br />
                                <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600'>CHOPKAR</span></h1>
                            <p className='text-[1.2rem] leading-4 text-center mt-4'>Hi, I'm a <span className='font-semibold'>Software Developer</span> who loves to create stuff.</p>
                            <div className='flex flex-col'>
                                <ul className='social flex items-center mt-6 mb-4'>
                                    <li className='hover:text-[#f1cf29] hover:rotate-12 transition-all'>
                                        <Link href={'https://github.com/accodes21'} target='_blank' title='GitHub' className='text-3xl'><BsGithub /></Link>
                                    </li>
                                    <li className='social-li ml-4 hover:text-[#f1cf29] hover:rotate-12 transition-all'>
                                        <Link href={'https://www.linkedin.com/in/aarya-chopkar-581aa2228'} target='_blank' title='LinkedIn' className='text-3xl'><BsLinkedin /></Link>
                                    </li>
                                    <li className='social-li ml-4 hover:text-[#f1cf29] hover:rotate-12 transition-all'>
                                        <Link href={'https://twitter.com/ChopkarAarya'} target='_blank' title='Twitter' className=' text-4xl'>𝕏</Link>
                                    </li>
                                </ul>
                                <Link href={"https://drive.google.com/file/d/14Bv9Klez1VvjaQGfGlwf7_A21aHMmuZC/view?usp=sharing"} target='_blank' className=' w-fit lg:mx-0 mx-auto mb-4 font-medium lg:text-lg text-sm text-[#222] p-[2px] bg-gradient-to-r from-yellow-400 to-orange-500 hover:scale-95 rounded-full transition-all'><span className='flex flex-col justify-between bg-[#111] text-white hover:bg-transparent hover:text-[#222] rounded-full p-4 transition-all'>My Resume</span></Link>
                            </div>
                        </motion.div>
                        <motion.div {...slideAnimation('right')} className="image">
                            <Image className='imag rounded-full' priority={true} src='/pf.png' width={300} height={300} alt='profile' />
                        </motion.div>
                    </div>
                </div>
                <div className='h-full'>
                    <SkillBadge />
                </div>
                <motion.hr initial="hide" whileInView="show" viewport={{ once: true }} variants={introHeaderVariants('left')}
                    className="lg:h-px h-[1.8px] border-t-0 bg-gradient-to-r from-transparent via-[#f1cf29] to-transparent opacity-100" />
            </motion.section>
        </AnimatePresence>
    )
}

export default Hero