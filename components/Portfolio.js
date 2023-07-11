import React from 'react'
import { ProjectCard } from './ProjectCard'

const data = [
  {
    id:'1',
    name:'PlayBet',
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
    <div id='projects' className='lg:p-11 p-3 lg:px-28 min-h-screen flex flex-col items-center bg-[#34353a] -z-20 pb-12'>
      <p className='lg:text-5xl text-3xl text-[#f6f6f6] font-Ubuntu'>Projects</p>
      <div className='flex mt-12 w-full justify-center flex-wrap'>
        {
          data.map(item => {
            return(
              <ProjectCard data={item} key={item.id} />
            )
          })
        }
      </div>
    </div>
  )
}
