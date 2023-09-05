import React from 'react'
import meta from '../../static/sponsors/2022-meta.png'
import sponsorTitle from '../images/sponsor.png';
import sig from '../images/sponsors_logo/SIG.png';
import bloomberg from '../images/sponsors_logo/Bloomberg.jpeg';
import fiveRings from '../images/sponsors_logo/Five-Rings.png';
import viam from '../images/sponsors_logo/Viam.png';
import capitalOne from '../images/sponsors_logo/Capital-One.png';
import usbClubs from '../images/sponsors_logo/USB-Club.png';
import twilio from '../images/sponsors_logo/Twilio.png';
import janeStreet from '../images/sponsors_logo/Jane-Street.png';
import scm from '../images/sponsors_logo/SCM.png';


function Sponsors() {
  return (
    <div className="section">
      <a className="anchor" id="sponsors"/>
      <img id="sponsor-title" src={sponsorTitle}></img>
      <div className="sponsor-logo-container">
        <div id="SIG">
          <a href="https://www.sig.com">
            <img src={sig} alt="Sig"/>
          </a>
        </div>
        <div id="Bloomberg">
          <a href="">
            <img src={bloomberg} alt="Bloomberg"/>
          </a>
        </div>
        <div id="Five-Rings">
          <a href="https://fiverings.com/ ">
            <img src={fiveRings} alt="Five Rings"/>
          </a>
        </div>
        <div id="Viam">
          <a href="https://www.viam.com/">
            <img src={viam} alt="Viam"/>
          </a>
        </div>
        <div id="Capital-One">
          <a href="">
            <img src={capitalOne} alt="Viam"/>
          </a>
        </div>
        <div id="USB-Club">
          <a href="https://usb.club/about">
            <img src={usbClubs} alt="USB Club"/>
          </a>
        </div>
        <div id="Twilio">
          <a href=" https://www.twilio.com/en-us">
            <img src={twilio} alt="Twilio"/>
          </a>
        </div>
        <div id="Jane-Street">
          <a href=" https://www.janestreet.com/">
            <img src={janeStreet} alt="Jane Street"/>
          </a>
        </div>
        <div id="SCM">
          <a href=" https://www.scm-lp.com/">
            <img src={scm} alt="Stevens Capital Management"/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Sponsors