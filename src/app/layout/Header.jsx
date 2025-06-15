'use client'
import Image from 'next/image'
import logo from './image/softsell.png'
import Link from 'next/link'
export default function Header ({darkMode, setDarkMode}) {



    return (
        <nav className={` dark bg-gray-900 text-white shadow-md pb-1`}>
        <header className='flex justify-between sm:px-6 px-2  sm:py-3 pt-1 text-white items-center flex-row'>

            <div className='inline-flex items-center gap-1'>
            <Image src={logo} alt={logo} className='w-10 h-10' />
            <p className='sm:text-xl text-sm italic font-bold '>Serena Blake</p>
            </div>
            <nav className='inline-flex gap-4 text-sm items-center font-bold'>
                <Link className='hover:text-blue-700 transition duration-500 sm:text-sm text-xs' href={'/'}>Home</Link>
            </nav>
        </header>


    </nav>
    )
}