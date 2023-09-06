import * as React from 'react';
import {Link} from "gatsby";
import logo from '../images/PennAppsLogo.png'

import Friday from '../../content/schedule/friday.mdx'
import Saturday from '../../content/schedule/saturday.mdx'
import Sunday from '../../content/schedule/sunday.mdx'

const SchedulePage = () => {
  return <main>
    <nav style={{position: "fixed"}}>
      <a href="/#Logistics" className="links">
        <button>Back</button>
      </a>
      <Link href="/"><img src={logo} className="navlinks-logo"/></Link>
    </nav>
    <div className="info-page">
      <h1>PennApps XXIV Schedule</h1>
      <Friday/>
      <hr/>
      <Saturday/>
      <hr/>
      <Sunday/>
    </div>
  </main>;
}

export default SchedulePage;