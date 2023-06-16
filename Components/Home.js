import Link from 'next/link'
import React from 'react'
const Home = () => {
  return (
    <div className='h-[100vh] relative bg-black'>
        <div className='h-10  bg-green-400'>
            <ul className='flex justify-evenly pt-2'>
                <li><Link href='/#user'> User List </Link></li>
                <li> <Link href='/#product'> Products List </Link> </li>
            </ul>
        </div>
        <div className='flex justify-center h-[80vh] items-center'>
            <p className='text-white'>Hii Welcome</p>
        </div>
        <div className='absolute h-10 w-[100%] flex justify-center items-center bg-red-300 bottom-0'>
          <p>Footer</p>
        </div>
    </div>
  )
}

export default Home