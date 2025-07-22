"use client"
import Link from 'next/link'
import ROUTES from '@/constants/routes'
import { buttonVariants } from '@/components/ui/button'
import BasicLayout from '@/components/Layout/BasicLayout'
import ImageTrail from '@/components/ReactBit/ImageTrail/ImageTrail'
import VariableProximity from '@/components/ReactBit/VariableProximity/VariableProximity'
import { RefObject, useRef } from 'react'

const Kv = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <BasicLayout asChild>
      <div className='min-h-screen flex flex-col justify-center items-start relative'>
        <p className='text-[20px] mb-2 relative z-50'>Hello👋</p>
        <div
          ref={containerRef}
          className='relative z-50 items-start max-w-fit lg:text-[80px] md:text-[45px] text-[35px] lg:leading-[80px] md:leading-[45px] leading-[35px] font-bold mb-8'
        >
          <VariableProximity
            label={'I MAKE HIGH QUALITY UI/UX AND GRAPHIC DESIGN'}
            className={'variable-proximity-demo'}
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef as RefObject<HTMLElement>}
            radius={100}
            falloff='linear'
          />
        </div>
        <Link href={ROUTES.CONTACT} className={`${buttonVariants({ variant: 'default' })} uppercase relative z-50 overflow-hidden group`} >
          <span className='w-2 h-2 rounded-full bg-green ' aria-hidden></span> 
          <div className='flex flex-col max-h-full overflow-hidden'>
            <span className='h-full min-h-[18.75px] transition-all ease-in-out duration-500 group-hover:-translate-y-full'>Available Now</span>
            <span className='h-full min-h-[18.75px] text-center transition-all ease-in-out duration-500 group-hover:-translate-y-full'>Contact</span>
          </div>
        </Link>
        <div className='w-screen h-full absolute overflow-hidden top-0 left-[50%] -translate-x-1/2 z-10'>
          <ImageTrail
            items={[
              'https://picsum.photos/id/287/300/300',
              'https://picsum.photos/id/1001/300/300',
              'https://picsum.photos/id/1025/300/300',
              'https://picsum.photos/id/1026/300/300',
              'https://picsum.photos/id/1027/300/300',
              'https://picsum.photos/id/1028/300/300',
              'https://picsum.photos/id/1029/300/300',
              'https://picsum.photos/id/1030/300/300',
            ]}
            variant={8}
          />
        </div>
      </div>
    </BasicLayout>
  )
}

export default Kv