import Kv from '@/components/Pages/Top/Kv'
import { Button } from '@/components/ui/button'
import ROUTES from '@/constants/routes'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='top'>
      <Kv/>
    </div>
  )
}

export default page