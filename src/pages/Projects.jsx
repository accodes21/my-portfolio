import ProjectCard from '@/components/ProjectCard'
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { introHeaderVariants } from '@/app/framer'
import Link from 'next/link'

const Projects = () => {
  return (
    <AnimatePresence>
    <motion.section id='projects' className='project bg-[#111] p-32'>
        <motion.h1 initial="hide" whileInView="show" viewport={{ once: true }} variants={...introHeaderVariants('left')} className='text-[#f1cf29] mb-6 font-bold text-3xl font-sans'>PROJECTS</motion.h1>
        <div 
          className="box grid grid-cols-2 justify-center items-center gap-8">
          <ProjectCard title={'3D Tshirt Designer'} image={'tshirt3d.png'} link={'tshirt3d'} projectLink={'https://tshirt3d.vercel.app/'} skills={'ReactJS, ThreeJS, Tailwind CSS, OpenAI'}/>
          <ProjectCard title={'YouTube 2.0'} image={'yt.png'} link={'YouTube-Clone'} projectLink={'https://youtube-clone-accodes21.vercel.app/'} skills={'ReactJS, Material UI, YouTube-API'}/>
          <ProjectCard title={'Movie-Mania'} image={'movie-mania.png'} link={'Movie-Mania'} projectLink={'https://movie-app-bice-ten.vercel.app/'} skills={'ReactJS, Material UI, TMDB API'}/>
          <ProjectCard title={'Meme Generator'} image={'meme.png'} link={'Meme_Generator'} projectLink={'https://meme-generator-accodes21.vercel.app/'} skills={'ReactJS, CSS, Meme API'}/>
          <ProjectCard title={'Tenzies Game'} image={'tenzies.png'} link={'Tenzies-Game'} projectLink={'https://tenzies-game-neon.vercel.app/'} skills={'ReactJS, CSS'}/>
          <ProjectCard title={'Sherlock Holmes Landing Page'} image={'sherlock.png'} link={'Sherlock_Landing_Page'} projectLink={'https://accodes21.github.io/Sherlock_Landing_Page/'} skills={'CSS, JavaScript'}/>
          <ProjectCard title={'Firebase ChatApp'} image={'chatapp.png'} link={'basic_chatapp'} projectLink={'https://basic-chatapp.vercel.app/'} skills={'ReactJS, Firebase, Tailwind CSS'}/>
        </div>
        <div className='text-center mt-6'>
          <Link href={"https://github.com/accodes21?tab=repositories"} target='_blank' className='text-center text-lg p-4 bg-black rounded-full border border-[#f1cf29]/60 hover:bg-[#f1cf29] hover:text-black transition-all'>More Projects</Link>
        </div>
    </motion.section>
    </AnimatePresence>
  )
}

export default Projects