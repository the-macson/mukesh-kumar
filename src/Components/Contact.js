import React from "react";
import Linkedin from "../Assets/SoicalMedia/linkedin.png";
import FaceBook from "../Assets/SoicalMedia/facebook.png";
import Instagram from "../Assets/SoicalMedia/instagram.png";
import Github from "../Assets/SoicalMedia/github.png";
import Youtube from "../Assets/SoicalMedia/youtube.png";
import Twitter from "../Assets/SoicalMedia/twitter.png";
import Social from '../Assets/Picture/undraw_Social_ideas_re_j5v4.svg'
export default function Contact() {
  return (
    <div className="contact">
      <h1>Get in Touch</h1>
      <p>
        If you want to start any project with me or want to talk with me or want
        any help Contact with me
      </p>
      <div className="container">
        <div className="row">
          <div className="col-md social2">
            <img src={Social} alt="" />
          </div>
          <div className="col-md social">
            <div>
              <a href="/">
                <img src={Linkedin} alt="" />
              </a>
              <a href="/">
                <img src={Github} alt="" />
              </a>
              <a href="/">
                <img src={Youtube} alt="" />
              </a>
            </div>
            <div>
              <a href="/">
                <img src={FaceBook} alt="" />
              </a>
              <a href="/">
                <img src={Twitter} alt="" />
              </a>
              <a href="/">
                <img src={Instagram} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="auther">Made By Mukesh Kumar with 💖</div>
    </div>
  );
}
