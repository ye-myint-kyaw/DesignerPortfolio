"use client"

import { TableRow } from '@/types/global'
import React, { useRef } from 'react'
import BasicLayout from './Layout/BasicLayout';
import { cn, customXSS } from '@/lib/utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface TableProps {
  title?: string;
  subTitle?: string;
  tableCells: TableRow[],
  className?: string
}

const Table: React.FC<TableProps> = ({title, subTitle, tableCells, className=""}) => {
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
  return (
    <BasicLayout asChild>
      <section className={cn(className, "animatedContainer")} ref={containerRef}>
        <hgroup className='pb-[30px] w-fit animated'>
          {subTitle && <p className='text-[14px] uppercase font-semibold'>{subTitle}</p>}
          <h2 className='heading02'>{title}</h2>
        </hgroup>
        <dl className='animated'>
          {tableCells.map((cell) => (
            <div key={cell.title} className='border-t-[1.25px] py-[30px] border-gray grid grid-cols-8 sm:grid-cols-8 gap-x-[20px] sm:gap-x-[3%]'>
              <dt className='uppercase text-[14px] font-semibold col-start-1 col-end-3 md:col-end-3 mb-5 md:mb-0'>{cell.title}</dt>
              <dd className='col-start-4 md:col-start-4 -col-end-1'>
                <ul className='flex flex-col md:flex-row justify-between gap-5'>
                  {cell.content.map(content => (
                    <li key={content} className='flex-1' dangerouslySetInnerHTML={{__html: customXSS.process(content)}} />
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </BasicLayout>
  )
}

export default Table