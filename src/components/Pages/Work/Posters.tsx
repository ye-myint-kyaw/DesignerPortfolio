import BasicLayout from '@/components/Layout/BasicLayout'
import React from 'react'
import Poster from '@/components/Pages/Work/Poster';


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
  return (
    <div>
      {posterList.map((_,index)=>{
        if(index % 4 === 0){
          return <BasicLayout isGrid key={`group-${index}`}>
            <div className='col-span-4 '>
              <Poster poster={posterList[index]} className='mb-[45px] md:mb-[202px]'/>
              <Poster poster={posterList[index+2]}/>
            </div>
            <div className='col-span-4'>
              <Poster poster={posterList[index+1]} className='my-[45px] md:my-[202px]' isReversed/>
              <Poster poster={posterList[index+3]} isReversed/>
            </div>
          </BasicLayout>
        }
      })}
    </div>
  )
}

export default Posters