import React from 'react'
import ArrowForwardIcon  from '@mui/icons-material/ArrowRightAlt';
import Image from 'next/image'
export const  AchievementCard = ({data,index}) => {
  return (
    <div className={`w-full flex flex-col items-center justify-center border-y border-[#14303f] dark:border-[#ffb39b] ${index == 1 && 'lg:border-l'}`}>
        <Image
          src={data.image}
          alt={data.name}
          width={1000}
          height={1000} 
          className='my-5 h-64 w-2/3 object-contain'/>
        <div className='w-full relative bottom-0 p-4 bg-[#d6d9df] dark:bg-[#122935] flex items-center justify-center'>
          <a href={data.link} target='_blank'><p className='text-lg font-Montserrat dark:text-[#f6f6f6] text-[#14303f] font-semibold cursor-pointer underline'>{data.title}</p></a>
        </div>
    </div>
  )
}
