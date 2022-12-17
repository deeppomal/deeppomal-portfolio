import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

export const Navbar = () => {
  return (
    <div className='flex justify-between fixed top-0 w-full p-11 px-28 bg-[#34353a]/60 z-10'>
        <div>
            <h1>DP</h1>
        </div>
        <div className='flex-row flex items-center'>
          <p className='text-[#f6f6f6] mx-6 text-lg cursor-pointer'>Projects</p>
          <p className='text-[#f6f6f6] mx-6 text-lg cursor-pointer'>Experience</p>
          <p className='text-[#f6f6f6] mx-6 text-lg cursor-pointer'>Achievements</p>
          <p className='text-[#f6f6f6] mx-6 text-lg cursor-pointer'>Contact</p>
        </div>
        <div className='bg-[#3d3e42] px-3 py-2 rounded flex justify-between items-center'>
          <input type="text" className='text-[#f6f6f6] placeholder:text-[#969698] bg-[#3d3e42] mr-2 outline-none w-28' placeholder='Search' />
          <SearchIcon style={{marginLeft:8,color:'#969698'}}  />
        </div>
    </div>
  )
}
