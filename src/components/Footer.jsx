import { slideAnimation } from '@/app/framer'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

const Footer = () => {
  return (
    <AnimatePresence>
    <motion.footer {...slideAnimation('up')} className='w-full text-center bg-[#111]'>
        <p className='py-2'>Copyright &copy; Aarya Chopkar</p>
    </motion.footer>
    </AnimatePresence>
  )
}

export default Footer