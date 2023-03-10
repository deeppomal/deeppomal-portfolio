import React from 'react'
import { ProjectCard } from './ProjectCard'

const data = [
  {
    id:'1',
    name:'SpotRec',
    descr:"This app allows users to create personalized playlists based on their favorite artists and genres, which can then be saved to their Spotify library. It is convenient, easy to use, and helps users discover new music.",
    viewLink:'https://www.youtube.com/watch?v=R_JPTWPQWGc',
    codeLink:'https://github.com/deeppomal/SpotrecApp',
    image:'/static/spotrec.png'
  },
  {
    id:'2',
    name:'Deep Search',
    descr:"This tool allows users to quickly search relevant articles and videos with just one click. The tool gets summaries of the highest-rated articles from Google and recommends top YouTube videos based on the user's query. The goal of the tool is to make web research more efficient and productive.",
    viewLink:'',
    codeLink:'https://github.com/deeppomal/deep-search',
    image:'/static/proj.png'
  },
  {
    id:'3',
    name:'Tesla Clone',
    descr:'This website is an attempt to clone the well-designed Tesla website and test my front-end skills',
    viewLink:'',
    codeLink:'https://github.com/deeppomal/tesla-clone',
    image:'/static/tesla.png'
  },
  {
    id:'4',
    name:'Keyboard King',
    descr:'This website helps users improve their typing speed by allowing them to test how many words they can type correctly in 30 seconds. It is easy to use and can help users increase their typing speed.',
    viewLink:'',
    codeLink:'https://github.com/deeppomal/Keyboard-King',
    image:'/static/keyboard.png'
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
