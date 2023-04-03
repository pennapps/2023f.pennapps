import React from 'react'
import meta from '../../static/sponsors/2022-meta.png'

function Sponsors() {
  return (
    <div className="section">
      <a className="anchor" id="sponsors"/>
      <h1>Sponsors</h1>
      <div className="sponsor-logo-container">
        <div id="meta">
          <a href="https://www.metacareers.com/careerprograms/students/">
            <img src={meta} alt="Meta"/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Sponsors