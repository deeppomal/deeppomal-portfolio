import React from 'react'
import Image from 'next/image'

export const ProjectCard = ({data}) => {
  return (
    <div className='lg:w-2/5 md:w-full w-full rounded my-4 mx-4 flex p-4  bg-[#46474d] group relative
    hover:ease-in-out hover:duration-200 hover:scale-105 hover:shadow-xl hover:shadow-[#f5c169]/50  hover:border-0 hover:bg-[#292a2c]'>
        <div className='relative'>
            <p className='text-[#f5c169] lg:text-2xl text-xl font-Ubuntu'>{data.name}</p>
            <p className='w-11/12 text-[#f6f6f6] mt-2 lg:text-lg font-Montserrat'>{data.descr}</p>
            <div className='flex items-center mt-2'>
                <a href={data.codeLink} target={'_blank'} rel="noreferrer" ><div className='bg-[#f5c169] py-2 px-12 rounded mr-2 cursor-pointer'>
                    <p className='text-[#34353a] font-bold font-Montserrat  lg:text-lg'>Code</p>
                </div>
                </a>
                {data.viewLink &&<a href={data.viewLink} target={'_blank'} rel="noreferrer"><div className='border border-[#f5c169] py-2 px-12 rounded m-2 cursor-pointer'>
                    <p className='text-[#f5c169] font-bold font-Montserrat lg:text-lg'>Demo</p>
                </div>
                </a>}
            </div>
        </div>
    </div>
  )
}