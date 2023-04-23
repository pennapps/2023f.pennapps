import * as React from 'react'
import ReactMarkdown from 'react-markdown'
import caImg from '../images/CampusAmbassadors.png';
import hackImg from '../images/CollegeHackathon.png';
import paDiffImg from '../images/PennAppsDifference.png';

const About = ({content}) => {
  const lines = content.split("\n\n").slice(1);
  const images = [hackImg, paDiffImg, caImg];

  const paragraphs = images.map((image, i) =>
    <div className="about-row">
        <img src={image}/>
        <div className="about-paragraph">
            <ReactMarkdown>{lines[2*i + 1]}</ReactMarkdown>
            <ReactMarkdown>{lines[2*(i + 1)]}</ReactMarkdown>
        </div>
    </div>
  );

  return (
    <div>
        <a className="anchor" id="About"/>
        <div className="section" key="about" id="about">
            <ReactMarkdown>{lines[0]}</ReactMarkdown>
            {paragraphs}
        </div>
    </div>
  );
};

export default About
