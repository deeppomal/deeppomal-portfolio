import React from 'react'
import LabelIcon from '@mui/icons-material/Label';

export const ExperienceCard = () => {
  return (
    <div className='flex mt-10 justify-center w-1/2'>
        <div className=''>
            <div className='relative flex items-center justify-center' >
                <LabelIcon style={{color:'#696b72',fontSize:80,margin:-12}} />
                <div className='absolute flex justify-center items-center'>
                    <p className='text-[#f6f6f6] font-semibold -ml-1'>
                        2019
                    </p>
                </div>
            </div>
        </div>
        <div className='flex flex-col items-center mx-4 mt-3'>
            <div className='bg-[#f5c169] p-4 rounded-full'></div>
            <div className='w-0.5 bg-[#f6f6f6] h-full mt-2'></div>
        </div>
        <div className='mx-4 mt-2'>
            <p className='text-[#f6f6f6] font-bold text-3xl'>Research Intern</p>
            <p className='text-[#f6f6f6] font-semibold text-lg'>National University of Singapore</p>
            <p className='text-[#dbdbdb] mt-3 w-full'>Search the web efficiently by getting summaries of the top 3 articles and video recommendations for your query.Search the web efficiently bySearch the web efficiently by getting summaries of the top 3 articles and video recommendations for your query.Search the web efficiently bySearch the web efficiently by getting summaries of the top 3 articles and video recommendations for your query.Search the web efficiently bySearch the web efficiently by getting summaries of the top 3 articles and video recommendations for your query.Search the web efficiently by</p>
        </div>
    </div>
  )
}
