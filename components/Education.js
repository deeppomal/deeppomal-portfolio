import React from 'react'
import { EducationCard } from './EducationCard'

const data = [
    
    {
        id:'1',
        year:"Jan. '22 - April. '23",
        course:'Web Development ',
        institution:'Conestoga College',
        location:'Waterloo, CA'
    },
    {
        id:'2',
        year:"Aug. '16 - June '20",
        course:'Bachelor of Engineering in Computer Science',
        institution:'Gujarat Technological University',
        location:'Gujarat, IN'
    },
]
export const Education = () => {
  return (
    <div id='ed' className='lg:p-11 p-5 lg:px-28 flex flex-col items-center  relative z-20'>
        
        <p className='dark:text-[#ffb39b] text-[#14303f] font-Ubuntu lg:text-4xl text-3xl w-full'>Education</p>
        <div className='h-[2px] w-full dark:bg-[#ffb39b] bg-[#14303f] mt-2' />
        {
            data.map(item => {
                return(
                    <EducationCard data={item} key={item.id} />
                )
            })
        }
        
    </div>
  )
}
