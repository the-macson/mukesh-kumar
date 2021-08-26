import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectCard2 from "./ProjectCard2";
import Todo from "../Assets/Picture/Screenshot (50).png"
import TicTak from "../Assets/Picture/Screenshot (49).png"
import TextUt from "../Assets/Picture/Screenshot (54).png"
import Webpage from "../Assets/Picture/Screenshot (52).png"
import Apicall from "../Assets/Picture/Screenshot (53).png"
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
            prename="PREVIEW"
            pre="https://the-macson.github.io/Todo-web/#link-type-noopener"
            code="https://github.com/the-macson/Todo-web"
          />
          <ProjectCard2
            heading="Tic Tac Toe"
            about="In this Project I created Tic Tac Toe game using javaScript and with the help of React js technology. Using this application you can play Tic Tac Toe game."
            prename="PREVIEW"
            pre="https://the-macson.github.io/tic-tac-toe/"
            code="https://github.com/the-macson/tic-tac-toe"
          />
          <ProjectCard
            src={TicTak}
            pre="https://github.com/the-macson/tic-tac-toe"
          />
          <ProjectCard
            src={TextUt}
            pre="https://github.com/the-macson/text-utilities"
          />
          <ProjectCard2
            heading="Text Utils"
            about="In this Project I created Text Utils application with the help of React js technology. Using this application you can Analyze your text and also perform some opertion on your text."
            prename="PREVIEW SOON"
            pre="#"
            code="https://github.com/the-macson/text-utilities"
          />
          <ProjectCard2
            heading="Single page Static Website"
            about="In this Project I created Single page Static Website using HTML,CSS and JavaScript technology. I this website a added Service, Work, Pricing Plan, About Us,Team and Contact Us sections."
            prename="PREVIEW SOON"
            pre="#"
            code="https://github.com/the-macson/LGMVIP-WebDev/tree/main/First%20Project"
          />
          <ProjectCard
            src={Webpage}
            pre="https://github.com/the-macson/LGMVIP-WebDev/tree/main/First%20Project"
          />
          <ProjectCard
            src={Apicall}
            pre="https://github.com/the-macson/LGMVIP-WebDev/tree/main/second-project"
          />
          <ProjectCard2
            heading="API Call Project"
            about="In this Project I call a API and Fetch data of users from API and show in website in good looking using React js technology."
            prename="PREVIEW SOON"
            pre="#"
            code="https://github.com/the-macson/LGMVIP-WebDev/tree/main/second-project"
          />
        </div>
      </div>
    </div>
  );
}
