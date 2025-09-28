import React from "react";
import "./Signup.css";
export default function CardandImg() {
  return (
    <div className=" h-100 p-3">
      <div className="row   flex-column justify-content-center align-items-center ">
        <div className="col-12 card-img pb-5 mb-5 "  style={{paddingLeft: "25%"}}>
          <img src="/img/zoomTopia.png"></img>
        </div>
        <div className="col-12"> 
          <div className="custom-card">
            <h3 className="text-center pb-3">Create your Free Basic account</h3>
            <ul >
              <li>
                ✅ Unlimited meetings for up to 40 minutes and 100 <br></br> participants
              </li>
              <li>
                ✅ Automated captions to help make meetings more <br></br> inclusive
              </li>
              <li>✅ Secure, HD-quality audio and video</li>
              <li>✅ 3 editable whiteboards</li>
              <li>✅ Team Chat for collaboration, file sharing, and more</li>
              <li>✅ Zoom Mail and Calendar in the Zoom app</li>
              <li>✅ Notes for creating and sharing editable documents</li>
              <li>
                ✅ Screen sharing, virtual backgrounds, breakout <br></br> rooms, and
                local recording
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
