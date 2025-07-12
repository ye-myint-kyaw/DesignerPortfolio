import { TopCategories } from '@/constants'
import React from 'react'
import Category from './CategorySection'

const Categories = () => {
  return (
    <>
      {TopCategories.map((category, index) => <Category
        img01={category.img01}
        img02={category.img02}
        title={category.title}
        description={category.description}
        slug={category.slug}
        key={category.slug}
        isReversed={(index + 1) % 2 === 0}
        className={index == TopCategories.length-1 ? "mb-0!": ""}
      />)}
    </>
  )
}

export default Categories