import React from "react";
import "../Landing.css"
export default function Hero() {
  return (
    <div className="container" style={{color: "white"}}>
      <div className="flex items-center flex-col text-center justify-center "> 
        <h1 className="Hero-heading-for-small-screen" style={{ fontWeight: "600" , lineHeight: "110%" , fontFamily: "Happy Face Semi Bold, Helvetica, Arial, Noto Sans JP, Noto Sans KR, Noto Sans SC, Noto Sans TC, Noto Sans, sans-serif"}} >Find out what's possible <br></br> when work connects</h1>
        <p className="pt-3 font-weight-light" style={{fontSize: "1.0rem" , fontWeight: "00" , lineHeight: "140%"}}>
          Whether you're chatting with teammates or supporting customers, Zoom makes it easier to <br></br> connect, collaborate, and reach goals — all with built-in AI doing the heavy lifting.
        </p>
        <div className="pt-3">
          <button className="btn  btn-dark m-3" style={{backgroundColor: "#000000b7" , padding:"13px" ,fontWeight: "700", borderRadius: "12px"} } >Explore products</button>
          <button className="btn btn-light font-weight-dark" style={{padding: "12px " , fontWeight: "700" , borderRadius: "12px "}}> Find your plan </button>
        </div>
      </div>
    </div>
  );
}
