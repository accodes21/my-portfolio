import ProjectCard from '@/components/ProjectCard'
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { introHeaderVariants } from '@/app/framer'
import Link from 'next/link'
import projects from '@/data/projects'

const Projects = () => {
  return (
    <AnimatePresence>
      <motion.section id='projects' className='project bg-[#111] p-32'>
        <motion.div initial="hide" whileInView="show" viewport={{ once: true }} variants={introHeaderVariants('left')}>
        <h1 className='text-[#f1cf29] mb-6 font-bold text-3xl font-sans'>PROJECTS</h1>
        <h1 className='text-xl mb-6'>Creative projects which helped me mastering development.</h1>
      </motion.div>
      <div
        className="box grid grid-cols-2 justify-center items-center gap-8">
          {
            projects?.map((project) => (
              <ProjectCard
              key={project.title} 
              title={project.title}
              image={project.image}
              link={project.link}
              githubLink={project.githubLink}
              skills={project.skills}
              />
            ))
          }
      </div>
      <motion.div initial="hide" whileInView="show" viewport={{ once: true }} variants={introHeaderVariants('up')} className='text-center mt-6'>
      <Link href={"https://github.com/accodes21?tab=repositories"} target='_blank' className='text-center lg:text-lg text-sm p-4 bg-black rounded-full border border-[#f1cf29]/60 hover:bg-gradient-to-r from-yellow-400 to-orange-500 hover:text-black transition-all'>More Projects</Link>
    </motion.div>
    </motion.section >
    <motion.hr initial="hide" whileInView="show" viewport={{ once: true }} variants={introHeaderVariants('left')}
    className = "lg:h-px h-[1.8px] border-t-0 bg-gradient-to-r from-black via-[#f1cf29] to-black opacity-100" />
    </AnimatePresence >
  )
}

export default Projects