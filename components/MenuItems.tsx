"use client"
import { navLinks } from "@/constants"
import { hamburger } from '@/assets/icons'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { shoe4 } from "@/assets/images"

function MenuItems({ showMenu, active }) {
  return (
    <div className={active ? "py-6 lg:hidden absolute right-[5%] z-10" : "hidden" }>

    <ul className='flex-1 flex-col max-lg:block'>
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