import React from 'react'
import ArrowForwardIcon  from '@mui/icons-material/ArrowRightAlt';
export const  AchievementCard = ({data}) => {
  return (
    <div className='w-full lg:w-2/5 lg:h-80 h-56 box-border m-2 rounded relative'>
        <img className=' h-full w-full object-cover' src={data.image} alt="project image " />
        <div className='h-full w-full z-10 flex absolute top-0 left-0 bg-[#242427]/90 p-5 flex-col '>
            <p className='text-[#f5c169] lg:text-2xl  text-xl font-Ubuntu'>{data.title}</p>
            <p className='w-11/12 text-[#f6f6f6] mt-3 lg:text-lg text-sm font-Montserrat '>{data.description}</p>
            {data?.link && <a href={data.link} target={'_blank'}  rel="noreferrer"
            className='bg-[#f5c169] w-1/2 rounded cursor-pointer flex items-center justify-center absolute bottom-5'>
                <div className='flex items-center justify-center p-1 lg:p-2'>
                    <p className='text-[#34353a] font-bold font-Montserrat lg:text-lg  '>{data.buttonText}</p>
                    <ArrowForwardIcon className='text-[#34353a] text-3xl ml-2' />
                </div>
            </a>}
        </div>
    </div>
  )
}
