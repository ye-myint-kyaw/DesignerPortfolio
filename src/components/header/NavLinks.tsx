import { sidebarLinks } from '@/constants'
import Link from 'next/link'
import React from 'react'
import { SheetClose } from '../ui/sheet'

const NavLinks = ({isMobileNav=false}:{isMobileNav?:boolean}) => {
  const classes = "text-primary hover:opacity-75 transition-colors duration-300 uppercase uppercase transition-all"
  return (
    <ul className='flex gap-4 flex-col sm:flex-row pt-10 sm:pt-0'>
      {isMobileNav ? 
        sidebarLinks.map((link) => (
          <li key={link.route}>
            <SheetClose asChild>
              <Link href={link.route} className={`${classes}`}>{link.label}</Link>
            </SheetClose>
          </li>        
        ))
      :sidebarLinks.map((link) => (
        <li key={link.route} className='hidden sm:block'>
          <Link href={link.route} className={`${classes}`}>{link.label}</Link>
        </li>        
      ))}
    </ul>
  )
}

export default NavLinks