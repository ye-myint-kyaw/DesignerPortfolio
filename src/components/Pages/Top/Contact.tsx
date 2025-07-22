"use client"

import BasicLayout from '@/components/Layout/BasicLayout'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import Form from './Form'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      },
      onStart: () => {
        containerRef.current?.classList.add("is-act");
      }
    })
  }, [])
  return (
    <BasicLayout isGrid asChild>
      <section className='animatedContainer' ref={containerRef}>
        <div className='mb-[40px] md:mb-0 md:col-start-2 md:col-span-2 col-start-1 col-span-8 animated'>
          <p className='heading01 mb-[16px]'>THANKS FOR MAKING IT <span className='whitespace-nowrap'>TO THE END 🎉</span></p>
          <p className='text-[14px] font-semibold text-darkGray mb-[16px]'>You can send me a letter about your project idea or thoughts on me here.</p>
          <Link href="DUMMY" className='text-[14px] font-semibold text-blue flex items-center gap-2'>Downlaod CV <Image width={20} height={20} alt='Download CV' src="/img/icons/link.svg"/></Link>
        </div>
        <div className='md:col-start-5 md:col-span-3 col-start-1 col-span-8 mt-0 md:mt-[15%] animated'>
          <Form/>
        </div>
      </section>
    </BasicLayout>
  )
}

export default Contact