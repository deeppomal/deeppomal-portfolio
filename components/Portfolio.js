import React from 'react'
import { ProjectCard } from './ProjectCard'

const data = [
  {
    id:'1',
    name:'playbet.netlify.app',
    descr:"Developed a robust MERN stack app for football betting, enabling users to engage in virtual money wagering.",
    viewLink:'https://playbet.netlify.app/',
    codeLink:'https://github.com/deeppomal/playbet_frontend',
    image:'/static/playbet.png'
  },
  {
    id:'2',
    name:'SpotRec',
    descr:"This app allows users to create personalized playlists based on their favorite artists and genres, which can then be saved to their Spotify library. It is convenient, easy to use, and helps users discover new music.",
    viewLink:'https://www.youtube.com/watch?v=R_JPTWPQWGc',
    codeLink:'https://github.com/deeppomal/SpotrecApp',
    image:'/static/spotrec.png'
  }
]
export const Portfolio = () => {
  return (
    <div id='projects' className='flex flex-col items-center -z-20 pb-12'>
      <p className='lg:text-4xl text-3xl dark:text-[#ffb39b] text-[#14303f] font-Ubuntu'>Web Projects</p>
      <div className='mt-5 w-full grid lg:grid-cols-2 grid-flow-row'>
        {
          data.map((data,index) => {
            return(
              <ProjectCard data={data} key={data.id} index={index} />
            )
          })
        }
      </div>
    </div>
  )
}
