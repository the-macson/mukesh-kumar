import React from 'react'
export default function ProjectCard(props) {
    return (
      <div className="col-md-6 project-pic">
        <a href={props.pre} target="_blank" rel="noreferrer">
          <img src={props.src} alt="" />
        </a>
      </div>
    );
}
