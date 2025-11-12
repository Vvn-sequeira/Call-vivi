import React, { useState } from "react";
import "./Photos.css";
export default function Photos() {
  let [selectedPhoto, setSelectedPhoto] = useState(1);

  const onHoverd = (i) => {
    setSelectedPhoto(i);
    console.log(i);
  };
  return (
    <div className="PhotsContainer">
      <div className="gallary">
        <div
          onMouseEnter={() => {
            onHoverd(1);
          }}
          className={selectedPhoto === 1 ? "Phots selectedPhoto" : "Phots"}
        >
          <img src="/img/gallery/baseball-club-bg.png"></img>
          <div className={selectedPhoto === 1 ? "image-overlay" : "hidden"}>
            <h1>
              Major League baseball and <br></br> zoom expand the empoyee-fan
              experience
            </h1>
            <p>
              “Zoom has allowed us to continue a tradition of really being a
              technology-focused company and making sure that we're using
              cutting-edge technology not only to advance our business but also
              for our fans.”
            </p>
          </div>
        </div>
        <div
          onMouseEnter={() => {
            onHoverd(2);
          }}
          className={selectedPhoto === 2 ? "Phots selectedPhoto" : "Phots"}
        >
          <img src="/img/gallery/capital-one-bg.png"></img>
          <div className={selectedPhoto === 2 ? "image-overlay" : "hidden"}>
            <h1>
              Advancing mental wellness through TheShareCo journey with Zoom
              Video SDK
            </h1>
            <p>
              “Zoom Video SDK's full flexibility in layout customization allowed
              us to achieve a real-life experience within the limited real
              estate presented by a phone or smart device.”
            </p>
          </div>
        </div>
        <div
          onMouseEnter={() => {
            onHoverd(3);
          }}
          className={selectedPhoto === 3 ? "Phots selectedPhoto" : "Phots"}
        >
          <img src="/img/gallery/cricut-bg.png"></img>
          <div className={selectedPhoto === 3 ? "image-overlay" : "hidden"}>
            <h1>Cricut slashed call abandonment rates by 90% with Zoom</h1>
            <p>
              “Before Zoom, we juggled 10-plus tabs to handle calls. Now,
              everything is integrated into one clean platform, from CRM
              connections to video transitions. It’s a dream workflow.”
            </p>
          </div>
        </div>
        <div
          onMouseEnter={() => {
            onHoverd(4);
          }}
          className={selectedPhoto === 4 ? "Phots selectedPhoto" : "Phots"}
        >
          <img src="/img/gallery/share-bg.png"></img>
          <div className={selectedPhoto === 4 ? "image-overlay" : "hidden"}>
            <h1>
              A connected, collaborative workforce drives innovation at Capital
              One
            </h1>
            <p>
              “We’re highly collaborative, we’re people-centered, we’re
              interested in moving ourselves and our goals to the next level.
              Zoom is, I believe, the ideal tool to suit the culture that we are
              and that we strive to be at Capital One.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
