import React from 'react'
import ArrowForwardIcon  from '@mui/icons-material/ArrowRightAlt';
export const AchievementCard = ({data}) => {
  return (
    <div className='basis-5/12 box-border m-2 rounded max-h-80 relative'>
        <img className=' h-full w-full' src={data.image} alt="project image " />
        <div className='h-full w-full z-10 flex absolute top-0 left-0 bg-[#242427]/90 p-5 flex-col items-center'>
            <p className='text-[#f5c169] text-2xl font-bold'>{data.title}</p>
            <p className='w-11/12 text-[#f6f6f6] mt-3 text-xl font-normal text-center'>{data.description}</p>
            {data?.link && <a href={data.link} target={'_blank'} className='bg-[#f5c169] w-2/3 rounded m-2 cursor-pointer mt-10 flex items-center justify-center'>
                <div className='flex items-center justify-center'>
                    <p className='text-[#34353a] font-bold text-lg'>{data.buttonText}</p>
                    <ArrowForwardIcon style={{color:'#34353a', fontSize:50,marginLeft:10}} />
                </div>
            </a>}
        </div>
    </div>
  )
}
