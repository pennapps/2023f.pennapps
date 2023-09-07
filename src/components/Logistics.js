import React from 'react'
import logisticsTitle from '../images/logistics-title.svg'
import ddrKnockoff from '../images/DDR_knockoff.svg'
import calendarIcon from '../images/calendar-icon.svg'
import trophyIcon from '../images/trophy-icon.svg'
import background from '../images/LogisticsBackground.png' //change this file
import mobileBackground from '../images/logistics_bg_mobile.png' //change this file
import {MDXRenderer} from "gatsby-plugin-mdx";
import {Link} from "gatsby";

function Logistics({content}) {
  return (
    <div key="logistics" className="logistics-content">
      <a className="anchor" id="Logistics"/>
      <img src={logisticsTitle} className="logistics-title"/>
      <img src={ddrKnockoff}/>
      <div className="logistics-body">
        <p> Interested in more details about the hackathon? Click the buttons below to learn
          more!</p>
        <div className="h-6"></div>
        <div className="flex justify-center mx-auto">
          <IconSquare src={calendarIcon} name="SCHEDULE" onClick={() => {
            window.location.href = "/schedule/"
          }}/>
          <div className="w-16"></div>
          <IconSquare src={trophyIcon} name="PRIZES" onClick={() => {
            window.location.href = "https://pennapps-xxiv.devpost.com/"
          }}/>
        </div>
      </div>
    </div>
  )
}

{/*<div className="">
    <a className="logistics-anchor" id="logistics"/>
    <MDXRenderer>
      {content}
    </MDXRenderer>
    <div className="logistics-icons">
    <Link to="/schedule/">
      SCHEDULE
    </Link>
    </div>
  </div>*/
}

function IconSquare({name, src, onClick}) {
  return (
    <div className="logistics-icon-square cursor-pointer" onClick={onClick}>
      <div className="logistics-icon-square-container"><img src={src} className="max-h-[80%]"/>
      </div>
      <div>{name}</div>
    </div>
  )
}

export default Logistics
