import React from 'react'
import { AchievementCard } from './AchievementCard'

const data = [
    {
        id:'1',
        title:'GDSC Technical Lead',
        description:'Lead Technical team at GDSC Conestoga waterloo',
        image:'/static/proj.png',
        link:'https://mui.com/material-ui/material-icons/?query=right+arrow&selected=ArrowForward',
        buttonText:'Workshop'
    },
    {
        id:'2',
        title:'GDSC Technical Lead',
        description:'Lead Technical team at GDSC Conestoga waterloo',
        image:'/static/proj.png',
        link:'https://mui.com/material-ui/material-icons/?query=right+arrow&selected=ArrowForward',
        buttonText:'DevPost Link'
    }
]
export const Achievements = () => {
  return (
    <div className='p-11 px-28  flex flex-col items-center bg-[#34353a] relative pb-40 z-20'>
        <p className='text-[#f6f6f6] font-extrabold text-5xl absolute -top-8 left-28'>Achievements</p>
        <div className='flex mt-12 w-10/12 justify-center flex-wrap flex-row '>
            {
                data.map(item => {
                    return(
                        <AchievementCard data={item} key={item.id} />
                    )
                })
            }
        </div>
        
    </div>
  )
}
