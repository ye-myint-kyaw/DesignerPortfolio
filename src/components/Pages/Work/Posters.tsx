"use client";
import BasicLayout from '@/components/Layout/BasicLayout'
import React, { useRef } from 'react'
import Poster from '@/components/Pages/Work/Poster';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';


interface PosterInterface {
  img: string;
  title: string;
  description: string;
  category: string;
  link?:string
}

interface Props {
  posterList: PosterInterface[];
}

const Posters: React.FC<Props> = ({posterList}) => {
  const containerRefs = useRef<HTMLDivElement[]>([]);
  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger);
    containerRefs.current.forEach((containerRef) => {
      gsap.to(containerRef, {
        scrollTrigger: {
          trigger: containerRef,
          start: "top 70%",
        },
        onStart: () => {
          containerRef.classList.add("is-act");
        }
      })
    })
  }, [])
  return (
    <div>
      {posterList.map((_,index)=>{
        if(index % 4 === 0){
          return <BasicLayout isGrid asChild key={`group-${index}`}>
            <div className='animatedContainer mb-[45px]' ref={(el)=>{if(el) containerRefs.current[index] = el}}>
              <div className='col-span-4 '>
                <Poster poster={posterList[index]} className='mb-[45px] md:mb-[202px]'/>
                <Poster poster={posterList[index+2]}/>
              </div>
              <div className='col-span-4'>
                <Poster poster={posterList[index+1]} className='my-[45px] md:my-[202px]' isReversed/>
                <Poster poster={posterList[index+3]} isReversed/>
              </div>
            </div>
          </BasicLayout>
        }
      })}
    </div>
  )
}

export default Posters