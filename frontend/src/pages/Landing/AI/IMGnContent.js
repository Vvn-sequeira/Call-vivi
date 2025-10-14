import React from "react";
import "./AI.css";
export default function IMGnContent() {
  return (
    <div>
      <div className="row  Flex-cont-of-AI">
        <div className="col  AI-IMG-Cont">
          <img src="/img/AI.png"></img>
        </div>
        <div className="col-md-4 col-lg-4 col-sm-12  AI-Text_cont">
          <div className="row innerRowOfImgCont ">
            <div className="col firstColOfInnerRow innterRowCol">
              <h4>Zoom AI Companion helps by : </h4>
              <cl>
                <li>Summarizing meetings fast</li>
                <li>Quickly generating first draft documents</li>
                <li>
                  Saving users an estimated 6 hours per week in meetings**
                </li>
              </cl>
            </div>
            <span className="AI-contentnt-divider for-big-screen  text-muted  pt-4  pb-4">____________________</span>
            <div className="col innterRowCol ">
              <img src="/img/aic-testimonial-logo.png"></img>
              <p className="Shiny-text-of-innerRow">
                "It always comes down to 'I want to work on my business, not in
                my business.' Zoom AI Companion allows me to have that time back
                to do the work that only I can do."
              </p>
              <small> Vivian Sequeira Founder,<br></br> couch + cork</small>
            </div>
          </div>
        </div>
      </div>
        <div className="Last-text-of-AI">
             <p>*AI Companion 3.0 features and functionality coming November 2025</p>
      <p>*6 hours estimated potential time savings calculated with Zoom ROI Calculator based on per-user basis for a user averaging 20 thirty-minute meetings a week using meeting summaries. Results not guaranteed</p>
        </div>
    </div>
  );
}
