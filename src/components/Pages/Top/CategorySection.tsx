"use client";

import BasicLayout from '@/components/Layout/BasicLayout'
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

interface CategoryProps {
  img01: string;
  img02: string;
  title: string;
  description: string;
  slug: string;
  isReversed?: boolean;
  className?:string;
}

const Category: React.FC<CategoryProps> = ({img01, img02, title, description, slug, isReversed=false, className}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
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
    <BasicLayout asChild isGrid>
      <section className={cn("my-[120px] md:my-[160px] last-of-type:mb-0 animatedContainer", className)} ref={containerRef}>
        <Image width={296} height={256} className={cn("col-span-2 md:col-start-3 w-full", {"md:col-start-5":isReversed})} alt='POSTERS & ARTS 🎨' src={img01}/>
        <Image width={296} height={404} className={cn("col-span-2 md:col-start-5 md:row-span-full md:row-start-1 md:row-end-3 my-0 mt-[65px] md:mt-[100px] md:mb-[70%] lg:mt-[40%]", {"md:col-start-3": isReversed})} alt='POSTERS & ARTS 🎨' src={img02}/>
        <div className={cn("contents md:block col-span-full md:col-start-3 md:col-span-2 md:row-start-2",{"md:col-start-5": isReversed})}>  
          <h2 className='heading02 mb-[18px] md:mb-[15px] row-start-1 col-span-full'>{title}</h2>
          <p className='text-[14px] mt-[18px] md:mt-0 mb-[24px] col-span-full'>{description}</p>
          <Link href={slug} className={`uppercase col-span-full max-w-[200px] ${buttonVariants({ variant: 'default' })}`}>
            <div className='flex flex-col max-h-full overflow-hidden group'>
              <span className='h-full min-h-[18.75px] transition-all ease-in-out duration-500 group-hover:-translate-y-full'>See more of this</span>
              <span className='h-full min-h-[18.75px] text-center transition-all ease-in-out duration-500 group-hover:-translate-y-full'>See more of this</span>
            </div>
          </Link>
        </div>
      </section>
    </BasicLayout>
  )
}

export default Category