import BasicLayout from '@/components/Layout/BasicLayout'
import { TopPosters } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Poster = () => {
  return (
    <BasicLayout isGrid className=" mb-[80px] lg:mb-[200px]">
      {TopPosters.map((_, index) => {
        // Rotate array
        const rotatedPosters = [
          ...TopPosters.slice(index),
          ...TopPosters.slice(0, index)
        ]
        return (
          <figure
            key={index}
            className={`${(index + 1) % 2 === 0 ? 'translate-y-0 md:translate-y-[52px]' : ''} flex col-span-2 overflow-hidden topPoster`}
          >
            {rotatedPosters.map((poster) => (
              <Image
                key={poster}
                width={296}
                height={404}
                alt="Poster"
                src={poster}
                className="rounded-[15px] min-w-full"
              />
            ))}
          </figure>
        )
      })}

    </BasicLayout>
  )
}

export default Poster