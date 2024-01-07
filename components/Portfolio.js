import React from 'react'
import { ProjectCard } from './ProjectCard'

const data = [
  {
    id:'1',
    name:'Uber Data Engineering',
    descr:"Analyzed Uber data using various tools including GCP Storage, Python, Compute Instance, Mage Data Pipeline Tool, BigQuery, and Looker Studio",
    viewLink:'https://lookerstudio.google.com/s/gQhNwmNu6Ss',
    codeLink:'https://github.com/deeppomal/playbet_frontend',
    image:'/static/uberdb.png',
    border:false,
  },
  {
    id:'2',
    name:'House Sales Dashboard',
    descr:"Built an interactive dashboard with a calendar widget as the main filter and multiple visuals including a line chart, histograms, a map, and a heatmap",
    viewLink:'https://public.tableau.com/views/KingCountyHouseSales_17032685658340/KingCountyHouseSales',
    codeLink:'https://github.com/deeppomal/SpotrecApp',
    image:'/static/housedb.png',
    border:false
  },
  {
    id:'3',
    name:'Spotify EDA',
    descr:"Used Kaggle notebook to do EDA on Spotify data, discovered underrated songs and studied the trend of popular songs",
    viewLink:'https://github.com/deeppomal/Spotify-Notebook',
    codeLink:'https://github.com/deeppomal/playbet_frontend',
    image:'/static/spotkag.png',
    border:true
  },
  {
    id:'4',
    name:'IBM Dashboard',
    descr:"Used Tableau to create an interactive dashboard for IBM employee data. Uncovered fascinating trends within employee job histories",
    viewLink:'https://public.tableau.com/app/profile/deep.pomal/viz/IBMHRDashboard_17026677631900/Dashboard1?publish=yes',
    codeLink:'https://github.com/deeppomal/SpotrecApp',
    image:'/static/ibmdb.png',
    border:false
  },
  {
    id:'5',
    name:'PlayBet',
    descr:"Developed a robust MERN stack app for football betting, enabling users to engage in virtual money wagering.",
    viewLink:'https://playbet.netlify.app/',
    codeLink:'https://github.com/deeppomal/playbet_frontend',
    image:'/static/pbfr.png',
    border:false
  },
  {
    id:'6',
    name:'SpotRec',
    descr:"Craft your unique playlists based on your favorite artists and genres. Uncover new beats, and dive into uncharted melodies!",
    viewLink:'https://www.youtube.com/watch?v=R_JPTWPQWGc',
    codeLink:'https://github.com/deeppomal/SpotrecApp',
    image:'/static/spotty.jpg',
    border:true
  }
]
export const Portfolio = () => {
  return (
    <div id='projects' className='flex flex-col items-center -z-20 pb-12'>
      <p className='lg:text-4xl text-3xl dark:text-[#ffb39b] text-[#14303f] font-Ubuntu'>Projects</p>
      <div className='mt-5 w-full grid lg:grid-cols-3 grid-flow-row'>
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