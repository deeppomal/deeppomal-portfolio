import React from 'react'
import ArrowForwardIcon  from '@mui/icons-material/ArrowRightAlt';
import Image from 'next/image'
export const  AchievementCard = ({data,index}) => {
  return (
    <div className={`w-full flex flex-col items-center justify-center border-y border-[#14303f] dark:border-[#ffb39b] ${index == 1 && 'lg:border-l'}`}>
         <div 
          className={`bg-[url('/static/${data.image}')] my-10 lg:h-72 h-40 w-2/3 bg-cover bg-no-repeat`}/>
        <div className='w-full relative bottom-0 p-4 bg-[#d6d9df] dark:bg-[#122935] flex items-center justify-center'>
          <a href={data.link}><p className='text-lg font-Montserrat dark:text-[#f6f6f6] text-[#14303f] font-semibold cursor-pointer underline'>{data.title}</p></a>
        </div>
    </div>
  )
}
