import React from 'react'
import coin from '../images/apply_button.png'
import apply_bg from '../images/apply_bg.png'

//import Header from '../../content/heading.mdx'
/*
# PennApps XXIII

## September 2-4, 2022

### Beleaf it or not, applications are open!

Hosted at the nation's first university, PennApps is the original college hackathon. Come join us to learn something new, build an app, or start a company. Let’s continue to make history together.

*/
function Heading() {
  return (
    <div className="heading-parent">
      <div className="row">
        <div className="box"></div>
        <div className="heading">
          <div className="header-box"> 
            <div className="dots">
              <div className="purple-top-left"></div>
              <div className="purple-top-right"></div>
            </div>
            <h1>Game On! Applications are now open.</h1>
            <div className="dots">
              <div className="purple-bottom-left"></div>
              <div className="purple-bottom-right"></div>
            </div>
          </div>
        </div>
        <div className="box"></div>
      </div>
      <div className="row">
        <div className="box"></div>
        <div className="heading">
          <div className="desc-box">
                <div className="dots">
                  <div className="blue-top-left"></div>
                  <div className="blue-top-right"></div>
                </div>
                <h2>Hosted at the nation's first university, PennApps is the original college hackathon. Come join us to learn something new, build an app, or start a company. Let’s continue to make history together.</h2>
                <div className="dots">
                  <div className="blue-bottom-left"></div>
                  <div className="blue-bottom-right"></div>
                </div>
              </div>
          </div>
          <div className="box"></div>
      </div>
      <div className="image-row">
        <div className="apply-content">
          <a href="#apply"><img src={coin}></img></a>
        </div>
        <img src={apply_bg} id="apply-bg"></img>
      </div>
    </div>
    
  )
}
// button not showing up, will fix later
//        <a href="#apply"><img src={coin}></img></a> 

export default Heading