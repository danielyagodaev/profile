import React from 'react';

import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "./components/Header/Header";

import Card from "./components/Card/Card.js";
import CardBody from "./components/Card/CardBody.js";
import CardHeader from "./components/Card/CardHeader";

import NavigationButtons from "./components/ButtonsContainer/NavigationButtons";
import SocialMediaButtonsContainer from "./components/ButtonsContainer/SocialMediaButtonsContainer";

import NavPills from "./components/NavPills/NavPills";

import imagesStyles from "./assets/jss/material-kit-react/imagesStyles.js";
import tooltipsStyle from "./assets/jss/material-kit-react/tooltipsStyle";

import { cardTitle } from "./assets/jss/material-kit-react.js";

import profilePhoto from "./img/profile.jpg";

const styles = {
    ...imagesStyles,
    ...tooltipsStyle,
    cardTitle,
    textCenter: {
        textAlign: "center"
    },
};

const useStyles = makeStyles(styles);

function App() {
    const classes = useStyles();
    const navigationButtons = new NavigationButtons();
    const socialMediaButtonsContainer = new SocialMediaButtonsContainer();

    return (
        <div>
            <Header color="header" leftLinks={navigationButtons} rightLinks={socialMediaButtonsContainer} style={{marginBottom: "0", borderRadius: "0"}}>
            </Header>
            <Card color="upperBody" className={classes.textCenter}>
                <br/>
                <img
                    style={{height: "180px", width: "180px", display: "block", border: "0.4em solid"}}
                    className={classes.imgRoundedCircle}
                    src={profilePhoto}
                    title="Profile Image"
                    alt="Card-img-cap"
                />
                <CardBody color="upperBody">
                    <h3>Daniel Yagodaev</h3>
                    <hr style={{borderTop: "solid 4px"}}/>
                    <h5>Senior Software Engineer</h5>
                </CardBody>
            </Card>
            <Card color="lowerBody" className={classes.textCenter}>
                <CardHeader>
                    <h3>ABOUT ME</h3>
                    <hr style={{borderTop: "solid 4px"}}/>
                </CardHeader>
                <CardBody style={{marginLeft: "15%", marginRight: "15%"}}>
                    <h5>I have 4+ years of experience as a software engineer, and I worked for both
                        large and mid range companies. I started at the semiconductors industry, and
                        after 3 years I moved to a software based company, as a backend developer.
                        I'm familiar with a lot of programming languages and technologies and I'm a
                        fast learner.
                        <br/>
                        <br/>
                        I also posses a BS.c in computer science from Ben Gurion University, which I
                        graduated with distinction.</h5>
                </CardBody>
            </Card>
            <Card color="skills" className={classes.textCenter}>
                <CardHeader>
                    <h3>SKILLS</h3>
                    <hr style={{borderTop: "solid 4px"}}/>
                </CardHeader>
                <NavPills color="header" tabs={[
                        {
                            tabButton: "Programming Languages",
                            tabContent: (
                                <span>
                                    <p>Node.js</p>
                                    <p>Javascript</p>
                                    <p>Python</p>
                                    <p>Java</p>
                                    <p>PHP</p>
                                    <p>C/C++</p>
                                </span>
                            )
                        },
                        {
                            tabButton: "Databases",
                            tabContent: (
                                <span>
                                    <p>Memcached</p>
                                    <p>MySQL</p>
                                    <p>Redis</p>
                                    <p><a href="https://www.elastic.co/what-is/elk-stack" target="_blank">ELK</a></p>
                                </span>
                            )
                        },
                        {
                            tabButton: "Other",
                            tabContent: (
                                <span>
                                    <p>Git</p>
                                    <p>AWS</p>
                                    <p>Docker</p>
                                    <p>Grafana</p>
                                </span>
                            )
                        }]}>

                </NavPills>
            </Card>
        </div>
  );
}

export default App;
