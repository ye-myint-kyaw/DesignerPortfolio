import { cn, customXSS } from '@/lib/utils';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

interface Poster {
  img: string;
  title: string;
  description: string;
  category: string;
  link?:string
}

interface Prop{
  poster: Poster,
  className?: string,
  isReversed?: boolean
}

const Poster: React.FC<Prop> = ({poster, className, isReversed=false}) => {
  return (
    <div className={cn(`grid grid-cols-4 gap-x-[20px] md:gap-x-[3%] items-center gap-y-5 md:gap-y-0 poster`, className)}>
      <figure className={cn(`relative col-start-1 md:col-start-3 col-span-4 md:col-span-2 group peer`, {"col-start-1! row-start-1": isReversed})}>
        <Image src={poster.img} width={296} height={404} alt={poster.title} className=' w-full h-auto' />
        <figcaption className='absolute max-w-[83.7%] left-0 right-0 bottom-[16px] m-auto flex gap-[10px] h-[41px] border border-primary rounded-[15px] items-center justify-center bg-secondary px-[10px] text-center md:translate-y-[15px] md:opacity-0 group-hover:translate-y-0! group-hover:opacity-100'>
          {poster.title}
        </figcaption>
      </figure>
      <div className={cn(`col-span-4 md:col-span-2 col-start-1 md:row-start-1 text-left md:text-right text-[14px] font-semibold description md:translate-y-[15px] md:opacity-0 peer-hover:translate-y-0 peer-hover:opacity-100 `, {"md:col-start-3 md:text-left": isReversed})}>
        <p dangerouslySetInnerHTML={{ __html: customXSS.process(poster.description) }}></p>
        {poster.link && <Link href={poster.link} className='block text-blue mt-[16px] after:content-[""] after:-w-[20px] after:h-[20px] after:inline-block after:bg-[url("/img/icons/icon_link.svg") after:bg-no-repeat]'>Downlaod Case Study here</Link>}
      </div>
    </div>
  )
}

export default Poster