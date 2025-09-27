import React from "react";
import Navbar from "../Navbar";
import "./Signup.css";
export default function Signup() {
  return (
    <>
      <div className="body">
        <div className="stick-top">
          <Navbar></Navbar>
        </div>

        <div className="row ">
          <div
            className=" col-lg-6 col-md-12 col-sm-12 col-xs-12 col1 "
            style={{ height: "100vh", borderRight: "2px solid White " }}
          >
            <div
              className="Signup-card"
              style={{
                backgroundColor: "white",
                color: "black",
                width: "fit-content",
                margin: "auto",
                padding: "30px",
                borderRadius: "12px",
                marginTop: "100px",
              }}
            >
              <h3 style={{ fontWeight: "600" , textAlign: "center" }}>
                Create your free Basic account
              </h3>
              <ul className="list-unstyled Ul-list-of-Signup-page ">
                <li className="mt-4">
                  ✅ Unlimited meetings for up to 40 minutes and 100
                  participants each
                </li>
                <li>
                  ✅ Automated captions to help make meetings more inclusive
                </li>
                <li>✅ Secure, HD-quality audio and video</li>
                <li>✅ 3 editable whiteboards</li>
                <li>✅ Team Chat for collaboration, file sharing, and more</li>
                <li>✅ Zoom Mail and Calendar in the Zoom app</li>
                <li>✅ Options for creating and sharing editable documents</li>
                <li>
                  ✅ Screen sharing, virtual backgrounds, breakout rooms, and
                  local recording
                </li>
              </ul>
            </div>

          </div>
       <div className="col col-lg-6 col-sm-12 col-md-12">

            </div>
        </div>
      </div>
    </>
  );
}
