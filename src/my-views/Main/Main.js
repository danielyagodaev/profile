import React from "react";

import {makeStyles} from "@material-ui/core/styles";

import Card from "../../core-components/Card/Card";
import CardBody from "../../core-components/Card/CardBody";

import imagesStyles from "../../assets/jss/material-kit-react/imagesStyles";

import profilePhoto from "../../img/profile.jpg";

const styles = {
    ...imagesStyles,
    textCenter: {
        textAlign: "center"
    },
}

const useStyles = makeStyles(styles);

export default function Main(){
    const classes = useStyles();
    return (
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
    )
}