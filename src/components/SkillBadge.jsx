import React from 'react'
import { ImHtmlFive } from 'react-icons/im'
import {FaReact, FaNodeJs, FaJava} from 'react-icons/fa'
import {SiCss3, SiJavascript, SiTailwindcss, SiNextdotjs, SiVite, SiFirebase, SiPython, SiCplusplus, SiPrisma} from 'react-icons/si'
import { motion,AnimatePresence } from 'framer-motion'
import { slideAnimation } from '@/app/framer'
import skills from '@/data/skills'

const SkillBadge = () => {

    const style = "#f16529"

  return (
    <AnimatePresence>
    <motion.div {...slideAnimation('up')} className='skill-container flex pl-20 pr-20 pb-20 justify-center'>
        <h2 className='heading2 text-[#f1cf29] font-bold text-3xl'>Tech Stack  |</h2>
        <ul className='skill-list flex'>
            {
                skills?.map((skill, index) => (
                    <li 
                    key={index}
                    className={`ml-4 hover:text-[${skill.hoverColor}] transition-colors`}
                    >
                        {skill.icon}
                    </li>
                ))
            }
        </ul>
    </motion.div>
    </AnimatePresence>
  )
}

export default SkillBadge