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
                    <Image className='rounded-3xl mt-2 rotate-12 z-0 absolute opacity-60' width={560} height={480} src='/aarya.jpg' alt='Developer'/>
                    <Image className='rounded-3xl z-10 relative shadow-md shadow-black' width={560} height={480} src='/aarya.jpg' alt='My profile photo'/>
                </motion.div>
                <motion.div initial="hide" whileInView="show" viewport={{ once: true }} variants={...introHeaderVariants('right')} className="text-side lg:pl-10">
                    <h2 className='about-head text-[#f1cf29] font-bold text-3xl font-sans'>ABOUT ME</h2>
                    <h3 className='about-sub text-2xl mb-6'>Software Developer based in India</h3>
                    <p className='text-xl text-gray-300'>As a <span className='font-semibold underline decoration-[#f1cf29] decoration-2'>Full-Stack Developer</span>, I have worked extensively on JavaScript, ReactJS, Tailwind, and, NextJS. I create websites with seamless UI/UX, specializing in dynamic, engaging design through clean coding and modern development tools.
                    <br />
                    As an <Link href={'https://mvp.microsoft.com/en-US/studentambassadors/profile/d3da8b9c-5bf5-4532-a54f-65ef45536e13'} target='_blank' className='font-semibold underline decoration-[#f1cf29] decoration-2 hover:text-[#f1cf29]'>Microsoft Learn Student Ambassador</Link>, I have guided several students for starting their web-development journey. Also as Associate Tech Lead at <Link href={'https://gdsc.community.dev/shri-mata-vaishno-devi-university-katra/'} target='_blank' className='font-semibold underline decoration-[#f1cf29] decoration-2 hover:text-[#f1cf29]'>GDSC SMVDU</Link>, I have hosted several tech events in my university.
                    <br />
                    I am also a acitve contributor to various Open Source projects. I am member of various Tech Communities including <Link href={'https://github.com/EddieHubCommunity'} target='_blank' className='font-semibold underline decoration-[#f1cf29] decoration-2 hover:text-[#f1cf29]'>EddieHub</Link>, <Link href={'https://github.com/AskDevs'} target='_blank' className='font-semibold underline decoration-[#f1cf29] decoration-2 hover:text-[#f1cf29]'>AskDevs</Link>, <Link href={'https://gdg.community.dev/gdg-jammu/'} target='_blank' className='font-semibold underline decoration-[#f1cf29] decoration-2 hover:text-[#f1cf29]'>GDG Jammu</Link> etc.
                    </p>
                </motion.div>
            </div>
        </div>
    </motion.section>
    <motion.hr initial="hide" whileInView="show" viewport={{ once: true }} variants={...introHeaderVariants('left')}
        class="mt-4 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-[#f1cf29] to-transparent opacity-25 dark:opacity-100" />
    </AnimatePresence>
  )
}

export default About