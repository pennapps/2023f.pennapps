import React from 'react'
import Header from '../../content/heading.mdx'
import coin from '../images/apply_coin.png'
import slot from '../images/coin_slot.png'

function Heading() {
  return (
    <div className="heading">
        <div>
          <Header/>
          <div className="imageRow">
            <a href="#apply">
              <img src={coin} id="applyCoin" href="#apply"></img>
            </a>
            <img src={slot} id="applyButton1"></img>
            <img src={slot} id="applyButton1"></img>
          </div>
        </div>
    </div>
  )
}
// button not showing up, will fix later
export default Heading