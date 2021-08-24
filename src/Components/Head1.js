import React from "react";
import Userpic from "../Assets/Picture/avataaars.png";
export default function Head1() {
  return (
    <>
      <div className="userpic">
        <img src={Userpic} alt="" />
      </div>
      <div className="intro">
        <h1>Hi, I am Mukesh Kumar</h1>
        <p>I am a Web Developer and Currently doing CSE Hons.</p>
        {/* <p>Do you want to know more about me 🤔 Then scroll down</p> */}
      </div>
    </>
  );
}
