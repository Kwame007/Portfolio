'use client'
import { Link } from 'lucide-react'
import React from 'react'
import { Icons } from './icons'

export default function BackBtn() {
  return (
    <nav className='mb-6'>
        <button className='w-9 h-9 rounded-full flex justify-center items-center hover:cursor-pointer hover:bg-muted' onClick={() => window.history.back()}>
          {/* <Link href='/' className='text-muted-foreground' onClick={() => window.history.back()}> */}
            <Icons.back className='text-muted-foreground'/>
          {/* </Link> */}
        </button>
      </nav>
  )
}
