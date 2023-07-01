import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <header className='h-[4.5em] w-full shadow shadow-gray-600 p-5 sticky'>
        <nav className='flex justify-between font-medium'>
            <Image src={'/logo.png'} alt='Logo' width={95} height={95}/>
            <ul className='flex justify-end pr-4 mr-12 text-lg'>
                <Link href={'/'} className='ml-4 text-white hover:text-yellow-400 transition-all'>Home</Link>
                <Link href={'#about'} className='ml-4 text-white hover:text-yellow-400 transition-all'>About</Link>
                <Link href={'#projects'} scroll={false} className='ml-4 text-white hover:text-yellow-400 transition-all'>Projects</Link>
                <Link href={'/'} className='ml-4 text-white hover:text-yellow-400 transition-all'>Contact</Link>
            </ul>
        </nav>
    </header>
  )
}

export default Header