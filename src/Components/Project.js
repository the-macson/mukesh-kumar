import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectCard2 from "./ProjectCard2";
import Todo from "../Assets/Picture/Screenshot (50).png"
export default function Project() {
  return (
    <div className="project">
      <h1>Projects </h1>
      <div className="container">
        <div className="row">
          <ProjectCard
            src={Todo}
            pre="https://the-macson.github.io/Todo-web/#link-type-noopener"
          />
          <ProjectCard2
            heading="ToDo List"
            about="In this Project I created ToDo application with the help of React js technology. Using this application you can manage your daily task."
            pre="https://the-macson.github.io/Todo-web/#link-type-noopener"
            code="https://github.com/the-macson/Todo-web"
          />
          <ProjectCard2
            heading="ToDo List"
            about="In this Project I created ToDo application with the help of React js technology. Using this application you can manage your daily task."
            pre="https://the-macson.github.io/Todo-web/#link-type-noopener"
            code="https://github.com/the-macson/Todo-web"
          />
          <ProjectCard />
        </div>
      </div>
    </div>
  );
}
