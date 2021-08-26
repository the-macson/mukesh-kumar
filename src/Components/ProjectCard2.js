import React from 'react'

export default function ProjectCard2(props) {
    return (
      <div className="col-md-6 project-about">
        <h1>{props.heading}</h1>
        <p>{props.about}</p>
        <div className="container btn-box">
          <button className="btn">
            <a href={props.pre} target="_blank" rel="noreferrer">
              {props.prename}
            </a>
          </button>
          <button className="btn">
            <a href={props.code} target="_blank" rel="noreferrer">
              CODE
            </a>
          </button>
        </div>
      </div>
    );
}
