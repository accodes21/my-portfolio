import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import {motion, AnimatePresence} from 'framer-motion'
import { fadeAnimation, headContentAnimation } from '@/app/framer'

function Header() {
  return (
    <AnimatePresence>
    <motion.header {...fadeAnimation} className='h-[4.5em] w-full shadow shadow-gray-600 p-5 sticky bg-black'>
        <nav className='flex justify-between font-medium'>
            <Image src={'/logo.png'} alt='Logo' width={95} height={95}/>
            <ul {...headContentAnimation} className='flex justify-end pr-4 mr-12 text-lg'>
                <Link href={'/'} className='ml-4 text-white hover:text-yellow-400 transition-all'>Home</Link>
                <Link href={'#about'} className='ml-4 text-white hover:text-yellow-400 transition-all'>About</Link>
                <Link href={'#projects'} scroll={false} className='ml-4 text-white hover:text-yellow-400 transition-all'>Projects</Link>
                <Link href={'/'} className='ml-4 text-white hover:text-yellow-400 transition-all'>Contact</Link>
            </ul>
        </nav>
    </motion.header>
    </AnimatePresence>
  )
}

export default Header