// Use semantic tags
"use client"
import Image from 'next/image'
import Link from 'next/link'
import { headerLogo } from "@/assets/images"
import { hamburger } from '@/assets/icons'
import { navLinks } from '@/constants'
import MenuItems from './MenuItems'
import { useState } from 'react'

const Nav = () => {
    const [active, setActive] = useState(false)
    const showMenu = () => {
        setActive(!active)
    }
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <Link href="/">
                <Image src={ headerLogo } alt="Logo" width={130} height={29}/>
            </Link>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <Link href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray">{item.label}</Link>
                    </li>
                ))}
            </ul>
            <div className='lg:hidden'>
            <Image className={active ? "hidden" : ""} src={ hamburger } alt="hamburger" width={25} height={25} onClick={showMenu}/>
                <MenuItems showMenu={showMenu} active={active}/>
            </div>
            
        </nav>
    </header>
  )
}

export default Nav