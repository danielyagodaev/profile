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
            <Header color="primary" leftLinks={navigationButtons} rightLinks={socialMediaButtonsContainer}>
            </Header>
            <Card className={classes.textCenter} style={{width: "30rem"}}>
                <img
                    style={{height: "180px", width: "100%", display: "block"}}
                    className={classes.imgCardTop}
                    src="..."
                    alt="Card-img-cap"
                />
                <CardBody>
                    <h4 className={classes.cardTitle}>Daniel Yagodaev</h4>
                    <p>A passionate software engineer with 4+ years of experience in the industry.
                        Focused mainly on backend development. Always eager to learn new stuff.</p>
                </CardBody>
            </Card>
        </div>
  );
}

export default App;
