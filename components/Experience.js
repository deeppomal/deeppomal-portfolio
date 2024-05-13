import React from 'react'
import { ExperienceCard } from './ExperienceCard'

const data = [
    
    {
        id:'4',
        year:"May '22 - Present",
        role:'E-Commerce Data Associate',
        company:'Walmart',
        // jd: "Developed Instagram's reels-like feature for the company's MVP. Increased video loading speeds by 15% and also added infinite scroll \nIntegrated 3 types of authentication: Email/ Phone and Social \nDesigned pixel-perfect UI which was responsive with every Android and IOS operated screen"

    },
    {
        id:'1',
        year:"Feb '21 - Jan '22",
        role:'Data Engineer',
        company:'ScalingWeb',
        // jd: "Developed Instagram's reels-like feature for the company's MVP. Increased video loading speeds by 15% and also added infinite scroll \nIntegrated 3 types of authentication: Email/ Phone and Social \nDesigned pixel-perfect UI which was responsive with every Android and IOS operated screen"

    },
    {
        id:'2',
        year:"June '20 - Feb '21",
        role:'Data Analyst',
        company:'Krenai',
        // jd: "Worked on eCommerce apps, integrated features like ordering products, online payment, live order tracking, and chat functionality with the seller."

    },
    {
        id:'3',
        year:"Jan '19 - July '19",
        company:'National University of Singapore',
        role:'Research Intern',
        // jd: "Performed data analysis on a hospital database using machine learning techniques to predict the length of stay of a patient to help the hospital with supply chain management",

    },

]
export const Experience = () => {
  return (
    <div id='exp' className='lg:p-11 p-5 lg:px-28 flex flex-col items-center relative z-10'>
       <p className='dark:text-[#ffb39b] text-[#14303f] font-Ubuntu lg:text-4xl text-3xl w-full'>Experience</p>
       <div className='h-[2px] w-full dark:bg-[#ffb39b] bg-[#14303f] mt-2' />
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
