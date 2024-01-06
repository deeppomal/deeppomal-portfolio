import React,{useState,useEffect} from 'react'
import Image from 'next/image'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Navbar = ({setIsMenuVisible,isMenuVisible}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isDark,setIsDark] = useState(true)
  let currentTheme
  const handleThemeSwitch = () => {
    currentTheme = localStorage.theme
    if(currentTheme === 'light'){
      localStorage.theme = 'dark'
      document.documentElement.classList.add('dark')
      setIsDark(true)
    }
    else{
      localStorage.theme = 'light'
      document.documentElement.classList.remove('dark')
      setIsDark(false)
    }
  }
  return (
    <div className={`flex items-center flex-col lg:flex-row fixed top-0 w-full bg-[url('/static/bg2.png')] dark:bg-[url('/static/bgdark.png')] dark:bg-contain z-50`}>
        <div className='border-b border-b-[#14303f] dark:border-b-[#ffb39b] w-full lg:w-1/5 p-4 hidden lg:flex items-center justify-center'>
          <a href="#"><p className='dark:text-[#ffb39b] text-[#14303f] lg:mx-6 mx-2 text-sm md:text-lg lg:text-xl font-semibold cursor-pointer font-Montserrat'>Deep Pomal</p></a>
        </div>
        <div className='flex lg:hidden w-full'>
          <div className='border-b border-b-[#14303f] dark:border-b-[#ffb39b] w-1/2 p-3 flex items-center justify-center'>
            <a href="#"><p className='dark:text-[#ffb39b] text-[#14303f] mx-2 text-sm font-semibold cursor-pointer font-Montserrat'>Deep Pomal</p></a>
          </div>
          <div className='border-b border-l border-b-[#14303f] border-l-[#14303f] dark:border-b-[#ffb39b] dark:border-l-[#ffb39b] flex w-1/2 p-3 items-center justify-center'>
            {
            !isDark?
              <LightModeIcon className='text-[#14303f] text-sm' />
              :
              <DarkModeIcon className='text-[#ffb39b] text-sm'/>
            }
            <p className='dark:text-[#ffb39b] text-[#14303f]  mx-2 text-sm font-semibold cursor-pointer font-Montserrat'
            onClick={handleThemeSwitch}>Mode</p>
          </div>
        </div>
        <div className='flex-row flex md:flex lg:flex items-center justify-center lg:border-x border-b lg:border-x-[#14303f] lg:dark:border-x-[#ffb39b] 
        border-b-[#14303f] dark:border-b-[#ffb39b] w-full lg:w-3/5 p-4' >
          <a href="#projects"><p className='dark:text-[#ffb39b] text-[#14303f] lg:mx-6 mx-2 text-sm md:text-lg lg:text-xl font-semibold cursor-pointer font-Montserrat'>Projects</p></a>
          {/* <a href="#exp"><p className='dark:text-[#ffb39b] text-[#14303f] lg:mx-6 mx-2 text-sm md:text-lg  lg:text-xl font-semibold cursor-pointer font-Montserrat'>Experience</p></a> */}
          <a href="#ach"><p className='dark:text-[#ffb39b] text-[#14303f] lg:mx-6 mx-2 text-sm md:text-lg lg:text-xl font-semibold cursor-pointer font-Montserrat'>Achievements</p></a>
          <a href="#ed"><p className='dark:text-[#ffb39b] text-[#14303f] lg:mx-6 mx-2 text-sm md:text-lg lg:text-xl font-semibold cursor-pointer font-Montserrat'>Education</p></a>
        </div>
        <div className='border-b border-b-[#14303f] dark:border-b-[#ffb39b] w-1/5 p-4 hidden lg:flex items-center justify-center'>
          {
          !isDark?
            <LightModeIcon className='text-[#14303f] ' />
            :
            <DarkModeIcon className='text-[#ffb39b]'/>
          }
          <p className='dark:text-[#ffb39b] text-[#14303f] lg:mx-6 mx-2 text-sm md:text-lg lg:text-xl font-semibold cursor-pointer font-Montserrat'
          onClick={handleThemeSwitch}>Mode</p>
        </div>
    </div>
  )
}
