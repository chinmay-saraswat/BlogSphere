import { assets } from '@/Assets/assets'
import React from 'react'
import Image from 'next/image'
function Header() {
  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
        <div className='flex justify-between items-center'>
          <Image src={assets.logo} alt="" width={180} className='w-[130px] sm:w-auto' ></Image>
          <button className='flex intem-center gap-2 font-medium py-1 px-2 sm:py-3 sm:px-8 border border-solid border-black shadow-[-7px_7px_0px_#000000] hover:shadow-[-8px_8px_2px_#000050] hover:rounded-md'>Get Started <Image src={assets.arrow}></Image></button>
        </div>
        <div className='text-center m-8'>
          <h1 className='text-3xl sm:text-5xl '>Latest Blog</h1>
          <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'> Discover insights, share your voice, and connect with a vibrant community on our blog your go-to destination for stories, knowledge, and inspiration.</p>
          <form className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_3px_#000000]'>
            <input type='email' placeholder='Enter Your Email' className='pl-4  outline-none bg-slate-200'></input>
            <button type='submit' className=' border-l boder-1 border-black py-4  px-4 sm:px-8 active:bg-gray-600 active:text-white'>Subscribe</button>
          </form>
        </div>
    </div>
  )
}

export default Header