import React from 'react'
import { ImHtmlFive } from 'react-icons/im'
import {FaReact, FaNodeJs, FaGitAlt} from 'react-icons/fa'
import {SiCss3, SiJavascript, SiTailwindcss, SiNextdotjs, SiVite, SiFirebase, SiFigma, SiPython, SiC, SiCplusplus} from 'react-icons/si'
import {TbBrandVscode} from 'react-icons/tb'
import { motion,AnimatePresence } from 'framer-motion'
import { slideAnimation } from '@/app/framer'

function SkillBadge() {
  return (
    <AnimatePresence>
    <motion.div {...slideAnimation('up')} className='skill-container flex pl-20 pr-20 pb-20 justify-center'>
        <h2 className='heading2 text-[#f1cf29] font-bold text-3xl'>Tech Stack  |</h2>
        <ul className='skill-list flex'>
            <li className='ml-4 hover:text-[#f1cf29] transition-all'>
                <ImHtmlFive className='text-4xl'/>
            </li>
            <li className='ml-4 hover:text-[#f1cf29] transition-all'>
                <SiCss3 className='text-4xl'/>
            </li>
            <li className='ml-4 hover:text-[#f1cf29] transition-all'>
                <SiJavascript className='text-4xl'/>
            </li>
            <li className='ml-4 hover:text-[#f1cf29] transition-all'>
                <FaReact className='text-4xl'/>
            </li>
            <li className='ml-4 hover:text-[#f1cf29] transition-all'>
                <SiTailwindcss className='text-4xl'/>
            </li>
            <li className='ml-4 hover:text-[#f1cf29] transition-all'>
                <SiNextdotjs className='text-4xl'/>
            </li>
            <li className='ml-4 hover:text-[#f1cf29] transition-all'>
                <SiVite className='text-4xl'/>
            </li>
            <li className='ml-4 hover:text-[#f1cf29] transition-all'>
                <SiFirebase className='text-4xl'/>
            </li>
            <li className='ml-4 hover:text-[#f1cf29] transition-all'>
                <FaNodeJs className='text-4xl'/>
            </li>
            <li className='ml-4 hover:text-[#f1cf29] transition-all'>
                <SiFigma className='text-4xl'/>
            </li>
            <li className='ml-4 hover:text-[#f1cf29] transition-all'>
                <FaGitAlt className='text-4xl'/>
            </li>
            <li className='ml-4 hover:text-[#f1cf29] transition-all'>
                <TbBrandVscode className='text-4xl'/>
            </li>
            <li className='ml-4 hover:text-[#f1cf29] transition-all'>
                <SiPython className='text-4xl'/>
            </li>
            <li className='ml-4 hover:text-[#f1cf29] transition-all'>
                <SiCplusplus className='text-4xl'/>
            </li>
        </ul>
    </motion.div>
    </AnimatePresence>
  )
}

export default SkillBadge