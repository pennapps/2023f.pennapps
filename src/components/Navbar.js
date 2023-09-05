import React, {useState} from 'react'
import logo from '../images/PennAppsLogo.png'
import {FaBars} from "@react-icons/all-files/fa/FaBars";
import mlhBadgeSrc from '../images/mlh-trust-badge-blue-2024.svg'

const links = ['About', 'Apply', 'Logistics', 'FAQs', 'Sponsors']

function Navbar() {
  const mlhHref = "https://mlh.io/seasons/2023/events";
    return(
      <nav>
        <a href="#top"><img src={logo} className="navlinks-logo"/></a>
        <div className="navlinks-banner">
          <Links links={links}/>
          <a id="mlh-trust-badge" className="hidden sm:inline" href={mlhHref} target="_blank">
            <img src={mlhBadgeSrc} alt="Major League Hacking 2024 Hackathon Season"/>
          </a>
        </div>
      </nav>
    )

}

function Links(props) {
  const [showMenu, setShowMenu] = useState(false)
  const toggleShowMenu = () => setShowMenu(prev => !prev)

  return (
    <div className="links">
      {/* shows if screen is not sm */}
      {props.links.map((link, i) =>
        <a key={i} className="hidden sm:inline" href={`#${link}`}><button>{link}</button></a>)
      }

      {/* shows if screen is sm */}
      <button className="sm:hidden"><FaBars size="1.5em" onClick={toggleShowMenu}/></button>
      <div className={`mobile-nav ${showMenu ? "max-h-screen" : "max-h-0"}`}>
        {props.links.map((link, i) =>
          <a key={i} onClick={toggleShowMenu} href={`#${link}`}>{link.toUpperCase()}</a>)
        }
      </div>
    </div>
  )
}

export default Navbar