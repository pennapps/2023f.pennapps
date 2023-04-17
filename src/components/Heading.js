import React from 'react'
import stateOne from '../images/ApplyStateOne.png'
import stateTwo from '../images/ApplyStateTwo.png'

function Heading() {
  return (
    <div className="heading">
        <div>
          <div className="gamebox">
            <h1>Game On! Applications are now open.</h1>
          </div>
          <div className="desbox">
            <h2>Hosted at the nation's first university, PennApps is the original college hackathon. Come join us to learn something new, build an app, or start a company. Let’s continue to make history together.</h2>
          </div>
          <div className="imageRow">
            <a href="#apply">
              <img src={stateOne} href="#apply"></img>
            </a>
          </div>
        </div>
    </div>
  )
}
// button not showing up, will fix later
export default Heading