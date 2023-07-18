import * as React from 'react'
import ghosts from '../images/ghosts.svg'

const Apply = ({id}) => {
  return (
    <div key={id} className="section">
      <a className="anchor" id={id}/>
      <div className="apply-box" id="punch-holes">
        <div className="apply-border">
          <div className="apply-header">
            <h1>The Application Process</h1>
          </div>
          <div className="apply-text">
            <p>Each year, PennApps receives thousands of qualified applications, but unfortunately,
              we can only accept a limited number of participants. To ensure fairness, we ask
              everyone to share a bit about themselves, so we can invite those who have shown
              interest and skill.</p>
            <p>We don't expect everyone to have been to a hackathon before, in fact, we love
              first-time hackers having been there ourselves when we started! We just hope to bring
              those who are passionate about building something awesome and learning something
              new.</p>
            <p>While we cannot accept everyone, we strive to build a diverse community of amazing
              hackers. Simply showcase your work, share why you want to attend PennApps, and we will
              do our best to bring you here! Penn students may register with their Penn emails when
              applying. Apply now at <a href="https://apply.pennapps.com/">apply.pennapps.com</a>!
            </p>
            <p></p>
          </div>
        </div>
      </div>
      <div id="ghosts">
        <img src={ghosts}></img>
      </div>
    </div>
  )
}

export default Apply