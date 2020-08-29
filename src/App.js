import React from 'react';

import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "./components/Card/Card.js";
import CardBody from "./components/Card/CardBody.js";
import Button from "./components/CustomButtons/Button.js";
import FacebookButton from "./components/CustomButtons/FacebookButton";

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
                <FacebookButton link="https://www.facebook.com/Daniel.Yegudayev"/>
                <p>A passionate software engineer with 4+ years of experience in the industry.
                    Focused mainly on backend development. Always eager to learn new stuff.</p>
            </CardBody>
        </Card>
  );
}

export default App;
