import React from 'react'
export default function ProjectCard(props) {
    return (
      <div className={props.order}>
        <a href={props.pre} target="_blank" rel="noreferrer">
          <img src={props.src} alt="" />
        </a>
      </div>
    );
}
