import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='flex justify-between mb-16.5 content-center'>
        <div className='font-bold text-2xl'>
            <Link href={'/'}>LiteQl</Link>
        </div>
        <nav>
            <ul className='flex gap-4'>
               <li>
                <Link href={'/'}>Home</Link>
               </li>
               <li>
                <Link href={'/blog'}>Blog</Link>
               </li>
               <li>
                <Link href={'/about'}>About</Link>
               </li>
               <li>
                <Link href={'/contact'}>Contact</Link>
               </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header