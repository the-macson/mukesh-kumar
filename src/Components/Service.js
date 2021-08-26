import React from "react";
import BoxService from "./BoxService";
import BoxService2 from "./BoxService2";
import Webdev from "../Assets/Picture/undraw_Web_developer_re_h7ie.svg";
import OpenSourc from "../Assets/Picture/undraw_Coding_re_iv62.svg";
export default function Service() {
  return (
    <div className="Service">
      <h1>More About Me</h1>
      <div className="container box">
        <div className="row">
          <BoxService src={Webdev} order="col-lg-6 BoxService" />
          <BoxService2
            heading="Web Developer"
            about="I can Develop Websites using the latest technology like react js, MongoDB,  Node js and Express js. I can Create Simple User Friendly and Mobile Responsive Websites."
          />
        </div>
      </div>
      <div className="container box">
        <div className="row">
          <BoxService src={OpenSourc} order="col-lg-6 order-lg-last BoxService" />
          <BoxService2
            heading="Open Source Contributor"
            about="I am open Source Contributor. I love to contribute in open source projects using my coding skill. In last time I contributed in Let's Grow More Summer of Code and Currenty I am contributing in some web Projects."
          />
        </div>
      </div>
    </div>
  );
}
