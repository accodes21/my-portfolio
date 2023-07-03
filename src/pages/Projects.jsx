import ProjectCard from '@/components/ProjectCard'
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { introHeaderVariants } from '@/app/framer'

function Projects() {
  return (
    <AnimatePresence>
    <motion.section id='projects' className='bg-[#111] p-32'>
        <motion.h1 initial='hide' whileInView='show' exit='hide' variants={...introHeaderVariants('left')} className='text-[#f1cf29] font-bold text-2xl'>PROJECTS</motion.h1>
        <div className="box grid grid-cols-2 justify-center items-center">
          <ProjectCard title={'YouTube 2.0'} image={'yt.png'} link={'YouTube-Clone'}/>
          <ProjectCard title={'3D Tshirt Designer'} image={'tshirt.png'} link={'tshirt3d'}/>
          <ProjectCard title={'Movie-Mania'} image={'movie-mania.png'} link={'Movie-Mania'}/>
          <ProjectCard title={'Meme Generator'} image={'meme.png'} link={'Meme_Generator'}/>
          <ProjectCard title={'Tenzies Game'} image={'tenzies.png'} link={'Tenzies-Game'}/>
          <ProjectCard title={'Sherlock Holmes Landing Page'} image={'sherlock.png'} link={'Sherlock_Landing_Page'}/>
          <ProjectCard title={'Firebase ChatApp'} image={'chatapp.png'} link={'basic_chatapp'}/>
        </div>
    </motion.section>
    </AnimatePresence>
  )
}

export default Projects