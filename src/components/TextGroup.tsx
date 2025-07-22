"use client";

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import React, { useRef } from 'react'

interface TextGroupProps {
  context: string;
  author: string;
  asLink?: boolean;
  slug?: string;
  className?: string;
}

const TextGroup: React.FC<TextGroupProps> = ({context, author, asLink, slug, className}) => {
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
    <div className={`flex flex-col justify-center w-fit mx-auto text-[14px] font-semibold text-[#555555] ${className} animatedContainer`} ref={containerRef}>
      <div className='flex flex-col justify-center animated'>
        <p className=" mb-2 whitespace-pre">“{context}”</p>
        {asLink && slug ? <Link href={slug} className='text-blue after:content-[""] after:-w-[20px] after:h-[20px] after:inline-block after:bg-[url("/img/icons/icon_link.svg") after:bg-no-repeat]'>{author}</Link>:<p>-{author}</p>}
      </div>
    </div>
  )
}

export default TextGroup