import React,{useState,useEffect} from 'react'
import Image from 'next/image'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Navbar = ({setIsMenuVisible,isMenuVisible}) => {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () =>
       window.removeEventListener("scroll", listenToScroll);
  }, [])
  const listenToScroll = () => {
    let heightToHideFrom = 150;
    const winScroll = document.body.scrollTop ||
        document.documentElement.scrollTop;
  
    if (winScroll > heightToHideFrom) {
       isVisible &&      // to limit setting state only the first time
         setIsVisible(false);
    } else {
         setIsVisible(true);
    }
  };
  return (
    <div className={`flex justify-center items-center fixed top-0 w-full lg:py-10 py-8 
      bg-[#34353a]/95 drop-shadow-md z-50`}>
        <a href="#"><Image
          src='/static/logo.png'
          alt='logo'
          width={600}
          height={600}
          className='absolute left-0 top-2 lg:top-2 cursor-pointer h-12 w-20 md:h-20 md:w-36 lg:h-24 lg:w-44'
        /></a>
        <div className='flex-row md:flex lg:flex items-center hidden '>
          <a href="#projects"><p className='text-[#f6f6f6] lg:mx-6 mx-2 text-sm md:text-lg lg:text-xl font-semibold cursor-pointer font-Montserrat'>Projects</p></a>
          <a href="#exp"><p className='text-[#f6f6f6] lg:mx-6 mx-2 text-sm md:text-lg  lg:text-xl font-semibold cursor-pointer font-Montserrat'>Experience</p></a>
          <a href="#ach"><p className='text-[#f6f6f6] lg:mx-6 mx-2 text-sm md:text-lg lg:text-xl font-semibold cursor-pointer font-Montserrat'>Achievements</p></a>
          <a href="#ed"><p className='text-[#f6f6f6] lg:mx-6 mx-2 text-sm md:text-lg lg:text-xl font-semibold cursor-pointer font-Montserrat'>Education</p></a>
        </div>
        <div className='cursor-pointer  absolute right-10 md:hidden lg:hidden z-50' onClick={setIsMenuVisible}>
          {!isMenuVisible ? <MenuIcon className='text-[#f6f6f6] text-3xl '/>
          :
          <CloseIcon className='text-[#f6f6f6] text-3xl ' />}
        </div>
        <div
          className={`top-0 right-0 w-3/4 fixed z-30 bg-[#2a2b2e]  ease-in-out duration-300 ${
            isMenuVisible ? "translate-x-0 " : "translate-x-full"
          } p-5`}
        >
          <div>
            <a href="#" onClick={setIsMenuVisible}><p className='text-[#f6f6f6] cursor-pointer my-7 font-Montserrat font-semibold text-lg'>Home</p></a>
            <a href="#projects" onClick={setIsMenuVisible}><p className='text-[#f6f6f6] cursor-pointer my-7 font-Montserrat font-semibold text-lg'>Projects</p></a>
            <a href="#exp"  onClick={setIsMenuVisible}><p className='text-[#f6f6f6] cursor-pointer my-7 font-Montserrat font-semibold text-lg'>Experience</p></a>
            <a href="#ach"  onClick={setIsMenuVisible}><p className='text-[#f6f6f6] cursor-pointer my-7 font-Montserrat font-semibold text-lg'>Achievements</p></a>
            <a href="#ed" onClick={setIsMenuVisible}><p className='text-[#f6f6f6] cursor-pointer my-7 font-Montserrat font-semibold text-lg'>Education</p></a>
          </div>
          <div className='flex justify-evenly items-center'>
              <a href="https://github.com/deeppomal" target={'_blank'} rel="noreferrer"><GitHubIcon className='text-3xl  mt-6  text-[#f6f6f6] cursor-pointer'/></a>
              <a href="https://twitter.com/deeppomal98" target={'_blank'} rel="noreferrer"><TwitterIcon className='text-3xl  mt-6  text-[#f6f6f6] cursor-pointer'/></a>
              <a href="https://www.linkedin.com/in/deep-pomal-87751099/" target={'_blank'} rel="noreferrer"><LinkedInIcon className='text-3xl  mt-6  text-[#f6f6f6]  cursor-pointer' /></a>
          </div>
        </div>
    </div>
  )
}
