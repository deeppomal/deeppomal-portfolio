import React from 'react'
import { AchievementCard } from './AchievementCard'

const data = [
    {
        id:'1',
        title:'NewHacks Hackathon Winner',
        description:'Won MLH Sponsor Prize: Best Accessibility Hack sponsored by Fidelity. Have a look at our project on DevPost',
        image:'/static/hackathon.png',
        link:'https://devpost.com/software/easymed-y9so6w',
        buttonText:'DevPost Link'
    },
    {
        id:'2',
        title:'Technical Lead: GDSC Waterloo',
        description:'Got selected as Lead Technical team at GDSC Conestoga waterloo for 2022. Take a look at the workshop I took on teaching how to make a weather app using React Native',
        image:'/static/workshop.png',
        link:'https://www.youtube.com/watch?v=N27kPBHLvAQ&t',
        buttonText:'Workshop'
    },
    
]
export const Achievements = () => {
  return (
    <div id='ach' className='lg:p-11 p-5 lg:px-28 flex flex-col items-center relative z-20'>
        <p className='dark:text-[#ffb39b] text-[#14303f] font-extrabold lg:text-4xl text-3xl font-Ubuntu w-full'>Achievements</p>
        <div className='mt-2 w-full grid lg:grid-cols-2 grid-flow-row'>
        {
          data.map((data,index) => {
            return(
              <AchievementCard data={data} key={data.id} index={index} />
            )
          })
        }
      </div>
    </div>
  )
}
