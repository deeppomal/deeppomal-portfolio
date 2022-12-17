import React from 'react'
import { ExperienceCard } from './ExperienceCard'

const data = [
    {
        id:'1',
        year:'2019',
        company:'Research Intern',
        role:'National University of Singapore',
        jd: 'Search the web efficiently by getting summaries of the top 3 articles and video recommendations for your query.Search the web efficiently bySearch the web efficiently by getting summaries of the top 3 articles and video recommendations for your query.Search the web efficiently bySearch the web efficiently by getting summaries of the top 3 articles and video recommendations for your query.Search the web efficiently bySearch the web efficiently by getting summaries of the top 3 articles and video recommendations for your query.Search the web efficiently by',

    },
    {
        id:'2',
        year:'2019',
        company:'Research Intern',
        role:'National University of Singapore',
        jd: 'Search the web efficiently by getting summaries of the top 3 articles and video recommendations for your query.Search the web efficiently bySearch the web efficiently by getting summaries of the top 3 articles and video recommendations for your query.Search the web efficiently bySearch the web efficiently by getting summaries of the top 3 articles and video recommendations for your query.Search the web efficiently bySearch the web efficiently by getting summaries of the top 3 articles and video recommendations for your query.Search the web efficiently by',

    },
    {
        id:'3',
        year:'2019',
        company:'Research Intern',
        role:'National University of Singapore',
        jd: 'Search the web efficiently by getting summaries of the top 3 articles and video recommendations for your query.Search the web efficiently bySearch the web efficiently by getting summaries of the top 3 articles and video recommendations for your query.Search the web efficiently bySearch the web efficiently by getting summaries of the top 3 articles and video recommendations for your query.Search the web efficiently bySearch the web efficiently by getting summaries of the top 3 articles and video recommendations for your query.Search the web efficiently by',

    },

]
export const Experience = () => {
  return (
    <div className='p-11 px-28 min-h-screen flex flex-col items-center bg-[#3d3e42] relative z-10'>
        <p className='text-[#f6f6f6] font-extrabold text-5xl absolute -top-8 left-28'>Experience</p>
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
