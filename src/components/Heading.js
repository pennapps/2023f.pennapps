import React from 'react'
import coin from '../images/apply_button.png'
import apply_bg from '../images/apply_bg.png'

/*
.dots{
  @apply flex justify-between;
}

.dot{
  @apply h-[19px] w-[19px] m-[10px] rounded-full;
}
*/
function Heading() {

  return (
    <div className="heading-parent"> 
      <div className="row bg-[#31398C]">
        <div className="box bg-[#6D79FF] border-[#5562E9] border-r-[15px] border-b-[15px] w-screen h-[18vh] rounded-tl-[3.5em]"></div>
        <div className="box bg-[#5562E9] border-[#6D79FF] border-l-[15px] border-b-[15px] w-screen h-[18vh] rounded-tr-[3.5em]"></div>
      </div>
      <div className="row">
        <div className="box bg-[#5562E9] border-[#6D79FF] border-r-[15px] border-y-[15px] "></div>
        <div className="heading">
          <div className="header-box">
            <RowDot color={"#9773FF"}/>
            <h1>Game On! Applications are now open.</h1>
            <RowDot color={"#9773FF"}/>
          </div>
        </div>
        <div className="box bg-[#6D79FF] border-[#5562E9] border-l-[15px] border-y-[15px]"></div>
      </div>
      <div className="row">
        <div className="box bg-[#6D79FF] border-[#5562E9] border-r-[15px] border-y-[15px]"></div>
        <div className="heading">
          <div className="desc-box">
            <RowDot color={"#00B7FF"}/>
            <h2>Hosted at the nation's first university, PennApps is the original college hackathon. Come join us to learn something new, build an app, or start a company. Let’s continue to make history together.</h2>
            <RowDot color={"#00B7FF"}/>
          </div>
        </div>
        <div className="box bg-[#5562E9] border-[#6D79FF] border-l-[15px] border-y-[15px] "></div>
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

function RowDot(props){
  return (
    <div className="dots">
      <div className="dot" style={{backgroundColor: props.color}}></div>
      <div className="dot" style={{backgroundColor: props.color}}></div>
    </div>
  )
}

export default Heading