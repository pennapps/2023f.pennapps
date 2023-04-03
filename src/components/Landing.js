import React, { useEffect, useState } from 'react'
import bannerThemed from '../images/PennAppsF22_BannerThemed.png' // replace this
import banner from '../images/PennAppsF22_Banner.png' // replace this
import landingBg from '../images/landing_bg.png' // replace this
// import square from '../images/PennAppsF22_SquareLogo.png'
import { VscFoldDown } from "react-icons/vsc"

const target = new Date("September 2 2023 11:00:00 EST") //1 hour difference bc of daylight savings so 11:00 => 12:00

function Landing() {
  const [mSecUntil, setMSecUntil] = useState(target - Date.now())
  useEffect(() => {
    const interval = setInterval(() => {
      setMSecUntil(target - Date.now())
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  const getTimeUntil = () => {
    let timeUntil = mSecUntil
    let d = Math.floor(timeUntil / (1000 * 60 * 60 * 24));
    timeUntil -= d * 1000 * 60 * 60 * 24
    let h = Math.floor(timeUntil / (1000 * 60 * 60));
    timeUntil -= h * 1000 * 60 * 60
    let m = Math.floor(timeUntil / (1000 * 60))
    timeUntil -= m * 1000 * 60
    let s = Math.floor(timeUntil / 1000)
    if (d < 0) {
      d = 0
      h = 0
      m = 0
      s = 0
    }
    return {d, h, m, s}
  }

  const timeUntil = getTimeUntil()

  const scrollDown = () => {
    window.scrollBy(0, window.innerHeight);
  }

  return (
    <div className="landing">
      <div className="landing-image">
        <img src={bannerThemed} className="hidden md:inline"/>
        <img src={banner} className="md:hidden"/>
        <h2>Sustainability</h2>
        <h2>September 2-4, 2022</h2>
      </div>
      <div className="landing-countdown lg:pb-56">
        <TimeSquare amt={timeUntil.d} unit={"DAYS"}/>
        <TimeSquare amt={timeUntil.h} unit={"HOURS"}/>
        <TimeSquare amt={timeUntil.m} unit={"MINUTES"}/>
        <TimeSquare amt={timeUntil.s} unit={"SECONDS"}/>
      </div>
      <VscFoldDown className="landing-chevron" onClick={scrollDown} />
      <img src={landingBg} className="w-full absolute bottom-0 hidden md:inline" />
    </div>
  )
}

function TimeSquare(props) {
  return (
    <div className="landing-countdown-square">
      <h1 className="mb-0">{props.amt}</h1>
      <h4 className="text-emerald">{props.unit}</h4>
    </div>
  )
}

export default Landing