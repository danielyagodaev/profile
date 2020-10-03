import React from 'react';
import ReactDOM from 'react-dom';

import "./assets/scss/material-kit-react.scss?v=1.9.0";

import HeaderLinks from "./my-views/HeaderLinks/HeaderLinks";
import Main from "./my-views/Main/Main";
import Background from "./my-views/Background/Background";
import Skills from "./my-views/Skills/Skills";
import ProjectsCarousel from "./my-views/ProjectsCarousel/ProjectsCarousel";

import * as serviceWorker from './serviceWorker';

import profilePhoto from "./img/profile.jpg";

import project1 from "./img/checkers-online.jpg";

import backgroundText from "./text-components/Background";

ReactDOM.render(
  <React.StrictMode>
      <HeaderLinks
          color="header"
          navigationLinks={
                [
                    {name: "About Me", link: "#aboutMe"},
                    {name: "Skills", link: "#skills"},
                    {name: "Projects", link: "#projects"},
                ]
          }
          socialMediaLinks={
              [
                  {name: "Linkedin", link: "https://www.linkedin.com/in/daniel-yago-5b692aba/"},
                  {name: "Github", link: "https://github.com/danielyagodaev"},
                  {name: "Email", link: "mailto:danielyag@gmail.com"},
              ]
          }
      />
      <Main
          color="upperBody"
          profileImage={profilePhoto}
          name="Daniel Yagodaev"
          title="Senior Software Engineer"
      />
      <Background
          color="lowerBody"
          id="aboutMe"
          text={backgroundText}
      />
      <Skills
          color="skills"
          id="skills"
          skillsData={
              [
                  {
                      category: "Programming Languages",
                      list: ["Node.js", "Javascript", "Python", "Java", "PHP", "C/C++"]
                  },
                  {
                      category: "Databases",
                      list: ["MySQL", "Redis"]
                  },
                  {
                      category: "Other",
                      list: ["Git", "AWS", "Docker", "ELK", "Grafana", "Memcached"]
                  },
              ]
          }
      />
      <ProjectsCarousel
          color="lowerBody"
          projectColor="skills"
          buttonColor="header"
          id="projects"
          list={
              [
                  {
                      img: project1,
                      name: "Checkers",
                      description: "Play Checkers Online",
                      link: "https://danielyagodaev.github.io/checkers/",
                  },
              ]
          }
      />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
