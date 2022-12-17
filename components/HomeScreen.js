import React,{useState,useEffect} from 'react'
import { Navbar } from './Navbar'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const HomeScreen = () => {
  
  return (
    <div className='p-11 px-28 h-screen flex items-center justify-center bg-[#34353a] drop-shadow-xl'>
      <div className='flex w-full h-full'>
        <div className='h-full w-1/2 flex justify-center items-end flex-col drop-shadow-xl'>
          <div className='flex flex-col'>
            <p className='text-3xl text-[#f6f6f6]'>Hi, I'm<span className='text-[#f5c169] ml-4 text-7xl font-extrabold'> Deep Pomal</span></p>
            <p className='text-3xl text-[#f6f6f6] mt-4'>Full Stack Developer</p>
            <div className='border-4 border-[#f5c169] w-56 py-2 rounded flex items-center justify-center mt-12 cursor-pointer'>
              <p className='text-2xl text-[#f5c169] font-semibold'>Resume</p>
            </div>
          </div>
        </div>
        <div className='h-full w-1/2 flex justify-center items-center relative'> 
          <div className='absolute bottom-10 right-10 flex items-center flex-col'>
            <div className='bg-[#f5c169] w-1 h-28 rounded'></div>
            <FacebookRoundedIcon style={{color:'#f6f6f6',marginTop:15,fontSize:30,cursor:'pointer'}} />
            <TwitterIcon style={{color:'#f6f6f6',marginTop:15,fontSize:30,cursor:'pointer'}} />
            <LinkedInIcon style={{color:'#f6f6f6',marginTop:15,fontSize:30,cursor:'pointer'}} />
            <WhatsAppIcon style={{color:'#f6f6f6',marginTop:15,fontSize:30,cursor:'pointer'}} />
          </div>  
        </div>
    </div>
    </div>
  )
}
