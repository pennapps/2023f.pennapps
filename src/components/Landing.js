import React, { useEffect, useState } from 'react'
import landingBg from '../images/landing_bg.svg'
import landingLogo from '../images/pennapps-logo.svg'

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
      <img src={landingBg} className="landing-background"/>
      <img src={landingLogo} className="landing-logo"/>
      <div className="landing-countdown relative"> 
        <TimeSquare amt={timeUntil.d} unit={"DAYS"}/>
        <TimeSquare amt={timeUntil.h} unit={"HOURS"}/>
        <TimeSquare amt={timeUntil.m} unit={"MINUTES"}/>
        <TimeSquare amt={timeUntil.s} unit={"SECONDS"}/>
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