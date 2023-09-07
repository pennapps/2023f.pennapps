import React from 'react'
import sponsorTitle from '../images/sponsor.png';
import sig from '../images/sponsors_logo/SIG.png';
import bloomberg from '../images/sponsors_logo/Bloomberg.jpeg';
import fiveRings from '../images/sponsors_logo/Five-Rings.png';
import viam from '../images/sponsors_logo/Viam.png';
import capitalOne from '../images/sponsors_logo/Capital-One.png';
import usbClubs from '../images/sponsors_logo/USB-Club.png';
import aleo from '../images/sponsors_logo/Aleo.svg';
import twilio from '../images/sponsors_logo/Twilio.png';
import janeStreet from '../images/sponsors_logo/Jane-Street.png';
import scm from '../images/sponsors_logo/SCM.png';
import balsamiq from '../images/sponsors_logo/Balsamiq.png';
import axure from '../images/sponsors_logo/Axure.png';
import wolfram from '../images/sponsors_logo/Wolfram-Language.png';
import verbwire from '../images/sponsors_logo/Verbwire.png';
import metaphor from '../images/sponsors_logo/Metaphor.png';
import mack from '../images/sponsors_logo/Mack-Institute.png';
import nordvpn from '../images/sponsors_logo/NordVPN.png';
import nordpass from '../images/sponsors_logo/NordPass.png';
import incogni from '../images/sponsors_logo/incogni-black.png';
import directai from '../images/sponsors_logo/DirectAI.png';

const SPONSORS = {
  "Title": [
    {
      name: 'SIG',
      link: 'https://www.sig.com',
      logo: sig,
    },
  ],
  "Giga": [
    {
      name: 'Bloomberg',
      link: 'https://www.bloomberg.com/company/careers/early-career/',
      logo: bloomberg,
    },
    {
      name: 'Five Rings',
      link: 'https://fiverings.com/',
      logo: fiveRings,
    },
    {
      name: 'Viam',
      link: 'https://www.viam.com/',
      logo: viam,
    },
  ],
  "Mega": [
    {
      name: 'USB Club',
      link: 'https://usb.club/careering',
      logo: usbClubs,
    },
    {
      name: 'Aleo',
      link: 'https://aleo.org/',
      logo: aleo,
    },
    {
      name: 'Stevens Capital Management',
      link: 'https://www.scm-lp.com/',
      logo: scm,
    },
    {
      name: 'Twilio',
      link: 'https://www.twilio.com/en-us',
      logo: twilio,
    },
    {
      name: 'Jane Street',
      link: 'https://www.janestreet.com/',
      logo: janeStreet,
    },
    {
      name: 'Capital One',
      link: 'https://www.capitalonecareers.com/',
      logo: capitalOne,
    },
  ],
  "Other": [
    {
      name: 'Mack Institute',
      link: 'https://mackinstitute.wharton.upenn.edu/',
      logo: mack,
    },
    {
      name: "Metaphor",
      link: 'https://metaphor.systems/',
      logo: metaphor,
    },
  ],
  "Prize": [
    {
      name: 'Balsamiq',
      link: 'https://balsamiq.com/',
      logo: balsamiq,
    },
    {
      name: 'Axure',
      link: 'https://www.axure.com/',
      logo: axure,
    },
    {
      name: 'Wolfram Language',
      link: 'https://www.wolfram.com/language/',
      logo: wolfram,
    },
    {
      name: 'Verbwire',
      link: 'https://www.verbwire.com/',
      logo: verbwire,
    },
    {
      name: "Nord VPN",
      link: 'https://nordsecurity.com/',
      logo: nordvpn,
    },
    {
      name: "Nord Security",
      link: 'https://nordsecurity.com/',

      logo: nordpass,
    },
    {
      name: "Incogni",
      link: 'https://incogni.com/',
      logo: incogni,
    },
    {
      name: "Direct AI",
      link: 'https://directai.io/',
      logo: directai,
    },
  ]
}

function Sponsors() {
  return (
    <div className="section">
      <a className="anchor" id="Sponsors"/>
      <img id="sponsor-title" src={sponsorTitle} alt="sponsor-title"></img>
      <div className="sponsor-logo-container">
        <div className="sponsor-logo-container-inner grid grid-cols-12 gap-4">
          {SPONSORS["Title"].map((n) => (
            <div class="col-span-12">
              <a href={n.link}>
                <img src={n.logo} alt={n.name}/>
              </a>
            </div>
          ))}
          {
            SPONSORS["Giga"].map((n) => (
              <div className="col-span-6 row-auto">
                <a href={n.link}>
                  <img src={n.logo} alt={n.name}/>
                </a>
              </div>
            ))
          }
          {
            SPONSORS["Mega"].map((n) => (
              <div className="col-span-4 row-auto">
                <a href={n.link}>
                  <img src={n.logo} alt={n.name}/>
                </a>
              </div>
            ))
          }
          {
            SPONSORS["Other"].map((n) => (
              <div className="col-span-3 row-auto">
                <a href={n.link}>
                  <img src={n.logo} alt={n.name}/>
                </a>
              </div>
            ))
          }
          {
            SPONSORS["Prize"].map((n) => (
              <div className="col-span-2 row-auto">
                <a href={n.link}>
                  <img src={n.logo} alt={n.name}/>
                </a>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Sponsors