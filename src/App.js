import React from 'react';

import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "./components/Header/Header";

import Card from "./components/Card/Card.js";
import CardBody from "./components/Card/CardBody.js";

import NavigationButtons from "./components/ButtonsContainer/NavigationButtons";
import SocialMediaButtonsContainer from "./components/ButtonsContainer/SocialMediaButtonsContainer";

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
            <Card color="upperBody" className={classes.textCenter} style={{marginTop: "0", alignItems: "center", borderRadius: "0"}}>
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
        </div>
  );
}

export default App;
