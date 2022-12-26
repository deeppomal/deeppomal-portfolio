import React from 'react'
import LabelIcon from '@mui/icons-material/Label';

export const ExperienceCard = ({data}) => {
  return (
    <div className='flex mt-10 lg:justify-center lg:w-1/2 w-full'>
        <div className='flex flex-col items-center mx-4 lg:mt-5 mt-7'>
            <div className='bg-[#f5c169] lg:p-2 p-1 rounded-full'></div>
            <div className='w-0.5 bg-[#f6f6f6] h-full mt-2'></div>
        </div>
        <div className='mx-4 lg:mt-2 mt-5'>
            <p className='text-[#f6f6f6] font-bold lg:text-3xl text-xl font-Ubuntu'>{data.company}</p>
            <div className='flex justify-between items-center'>
                <p className='text-[#f6f6f6]  lg:text-lg text-sm font-Montserrat'>{data.role}</p>
                <p className='text-[#f6f6f6]  lg:text-lg text-sm font-Montserrat'>{data.year}</p>
            </div>
            <p className='text-[#dbdbdb] mt-3 w-full font-Montserrat'>{data.jd}</p>
        </div>
    </div>
  )
}
