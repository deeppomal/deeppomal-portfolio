import React,{useState,useEffect} from 'react'
import { Navbar } from './Navbar'
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Image from 'next/image'

export const HomeScreen = () => {
  
  return (
    <div className='lg:p-11 px-5 lg:px-28 h-screen flex items-center justify-center bg-[#34353a]'>
      <div className='flex w-full h-full flex-col-reverse lg:flex-row'>
        <div className='h-1/3 lg:h-full lg:w-1/2 flex lg:justify-center lg:items-end items-center flex-col '>
          <div className='flex flex-col '>
            <p className='lg:text-3xl md:text-2xl text-xl text-[#f6f6f6] font-Montserrat '>Hi, I&apos;m<span className='text-[#f5c169] lg:ml-4 text-4xl lg:text-7xl font-Ubuntu'> Deep Pomal</span></p>
            <p className='lg:text-3xl md:text-2xl text-xl text-[#f6f6f6] mt-4 font-Montserrat'>Full Stack Developer</p>
            <a href="https://drive.google.com/file/d/1xKe4ACEYEDseAdt7M33H7ftLPwQRT-xu/view?usp=sharing" target={'_blank'} rel="noreferrer" className='lg:w-56'>
              <div className='lg:border-4 border-2 border-[#f5c169] lg:w-56 py-2 rounded flex items-center justify-center mt-12 cursor-pointer 
              hover:bg-[#f5c169] group hover:origin-center'>
                <p className='lg:text-xl text-lg text-[#f5c169] font-bold font-Montserrat group-hover:text-[#34353a] '>Resume</p>
              </div>
            </a>
          </div>
        </div>
        <div className='lg:h-full h-2/3 lg:w-1/2 flex justify-center items-center relative'> 
          <div className='relative w-screen h-4/6 '>
            <Image
              layout="fill"
              objectFit="contain"
              src='/static/img1.png'
              alt='my picture'
            />
          </div>
       
          <div className='absolute bottom-10 lg:right-10 right-4 flex items-center flex-col z-0'>
            <div className='bg-[#f5c169] lg:w-1 w-0.5 lg:h-28 h-24 rounded'></div>
            <a href="https://github.com/deeppomal" target={'_blank'} rel="noreferrer"><GitHubIcon className='lg:text-3xl text-xl text-[#f6f6f6] mt-14 cursor-pointer'/></a>
            <a href="https://twitter.com/deeppomal98" target={'_blank'} rel="noreferrer"><TwitterIcon className='lg:text-3xl text-xl text-[#f6f6f6] mt-3 cursor-pointer'/></a>
            <a href="https://www.linkedin.com/in/deep-pomal-87751099/" target={'_blank'} rel="noreferrer"><LinkedInIcon className='lg:text-3xl text-xl text-[#f6f6f6] mt-3 cursor-pointer' /></a>
          </div>  
        </div>
    </div>
    </div>
  )
}
