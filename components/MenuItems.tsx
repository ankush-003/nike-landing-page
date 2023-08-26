"use client"
import { navLinks } from "@/constants"
import { hamburger } from '@/assets/icons'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { shoe4 } from "@/assets/images"

function MenuItems({ showMenu, active }) {
  return (
    <div className={active ? "lg:hidden" : "hidden" }>
    <Image className="mb-2 " src={ hamburger } alt="hamburger" width={25} height={25} onClick={showMenu}/>
    <ul className='flex-1 flex justify-center items-center gap-16 max-lg:block max-lg:justify-self-end'>
    {navLinks.map((item) => (
        <li key={item.label}>
            <Link href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray">{item.label}</Link>
        </li>
    ))}
    </ul>
    </div>
  )
}

export default MenuItems