import BasicLayout from '@/components/Layout/BasicLayout'
import Posters from '@/components/Pages/Work/Posters'
import Tags from '@/components/Pages/Work/Tags'
import Table from '@/components/Table'
import TextGroup from '@/components/TextGroup'
import { PosterList, TagsList, TopIntroTable } from '@/constants'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='mt-[134px]'>
      <BasicLayout asChild>
        <div className='block mb-[112px]! '>
          <Link href={"/"} className='inline-block relative overflow-hidden w-[32px] h-auto aspect-square 
            after:content-[""] after:absolute after:w-full after:h-full after:bg-[url("/img/icons/icon_arrowLeft.svg")] after:bg-no-repeat after:transition after:duration-300 hover:after:-translate-x-full
            before:content-[""] before:absolute before:w-full before:h-full before:bg-[url("/img/icons/icon_arrowLeft.svg")] before:bg-no-repeat before:translate-x-full before:transition before:duration-300 hover:before:translate-0 
            '></Link>
        </div>
      </BasicLayout>

      <Table title="POSTERS & ARTS" tableCells={TopIntroTable} className='mb-[132px]!'/>

      <Tags tags={TagsList}/>

      <Posters posterList={PosterList}/>

      <TextGroup
        context={`These are previews for some of my work.
Overall 135+ posters have made.`}
        author="Downlaod CV here"
        asLink
        slug='https://coosy.co.jp'
        className=" min-h-screen"
      />
    </div>
  )
}

export default page