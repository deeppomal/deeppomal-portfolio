import React,{useState,useEffect} from 'react'
import { HomeScreen } from '../components/HomeScreen'
import styles from '../styles/Home.module.css'
import { Portfolio } from '../components/Portfolio'
import { Experience } from '../components/Experience'
import { Achievements } from '../components/Achievements'
import { Navbar } from '../components/Navbar'
import Head from 'next/head'
import { Education } from '../components/Education'

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

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
         setIsVisible(true);
    } else {
         setIsVisible(true);
    }
  };
  return (
    <div className='min-h-screen' >
      <Head>
        <title>Deep Pomal</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar isVisible={isVisible} isMenuVisible={isMenuVisible} setIsMenuVisible={()=>setIsMenuVisible(!isMenuVisible)} />
      <HomeScreen />
      <Portfolio />
      <Experience />
      <Achievements />
      <Education />
    </div>
  )
}
