import BasicLayout from '@/components/Layout/BasicLayout'
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
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
}

const Category: React.FC<CategoryProps> = ({img01, img02, title, description, slug, isReversed=false}) => {
  return (
    <BasicLayout asChild isGrid>
      <section className='my-[120px] md:my-[160px] last-of-type:mb-0'>
        <Image width={296} height={256} className={cn("col-span-full md:col-start-3 md:col-span-2", {"md:col-start-5":isReversed})} alt='POSTERS & ARTS 🎨' src={img01}/>
        <Image width={296} height={404} className={cn("col-span-full md:col-start-5 md:col-span-2 md:row-span-full md:row-start-1 md:row-end-3 my-0 md:mt-[100px] md:mb-[70%] lg:mt-[40%]", {"md:col-start-3": isReversed})} alt='POSTERS & ARTS 🎨' src={img02}/>
        <div className={cn("col-span-full md:col-start-3 md:col-span-2 md:row-start-2",{"md:col-start-5": isReversed})}>  
          <h2 className='heading02 mb-[15px]'>{title}</h2>
          <p className='text-[14px] mb-[24px]'>{description}</p>
          <Link href={slug} className={`uppercase ${buttonVariants({ variant: 'default' })}`}>See more of this</Link>
        </div>
      </section>
    </BasicLayout>
  )
}

export default Category