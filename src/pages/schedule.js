import * as React from 'react';
import {Link} from "gatsby";

import Friday from '../../content/schedule/friday.mdx'
import Saturday from '../../content/schedule/saturday.mdx'
import Sunday from '../../content/schedule/sunday.mdx'

const SchedulePage = () => {
  return <main>
	<nav style={{position: "fixed"}}>
	  <Link to="/#logistics">Back</Link>
      <Link className="nav-pennapps" to="/">PENNAPPS XXIII</Link>
    </nav>
    <div class="schedule">
	  <h1>PennApps XXIII Schedule</h1>
      <Friday />
	  <hr />
      <Saturday />
	  <hr />
	  <Sunday />
    </div>
  </main>;
}

export default SchedulePage;