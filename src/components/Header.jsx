import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className='h-[70px] w-full shadow shadow-gray-800 p-5 sticky'>
        <nav className='flex justify-between font-medium'>
            <p className='pl-4 text-xl'>Aarya</p>
            <ul className='flex justify-end pr-4 mr-12 text-lg'>
                <Link href={'/'} className='ml-4 text-white hover:text-yellow-400 transition-all'>Home</Link>
                <Link href={'/'} className='ml-4 text-white hover:text-yellow-400 transition-all'>About</Link>
                <Link href={'/'} className='ml-4 text-white hover:text-yellow-400 transition-all'>Projects</Link>
                <Link href={'/'} className='ml-4 text-white hover:text-yellow-400 transition-all'>Contact</Link>
            </ul>
        </nav>
    </header>
  )
}

export default Header