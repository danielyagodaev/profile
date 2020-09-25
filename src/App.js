import React from 'react';

import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "./components/Card/Card.js";
import CardBody from "./components/Card/CardBody.js";

import ButtonsContainer from "./components/ButtonsContainer/ButtonsContainer";

import LinkedinButton from "./components/CustomButtons/LinkedinButton";
import GitHubButton from "./components/CustomButtons/GitHubButton";
import GmailButton from "./components/CustomButtons/GmailButton";

import imagesStyles from "./assets/jss/material-kit-react/imagesStyles.js";

import { cardTitle } from "./assets/jss/material-kit-react.js";

const styles = {
    ...imagesStyles,
    cardTitle,
    textCenter: {
        textAlign: "center"
    },
};

const useStyles = makeStyles(styles);

function App() {
    const classes = useStyles();
    return (
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
                <ButtonsContainer style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <LinkedinButton link="https://www.linkedin.com/in/daniel-yago-5b692aba/"/>
                    <GitHubButton link="https://github.com/danielyagodaev"/>
                    <GmailButton link="mailto:danielyag@gmail.com"/>
                </ButtonsContainer>
            </CardBody>
        </Card>
  );
}

export default App;
