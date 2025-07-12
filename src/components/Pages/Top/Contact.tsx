import BasicLayout from '@/components/Layout/BasicLayout'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Form from './Form'

const Contact = () => {
  return (
    <BasicLayout isGrid asChild>
      <section>
        <div className='mb-[40px] md:mb-0 md:col-start-2 md:col-span-2 col-start-1 col-span-8'>
          <p className='heading01 mb-[16px]'>THANKS FOR MAKING IT <span className='whitespace-nowrap'>TO THE END 🎉</span></p>
          <p className='text-[14px] font-semibold text-darkGray mb-[16px]'>You can send me a letter about your project idea or thoughts on me here.</p>
          <Link href="DUMMY" className='text-[14px] font-semibold text-blue flex items-center gap-2'>Downlaod CV <Image width={20} height={20} alt='Download CV' src="/img/icons/link.svg"/></Link>
        </div>
        <div className='md:col-start-5 md:col-span-3 col-start-1 col-span-8 mt-0 md:mt-[15%]'>
          <Form/>
        </div>
      </section>
    </BasicLayout>
  )
}

export default Contact