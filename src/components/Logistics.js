import React from 'react'
import background from '../images/LogisticsBackground.png'
import mobileBackground from '../images/logistics_bg_mobile.png'
import PrizesIcon from '../images/PrizesIcon.png'
import ScheduleIcon from '../images/ScheduleIcon.png'
import {MDXRenderer} from "gatsby-plugin-mdx";
import {Link} from "gatsby";

function Logistics({content}) {
  return (
    <div key="logistics" className="relative mt-16">
      <img src={background} className="logistics-background hidden md:inline"/>
      <img src={mobileBackground} className="logistics-background md:hidden"/>
      <div className="logistics-body">
        <a className="logistics-anchor" id="logistics"/>
        <MDXRenderer>
          {content}
        </MDXRenderer>
        <div className="logistics-icons">
        <Link to="">
          <IconSquare name={"SCHEDULE"} src={ScheduleIcon} />
        </Link>
        <a>
          <IconSquare name={"PRIZES"} src={PrizesIcon}/>
        </a>
        </div>
      </div>
    </div>
  )
}

function IconSquare({name, src, onClick}) {
  return (
    <div className="logistics-icon-square" onClick={onClick}>
      <div className="logistics-icon-square-container"><img src={src} className="max-h-[80%]"/></div>
      <div>{name}</div>
    </div>
  )
}

export default Logistics
