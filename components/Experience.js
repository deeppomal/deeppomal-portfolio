import React from 'react'
import { ExperienceCard } from './ExperienceCard'

const data = [
    
    {
        id:'1',
        year:"April '21 - April '23",
        role:'React Native Developer',
        company:'ScalingWeb',
        jd: "Developed Instagram's reels-like feature for the company's MVP. Increased video loading speeds by 15% and also added infinite scroll \nIntegrated 3 types of authentication: Email/ Phone and Social \nDesigned pixel-perfect UI which was responsive with every Android and IOS operated screen"

    },
    {
        id:'2',
        year:"March '20 - April '21",
        role:'React Native Developer',
        company:'Krenai',
        jd: "Worked on eCommerce apps, integrated features like ordering products, online payment, live order tracking, and chat functionality with the seller."

    },
    {
        id:'3',
        year:"Jan '19 - July '19",
        company:'National University of Singapore',
        role:'Research Intern',
        jd: "Performed data analysis on a hospital database using machine learning techniques to predict the length of stay of a patient to help the hospital with supply chain management",

    },

]
export const Experience = () => {
  return (
    <div id='exp' className='lg:p-11 p-5 lg:px-28 min-h-screen flex flex-col items-center bg-[#3d3e42] relative z-10 pb-20'>
        <p className='text-[#f6f6f6] font-Ubuntu lg:text-5xl text-3xl absolute lg:-top-8 -top-5 lg:left-28 left-7'>Experience</p>
        {
            data.map(item => {
                return(
                    <ExperienceCard data={item} key={item.id} />
                )
            })
        }
    </div>
  )
}
