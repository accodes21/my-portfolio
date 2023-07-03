import Link from 'next/link'
import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import { introHeaderVariants, slideAnimation } from '@/app/framer'

function Header() {
  return (
    <AnimatePresence>
    <motion.header {...slideAnimation('down')} className='w-full'>
        <nav className='fixed z-10 cursor-pointer flex-row items-center  overflow-hidden rounded-full border px-1 py-4 shadow-xl backdrop-blur-sm backdrop-filter border-slate-800/100 bg-black bg-opacity-60 lg:left-1/2 lg:flex lg:-translate-x-1/2 lg:transform mt-6 top-8"'>
            <motion.ul {...introHeaderVariants('left')} className='flex justify-end pr-4 text-lg'>
                <Link href={'/'} className='ml-4 text-white hover:text-yellow-400 transition-all'>Home</Link>
                <Link href={'#about'} className='ml-4 text-white hover:text-yellow-400 transition-all'>About</Link>
                <Link href={'#projects'} scroll={false} className='ml-4 text-white hover:text-yellow-400 transition-all'>Projects</Link>
                <Link href={'/'} className='ml-4 text-white hover:text-yellow-400 transition-all'>Contact</Link>
            </motion.ul>
        </nav>
    </motion.header>
    </AnimatePresence>
  )
}

export default Header