import React from "react";
import "./filter.css";
export default function FilterText({ P, Ul, ELE, IMG }) {
  return (
    <div>
      <div className="row FilterRow ">
        <div className="col FilterCol " id="Text-col">
          <p className="filterPara">{P}</p>
          {Ul.map((ul, i) => (
            <ul className="p-0 FilterUl">
              <li>
                <span className="UlHeading font-bold">{ul}</span>
                <p>{ELE[i]}</p>
              </li>
            </ul>
          ))}
          <button className="btn btn-primary w-49 ">Get started </button>
        </div>
        <div className="col col-md-12 FilterCol ">
            <img src={IMG}></img>
        </div>
      </div>
    </div>
  );
}
