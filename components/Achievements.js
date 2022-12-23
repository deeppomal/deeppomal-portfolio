import React from 'react'
import { AchievementCard } from './AchievementCard'

const data = [
    {
        id:'1',
        title:'NewHacks Winner',
        description:'Won MLH Sponsor Prize: Best Accessibility Hack sponsored by Fidelity. Have a look at our project on DevPost',
        image:'/static/hack.jpg',
        link:'https://devpost.com/software/easymed-y9so6w',
        buttonText:'DevPost Link'
    },
    {
        id:'2',
        title:'GDSC Technical Lead',
        description:'Got selected as Lead Technical team at GDSC Conestoga waterloo for 2022. Take a look at the workshop I took on teaching how to make a weather app using React Native',
        image:'/static/gdsc.png',
        link:'https://www.youtube.com/watch?v=N27kPBHLvAQ&t',
        buttonText:'Workshop'
    },
    
]
export const Achievements = () => {
  return (
    <div id='ach' className='lg:p-11 lg:5 lg:px-10  flex flex-col items-center bg-[#34353a] relative pb-20 z-20'>
        <p className='text-[#f6f6f6] font-extrabold lg:text-5xl text-3xl absolute lg:-top-8 -top-5 lg:left-28 left-7 font-Ubuntu'>Achievements</p>
        <div className='flex mt-12 w-11/12 justify-center flex-wrap'>
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
