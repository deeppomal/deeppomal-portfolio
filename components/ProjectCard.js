import React from 'react'
import Image from 'next/image'

export const ProjectCard = ({data,index}) => {
  return (
    <div className={`w-full flex flex-col items-center justify-center border-y border-[#14303f] dark:border-[#ffb39b] border-r-0   ${!data.border &&'lg:border-r'}`}>
        <Image
        src={data.image}
        alt={data.name}
        width={1000}
        height={1000} 
        className='my-5 h-64 w-2/3 object-fill shadow-xl '/>
        <div className='w-full relative bottom-0 p-2 pb-4 bg-[#d6d9df] dark:bg-[#122935] flex items-center justify-center flex-col'>
            <a href={data.viewLink} target='_blank'  rel="noreferrer"><p className='text-lg font-Montserrat dark:text-[#f6f6f6] text-[#14303f] font-semibold cursor-pointer underline'>{data.name}</p></a>
            <p className='text-sm text-center w-11/12 font-Montserrat dark:text-[#dadada] text-[#14303f] font-light mt-2'>{data.descr   }</p>
        </div>
        {/* <div className='relative'>
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
        </div> */}
    </div>
  )
}