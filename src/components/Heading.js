import React from 'react'
import Header from '../../content/heading.mdx'

function Heading() {
  return (
    <div className="heading">
        <div>
          <Header/>
          <a href="#apply"><button>APPLY</button></a> 
        </div>
    </div>
  )
}
// button not showing up, will fix later
export default Heading