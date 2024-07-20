import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <div className='flex justify-around flex-col p-5 bg-black gap-2 sm:gap-0 sm:flex-row bg text-white items-center'>
        <Image src={assets.logo_light} alt='' width={120} className='m-2 hover:scale-105'></Image>
        <p>All right reserved. copyright @DEVOO</p>
        <div className='flex'>
            <Image src={assets.facebook_icon} alt=' ' width={40} className='hover:scale-105'/>
            <Image src={assets.twitter_icon} alt=' ' width={40} className='hover:scale-105'/>
            <Image src={assets.googleplus_icon} alt=' ' width={40} className='hover:scale-105'/>
        </div>
    </div>
  )
}

export default Footer