"use client"

import BasicLayout from '@/components/Layout/BasicLayout'
import { TopPosters } from '@/constants'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from 'swiper/modules';

import { Swiper as SwiperType } from 'swiper/types'
import "swiper/css";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Poster = () => {
  const swiperRefs = useRef<SwiperType[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
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

  useEffect(() => {
    const interval = setInterval(() => {
      swiperRefs.current.forEach(swiper => {
        swiper?.slideNext?.();
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <BasicLayout isGrid asChild>
      <div className='mb-[80px] lg:mb-[200px] animatedContainer' ref={containerRef}>
        {TopPosters.map((_, index) => {
          // Rotate array
          const rotatedPosters = [
            ...TopPosters.slice(index),
            ...TopPosters.slice(0, index)
          ]
          return (
            <Swiper
              onSwiper={(swiper) => (swiperRefs.current.push(swiper))}
              slidesPerView={1}
              loop
              key={index}
              className='flex col-span-2 overflow-hidden max-w-full even:mt-[52px]'
              allowTouchMove={false}
              simulateTouch={false}
              keyboard={false}
              mousewheel={false}
            >
              {rotatedPosters.map((poster) => (
                <SwiperSlide key={poster} className='rounded-[15px]'>
                  <Image
                    key={poster}
                    width={296}
                    height={404}
                    alt="Poster"
                    src={poster}
                    className="rounded-[15px]"
                  />
                </SwiperSlide>))}
            </Swiper>
          )
        })}
      </div>

    </BasicLayout>
  )
}

export default Poster