"use client"
import React,{ useCallback, useEffect, useState } from 'react'
import AppBar from './components/appbar'
import Menu from './components/menu';
import InfoText from './components/infoText';
import BannerAutoScroll from './components/bannerAutoScroll';

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);

  // function toggleMenu() : void{
  //   setShowMenu(!showMenu);
  // }

  const toggleMenu = useCallback(()=>{
    setShowMenu(prevValue => !prevValue);
  },[showMenu]);

  return (
    <main className="mainPage">
      <Menu showValue={showMenu} toggleFunc={toggleMenu} isCross={true}/>
      <div className="mainComponents">
        <AppBar showValue={showMenu} toggleFunc={toggleMenu} isCross={false}/>
        <InfoText/>
        <BannerAutoScroll/>
      </div>
    </main>
  )
}
