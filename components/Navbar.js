import React,{useState,useEffect} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image'

export const Navbar = () => {
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
    <div className={`flex justify-center items-center fixed top-0 w-full lg:py-12 py-8 
    ${isVisible ? 'bg-[#34353a]' : 'bg-[#34353a]/80'} drop-shadow-md  z-10`}>
       <Image
          src='/static/logo.png'
          alt='logo'
          width={600}
          height={600}
          className='absolute left-0  lg:top-4 cursor-pointer h-15 w-20 md:h-20 md:w-36 lg:h-24 lg:w-44'
        />
        <div className='flex-row flex items-center'>
          <a href="#projects"><p className='text-[#f6f6f6] lg:mx-6 mx-2 text-sm md:text-lg lg:text-xl cursor-pointer font-Montserrat'>Projects</p></a>
          <a href="#exp"><p className='text-[#f6f6f6] lg:mx-6 mx-2 text-sm md:text-lg  lg:text-xl cursor-pointer font-Montserrat'>Experience</p></a>
          <a href="#ach"><p className='text-[#f6f6f6] lg:mx-6 mx-2 text-sm md:text-lg lg:text-xl cursor-pointer font-Montserrat'>Achievements</p></a>
        </div>
        {/* <div className='bg-[#3d3e42] px-3 py-2 rounded flex justify-between items-center'>
          <input type="text" className='text-[#f6f6f6] placeholder:text-[#969698] bg-[#3d3e42] mr-2 outline-none w-28' placeholder='Search' />
          <SearchIcon style={{marginLeft:8,color:'#969698'}}  />
        </div> */}
    </div>
  )
}
