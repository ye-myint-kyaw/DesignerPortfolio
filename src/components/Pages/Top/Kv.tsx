"use client"
import Link from 'next/link'
import ROUTES from '@/constants/routes'
import { Button, buttonVariants } from '@/components/ui/button'
import BasicLayout from '@/components/Layout/BasicLayout'

const Kv = () => {
  return (
    <BasicLayout asChild>
      <div className='min-h-screen flex flex-col justify-center items-start'>
        <p className='text-[20px] mb-2'>Hello👋</p>
        <p className='lg:text-[80px] md:text-[45px] text-[35px] lg:leading-[80px] md:leading-[45px] leading-[35px] font-bold mb-8'>I MAKE HIGH QUALITY <br className='hidden sm:block'/> UI/UX AND GRAPHIC DESIGN</p>
        <Link href={ROUTES.CONTACT} className={`${buttonVariants({ variant: 'default' })} uppercase`} >
          <span className='w-2 h-2 rounded-full bg-green ' aria-hidden></span> Available Now
        </Link>
      </div>
    </BasicLayout>
  )
}

export default Kv