import React from "react";
import logo from "../assets/42802.jpg"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
      <div className="row">
        <a className="navbar-brand d-inline-flex align-top" alt="Brand">
          <img src={logo} width={"100px"} height={"100px"} ></img>
            <div className="d-flex align-items-center" style={{ margin: 15 }}>
           Police Department of Berlin
           <br></br>
            stolen bike
            </div>
        </a>
       </div>
      </div>
    </nav>
  );
}



export default function Bootstrap() {
  return (
    <>
      <Navbar/>
    </>
  );
}
