import React, {useState} from 'react'
import logo from '../images/PennAppsLogo.png'
import {FaBars} from "@react-icons/all-files/fa/FaBars";


//const links = ['about', 'apply', 'logistics', 'faqs', 'sponsors']
const links = ['About', 'Apply', 'FAQs']

function Navbar() {
  const mlhHref = "https://mlh.io/seasons/2022/events?utm_source=na-hackathon&amp;utm_medium=TrustBadge&amp;utm_campaign=2022-season&amp;utm_content=white"; // to be replaced
  const mlhBadgeSrc = "https://s3.amazonaws.com/logged-assets/trust-badge/2022/mlh-trust-badge-2022-white.svg"; //to be replaced

/*  return (
    <nav>
      <a className="nav-pennapps" href="#top">PENNAPPS</a>
      <div className="navlinks-banner">
        <Links links={links}/>
        <a id="mlh-trust-badge" className="hidden sm:inline" href={mlhHref} target="_blank">
          <img src={mlhBadgeSrc} alt="Major League Hacking 2023 Hackathon Season"/>
        </a>
      </div>
    </nav>
  ) */

    return(
      <nav>
        <a href="#top"><img src={logo}/></a>
        <div className="navlinks-banner">
          <Links links={links}/>
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