import * as React from 'react'
import aboutImg from '../images/ABOUT.png';

const About = ({content}) => {
  return (
    <div className="about-section">
      <a className="anchor" id="About"/>
      <img id="about-title" src={aboutImg}></img>
      <div className="about-paragraph" id="about-paragraph-college-hackathon">
        <div className="about-header" id="about-header-college-hackathon">
          <h2>The College Hackathon</h2>
        </div>
          <p>In the context of a hackathon, the word "hack" is used to describe how multiple technologies can be used together in a new and innovative way. Teams of up to four people spend the weekend working on innovative software and hardware solutions to real-world problems. These projects range in platform and application, including elements of web development, mobile applications, drones, and more. However, many times the most important aspect of a hackathon are the community it generates and skills that inexperienced hackers walk away with.</p>
      </div>
      <div className="about-paragraph" id="about-paragraph-pennapps-difference">
        <div className="about-header" id="about-header-pennapps-difference">
          <h2>The PennApps Difference</h2>
        </div>
          <p>Founded in the fall of 2009, PennApps was the nation's first student-run college hackathon. Since then, it has spurred a revolution in the way engineering students develop and showcase their skills, spawning an entire "league" of hackathons across the nation. In the past years, over a thousand students from the U.S. and other countries like Switzerland, Canada, England, India and Singapore have converged in Philadelphia for a weekend of creation and discovery. Both beginners and experts alike will work together, learn and compete to become better engineers. This year, PennApps is expanding its focus on learning by emphasizing the collaboration of new and experienced hackers and providing more learning opportunities and workshops throughout the weekend.
        </p>
      </div>
      <div className="about-paragraph" id="about-paragraph-campus-ambassadors">
        <div className="about-header" id="about-header-campus-ambassadors">
          <h2>Campus Ambassadors</h2>
        </div>
          <p>At the start of every cycle, we ask the PennApps family if they would like to be a campus ambassador for PennApps. What this entails is spreading the word about PennApps at your local school, college or university. Campus ambassadors are an important part of the PennApps community and receive custom swag and perks at and before the event. Campus ambassadors have been announced.</p>
      </div>
    </div>
  )
};

export default About
