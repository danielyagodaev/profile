import React from 'react';
import ReactDOM from 'react-dom';

import "./assets/scss/material-kit-react.scss?v=1.9.0";

import HeaderLinks from "./my-views/HeaderLinks/HeaderLinks";
import Main from "./my-views/Main/Main";
import Background from "./my-views/Background/Background";
import Skills from "./my-views/Skills/Skills";
import ProjectsCarousel from "./my-views/ProjectsCarousel/ProjectsCarousel";

import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <React.StrictMode>
      <HeaderLinks/>
      <Main/>
      <Background/>
      <Skills/>
      <ProjectsCarousel/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
