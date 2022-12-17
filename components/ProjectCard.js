import React from 'react'

export const ProjectCard = ({data}) => {
  return (
    <div className='basis-5/12 box-border m-2 rounded max-h-80 relative'>
        <img className=' h-full w-full' src={data.image} alt="project image " />
        <div className='h-full w-full z-10 flex absolute top-0 left-0 bg-[#242427]/90 p-5 flex-col items-center'>
            <p className='text-[#f5c169] text-2xl font-bold'>{data.name}</p>
            <p className='w-11/12 text-[#f6f6f6] mt-3 text-xl font-normal text-center'>{data.descr}</p>
            <div className='flex justify-center items-center absolute bottom-5'>
                <a href={data.viewLink} target={'_blank'} ><div className='bg-[#f5c169] py-2 px-12 rounded m-2 cursor-pointer'>
                    <p className='text-[#34353a] font-bold text-lg'>View</p>
                </div>
                </a>
                <a href={data.codeLink} target={'_blank'}><div className='border-2 border-[#f5c169] py-2 px-12 rounded m-2 cursor-pointer'>
                    <p className='text-[#f5c169] font-bold text-lg'>Code</p>
                </div>
                </a>
            </div>
        </div>
    </div>
  )
}
