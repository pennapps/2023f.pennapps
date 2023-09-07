import * as React from 'react';
import {Link} from "gatsby";
import logo from '../images/PennAppsLogo.png'

import Schedule from '../../content/schedule.mdx'

const SchedulePage = () => {
  return <main>
    <nav style={{position: "fixed"}}>
      <a href="/#Logistics" className="links">
        <button>Back</button>
      </a>
      <Link href="/"><img src={logo} className="navlinks-logo"/></Link>
    </nav>
    <div className="info-page">
      <Schedule/>
    </div>
  </main>;
}

export default SchedulePage;