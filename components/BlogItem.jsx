import { assets, blog_data } from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogItem = ({title,description,category,id}) => {
  return (
    <div className='max-w-[330px] sm:max-w-[300px] bg-gray-200 border border-black hover:shadow-[-7px_7px_0px_#000000]'>
      {/*<Link href={`/blogs/${id}`}>
            <Image src={image} alt='' width={400} height={400} className='border-b border-black'></Image>
        </Link>  */}
        <p className='mt-5 ml-5 inline-block bg-black text-white test-sm mb-1'>{category}</p>
        <div className='p-5'>
            <h5 className='text-lg font-medium tracking-tight mb-1 text-gray-900'>{title}</h5>
            <p className='mb-3 text-sm tracking-tighter text-gray-700'>{description}</p>
            <Link href={`/blogs/${id}`} className=' inline-flex py-2 font-semibold text-center hover:text-red-600 hover:scale-110  '>
                Read More <Image src={assets.arrow} width={10} alt='' className='ml-2'></Image>
            </Link>
        </div>
    </div>
  )
}

export default BlogItem