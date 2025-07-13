import BasicLayout from '@/components/Layout/BasicLayout'
import React from 'react'

interface props{
  tags: string[]
}

const Tags: React.FC<props> = ({tags}) => {
  return (
    <BasicLayout asChild>
      <div className='flex gap-5 md:gap-[56px] flex-wrap'>
        {tags.map(tag=><span key={tag} className='text-[16px] font-semibold py-[10px] px-[16px] border border-primary rounded-[32px]'>{tag}</span>)}
      </div>
    </BasicLayout>
  )
}

export default Tags