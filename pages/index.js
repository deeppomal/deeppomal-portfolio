import React,{useState,useEffect} from 'react'
import { HomeScreen } from '../components/HomeScreen'
import styles from '../styles/Home.module.css'
import { Portfolio } from '../components/Portfolio'
import { Experience } from '../components/Experience'
import { Achievements } from '../components/Achievements'
import { Navbar } from '../components/Navbar'

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () =>
       window.removeEventListener("scroll", listenToScroll);
  }, [])
  const listenToScroll = () => {
    let heightToHideFrom = 600;
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
    <div className='min-h-screen ' >
      {isVisible&&<Navbar />}
      <HomeScreen />
      <Portfolio />
      <Experience />
      <Achievements />
    </div>
  )
}
