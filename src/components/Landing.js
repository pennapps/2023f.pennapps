import React, { useEffect, useState } from 'react'
import landingBg from '../images/landing_bg.svg'
import landingLogo from '../images/pennapps-logo.svg'
import { VscFoldDown } from "react-icons/vsc"
import clouds from '../images/cloud.svg'
import banner from '../images/banner.svg'

const target = new Date("September 8 2023 18:00:00 EST")

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
    return { d, h, m, s }
  }

  const timeUntil = getTimeUntil()

  const scrollDown = () => {
    window.scrollBy(0, window.innerHeight);
  }

  const cloudData = [
    { src: clouds, top: '8vw', left: '-2vw', width: "14%"},
    { src: clouds, top: '23vw', left: '1vw', width: "12%" },
    { src: clouds, top: '0vw', left: '93vw', width: "10%"},
    { src: clouds, top: '16vw', left: '88vw', width: "12%"},
  ];

  return (
    <div className="landing">

      <div className="clouds-container overflow-hidden">
        {cloudData.map((cloud, index) => (
          <img
            key={index}
            src={cloud.src}
            alt="Clouds"
            className="clouds"
            style={{ top: cloud.top, left: cloud.left, width: cloud.width }}
          />
        ))}
      </div>

      {/* <div className="sliding-banner">
        <img src={banner} alt="Banner" className="banner-img" top="35%"  />
      </div> */}
      <img src={landingBg} className="landing-background" />
      <img src={landingLogo} className="landing-logo"/>
      <div className="landing-countdown relative z-10">
        <TimeSquare amt={timeUntil.d} unit={"DAYS"} />
        <TimeSquare amt={timeUntil.h} unit={"HOURS"} />
        <TimeSquare amt={timeUntil.m} unit={"MINUTES"} />
        <TimeSquare amt={timeUntil.s} unit={"SECONDS"} />
      </div>
      <div className="info-text absolute z-10 text-[4vw] top-[67vw] md:top-[42vw] md:text-[2.5vw]">
        <p className="text-brightyellow md:text-[#810FFF] drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.4)]">September 8-10, 2023</p>
      </div>
    </div>
  )
}

// navbar jumping issue has to do with landing-countdown

function TimeSquare(props) {
  return (
    <div className="landing-countdown-square">
      <div className="landing-ctdn-amt">{props.amt}</div>
      <h1 className="landing-ctdn-unit">{props.unit}</h1>
    </div>
  )
}

export default Landing