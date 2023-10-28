import React from 'react'
import Image from 'next/image'
import {BsGithub, BsLink} from 'react-icons/bs'
import Link from 'next/link'
import { AnimatePresence, motion} from 'framer-motion'
import { introHeaderVariants } from '@/app/framer'
import Tilt from 'react-parallax-tilt'

const ProjectCard = ({title, image, link, projectLink}) => {
  return (
    <AnimatePresence>
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.25}
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={1000}
      transitionSpeed={1000}
      transitionEasing="cubic-bezier(0.19, 1.0, 0.22, 1.0)"
      className='rounded-xl'
    >
    <motion.div initial="hide" whileInView="show" viewport={{ once: true }} variants={...introHeaderVariants('up')} className='card m-4 rounded-xl'>
      <h2 className='text-xl font-bold mb-3'>{title}</h2>
        <div className="content h-full w-full rounded-xl md:rounded-3xl">
            <Image src={`/${image}`} alt={title} width={500} height={440} className='thumbnail rounded-xl md:rounded-3xl'/>
            <div className="faded">
                <div className="title flex md:flex-row flex-col gap-2">
                    <Link className='link' target="_blank" href={`https://github.com/accodes21/${link}`}>
                        <BsGithub/>
                    </Link>
                    <Link className='link' target='_blank' href={`${projectLink}`}>
                      <BsLink/>
                    </Link>
                </div>
            </div>
        </div>
    </motion.div>
    </Tilt>
    </AnimatePresence>
  )
}

export default ProjectCard