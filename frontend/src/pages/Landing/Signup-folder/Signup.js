import React from "react";
import Navbar from "../../Navbar";

import "./Signup.css";
import SignupFolder from "./SignupFolder";
import CardandImg from "./CardandImg";
export default function Signup() {
   
  return (
    <>
      <div className="body">
             <Navbar></Navbar>
            <div className="divided-for-signup-page">
              <div className="row">
                <div className="col custome-card-and-img-for-big-screen">
                  <CardandImg></CardandImg>
                </div>
                <div className="col custom-form-for-big-screen">
                  <SignupFolder></SignupFolder>
                </div>
              </div>
            </div>
            {/* //////////////////////////////////////////////////////////////////////// */}
            <div className="non-divided-for-mobile-page">
                <div row > 
                  <div className="col custome-card-and-img-for-small-screen">
                   <SignupFolder></SignupFolder>
                  </div>
                </div>
                <div row > 
                  <div className="col custom-form-for-small-screen">
                    <CardandImg></CardandImg>
                  </div>
                </div>
              
            </div>
      </div>
    </>
  );
}
