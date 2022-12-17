import React from 'react'
import { ProjectCard } from './ProjectCard'

const data = [
  {
    id:'1',
    name:'Deep Search',
    descr:'Search the web efficiently by getting summaries of the top 3 articles and video recommendations for your query.Search the web efficiently by',
    viewLink:'deep-search.netlify.app',
    codeLink:'deep-search.netlify.app',
    image:'/static/proj.png'
  },
  {
    id:'2',
    name:'Deep Search',
    descr:'Search the web efficiently by getting summaries of the top 3 articles and video recommendations for your query.Search the web efficiently by',
    viewLink:'deep-search.netlify.app',
    codeLink:'deep-search.netlify.app',
    image:'/static/proj.png'
  },
  {
    id:'3',
    name:'Deep Search',
    descr:'Search the web efficiently by getting summaries of the top 3 articles and video recommendations for your query.Search the web efficiently by',
    viewLink:'deep-search.netlify.app',
    codeLink:'deep-search.netlify.app',
    image:'/static/proj.png'
  },
  {
    id:'4',
    name:'Deep Search',
    descr:'Search the web efficiently by getting summaries of the top 3 articles and video recommendations for your query.Search the web efficiently by',
    viewLink:'deep-search.netlify.app',
    codeLink:'deep-search.netlify.app',
    image:'/static/proj.png'
  }
]
export const Portfolio = () => {
  return (
    <div className='p-11 px-28 h-screen flex flex-col items-center bg-[#34353a] -z-20'>
      <p className='text-5xl text-[#f6f6f6] font-extrabold'>Projects</p>
      <div className='flex mt-12 w-10/12 justify-center flex-wrap flex-row '>
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
