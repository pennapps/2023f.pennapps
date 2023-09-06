import * as React from 'react';
import {Link} from "gatsby";
import logo from '../images/PennAppsLogo.png'

import GeneralTracks from '../../content/tracks_and_prizes/general_tracks.mdx'
import CategoryPrizes from '../../content/tracks_and_prizes/category_prizes.mdx'
import SponsoredPrizes from '../../content/tracks_and_prizes/sponsored_prizes.mdx'

const TracksAndPrizesPage = () => {
  return <main>
    <nav style={{position: "fixed"}}>
      <a href="/#Logistics" className="links">
        <button>Back</button>
      </a>
      <Link href="/"><img src={logo} className="navlinks-logo"/></Link>
    </nav>
    <div className="info-page" id="tracks-and-prizes">
      <h1>PennApps XXIV Tracks and Prizes</h1>
      <GeneralTracks/>
      <hr/>
      <CategoryPrizes/>
      <hr/>
      <SponsoredPrizes/>
    </div>
  </main>;
}

export default TracksAndPrizesPage;