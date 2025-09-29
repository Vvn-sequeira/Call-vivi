import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div style={{ color: "white" }}>
      <div className="container mx-auto flex  flex-row justify-between items-center p-4">
        <div
          className="flex flex-row gap-4 items-center pointer "
          style={{ cursor: "pointer" }}
        >
          <Link to={"/"} className=" text-decoration-none  ">  <h1>Zoom</h1> </Link>
          <div className="flex flex-row items-center mid-screen-none ">
            <h6>Products</h6>
            <i
              class="fa-solid fa-down-long"
              style={{ fontSize: "12px", opacity: "0.8" }}
            ></i>
          </div>
          <div className="flex flex-row items-center mid-screen-none">
            <h6>AI</h6>
            <i
              class="fa-solid fa-down-long"
              style={{ fontSize: "12px", opacity: "0.8" }}
            ></i>
          </div>
          <div className="flex flex-row items-center mid-screen-none">
            <h6>Solutions</h6>
            <i
              class="fa-solid fa-down-long"
              style={{ fontSize: "12px", opacity: "0.8" }}
            ></i>
          </div>
          <h6 className=" mid-screen-none">Pricing</h6>
        </div>
        <div
          className="flex flex-row gap-4 items-center "
          style={{ cursor: "pointer" }}
        >
          <i className="fa-solid fa-magnifying-glass mid-screen-none" ></i>
          <div className="flex flex-row items-center dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Meet
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Join meeting
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Host a meeting
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Download app{" "}
                </a>
              </li>
            </ul>
          </div>
          <Link to={"/Login"} className="text-decoration-none text-white "><h6 className=" mid-screen-none">Log In</h6></Link>
          <h6 className=" mid-screen-none">Support</h6>
          <button className="btn btn-light  mid-screen-none ">
            Contact Sales{" "}
          </button>
          <Link to="/signup">
            <button className="btn btn-primary Signup-btn">SignUp</button>
          </Link>
          <i class="fa-solid fa-box mid-screen-display"></i>
        </div>
      </div>
    </div>
  );
}
