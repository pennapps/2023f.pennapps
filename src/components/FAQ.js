import * as React from 'react'
import Collapsible from 'react-collapsible';
import ReactMarkdown from 'react-markdown'
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc"
import bgleft from '../images/FAQBGLeft.svg'
import bgright from '../images/FAQBGRight.svg'
import '../styles/index.css'

const FAQ = ({content}) => {
  const faqs = content.split("## ").slice(1);
  const bg_colors = ['#14113E','#F8E46725','#43B2E525','#EB73A225'];
  const text_colors = ['#D3CCEF','#F9F6E9','#EDF9FF','#FFF5F9'];

  const output = faqs.map((faq, index) => {
    let tokens = faq.split("\n");
    let question = tokens[0];
    let answers = [];
    for (let i = 1; i < tokens.length; i++) {
      if (tokens[i]) {
        answers.push(
          <div className="faq-answer"
          key={tokens[i]}>
            <ReactMarkdown>
              {tokens[i]}
            </ReactMarkdown>
          </div>
        );
      }
    }
    let trigger_closed = <div className="faq-collapsible" style={
{backgroundColor: bg_colors[index % 4]}} >
      <h2 className="faq-question" style={{color: text_colors[index % 4]}}
      key={question}>{`${question}`}</h2>
      <VscTriangleDown style={{ color: "#FFFFFF", minWidth: "16px" }} />

    </div>

    let trigger_open = <div className="faq-collapsible" style={
  {backgroundColor: bg_colors[index % 4]}} >      
      <h2 className="faq-question" style={{color: text_colors[index % 4]}}
      key={question}>{`${question}`}</h2>
          <VscTriangleUp style={{ color: "#FFFFFF", minWidth: "16px" }} />

    </div>

    return (
      <Collapsible trigger={trigger_closed} triggerWhenOpen={trigger_open}>
        {answers}
      </Collapsible>
    );
  });

  return (
    <div key="faqs" className="faq-section">
        <a className="anchor" id="FAQs"/>
        <h1 className="faq-title">FAQs</h1>
        <div className="faq-box flex justify-between w-screen">
          <div className="faq-lside"></div>
          <div className="faq-content">
            {output}
          </div>
          <div className="faq-rside"></div>
        </div>
    </div>
  )
}

export default FAQ