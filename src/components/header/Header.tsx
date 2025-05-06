import React from 'react'
import BasicLayout from '../Layout/BasicLayout'
import Link from 'next/link'
import MobileNavigation from './MobileNavigation'
import NavLinks from './NavLinks'


const Header = () => {
  return (
    <BasicLayout asChild>
      <header className='py-5 flex justify-between items-center fixed top-0 left-0 right-0 w-full z-50 bg-secondary'>
        <h1 className='heading01 uppercase'>Phone Lynn Thant</h1>
        <nav className='flex'>
          <NavLinks/>
        </nav>
        <MobileNavigation/>
      </header>
    </BasicLayout>
  )
}

export default Header