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
    <div id='ed' className='lg:p-11 p-5 lg:px-28 flex flex-col items-center bg-[#3d3e42] relative z-20'>
        <p className='text-[#f6f6f6] font-Ubuntu lg:text-5xl text-3xl absolute lg:-top-8 -top-5 lg:left-28 left-7'>Education</p>
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
