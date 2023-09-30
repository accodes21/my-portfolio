import ProjectCard from '@/components/ProjectCard'
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { introHeaderVariants } from '@/app/framer'

const Projects = () => {
  return (
    <AnimatePresence>
    <motion.section id='projects' className='project bg-[#111] p-32'>
        <motion.h1 initial="hide" whileInView="show" viewport={{ once: true }} variants={...introHeaderVariants('left')} className='text-[#f1cf29] font-bold text-2xl'>PROJECTS</motion.h1>
        <div className="box grid grid-cols-2 justify-center items-center">
          <ProjectCard title={'YouTube 2.0'} image={'yt.png'} link={'YouTube-Clone'} projectLink={'https://youtube-clone-accodes21.vercel.app/'}/>
          <ProjectCard title={'3D Tshirt Designer'} image={'tshirt.png'} link={'tshirt3d'} projectLink={'https://tshirt3d.vercel.app/'}/>
          <ProjectCard title={'Movie-Mania'} image={'movie-mania.png'} link={'Movie-Mania'} projectLink={'https://movie-app-bice-ten.vercel.app/'}/>
          <ProjectCard title={'Meme Generator'} image={'meme.png'} link={'Meme_Generator'} projectLink={'https://meme-generator-accodes21.vercel.app/'}/>
          <ProjectCard title={'Tenzies Game'} image={'tenzies.png'} link={'Tenzies-Game'} projectLink={'https://tenzies-game-neon.vercel.app/'}/>
          <ProjectCard title={'Sherlock Holmes Landing Page'} image={'sherlock.png'} link={'Sherlock_Landing_Page'} projectLink={'https://accodes21.github.io/Sherlock_Landing_Page/'}/>
          <ProjectCard title={'Firebase ChatApp'} image={'chatapp.png'} link={'basic_chatapp'} projectLink={'https://basic-chatapp.vercel.app/'}/>
        </div>
    </motion.section>
    </AnimatePresence>
  )
}

export default Projects