import React from 'react'
import Image from 'next/image'
import {BsGithub} from 'react-icons/bs'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { introHeaderVariants } from '@/app/framer'

function ProjectCard({title, image, link}) {
  return (
    <AnimatePresence>
    <motion.div initial='hide' whileInView='show' exit='hide' variants={...introHeaderVariants('up')} className='card m-4'>
      <h2 className='text-xl font-bold mb-3'>{title}</h2>
        <div className="content h-full w-full shadow-md shadow-[#585757]">
            <Image src={`/${image}`} alt='YouTube 2.0' width={600} height={540} className='thumbnail'/>
            <div className="faded">
                <div className="title">
                    <Link className='link' target="_blank" href={`https://github.com/accodes21/${link}`}>
                        <BsGithub/>
                    </Link>
                </div>
            </div>
        </div>
    </motion.div>
    </AnimatePresence>
  )
}

export default ProjectCard