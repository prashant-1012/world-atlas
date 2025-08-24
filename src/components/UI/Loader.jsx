import React from 'react'
import { BiLoaderCircle } from 'react-icons/bi'

export const Loader = () => {
  return (
    <div className='flex justify-center items-center h-screen text-6xl text-blue-500'>
        <BiLoaderCircle />
    </div>
  )
}

export default Loader;