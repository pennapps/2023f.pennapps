import React from 'react'
import calendarIcon from '../images/calendar-icon.svg'
import trophyIcon from '../images/trophy-icon.svg'
import background from '../images/LogisticsBackground.png' //change this file
import mobileBackground from '../images/logistics_bg_mobile.png' //change this file
import {MDXRenderer} from "gatsby-plugin-mdx";
import {Link} from "gatsby";

function Logistics({content}) {
  return (
    <div key="logistics" className="logistics-content">
      <div className="about-paragraph bg-[#C1ECFF]">
        <a className="anchor" id="Logistics"/>
        <div className="about-header bg-[#4bc8f9]">
          <h2>Logistics</h2>
        </div>
        <p> Interested in more details about the hackathon? Click the buttons below to learn
          more!</p>
        <div className="flex justify-center mx-auto">
          <IconSquare src={calendarIcon} name="Schedule" onClick={() => {
            window.location.href = "/schedule/"
          }}/>
          <div className="w-16"></div>
          <IconSquare src={trophyIcon} name="Tracks and Prizes" onClick={() => {
            window.location.href = "/tracks-and-prizes/"
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
