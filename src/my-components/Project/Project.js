import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Card from "../../core-components/Card/Card";
import CardBody from "../../core-components/Card/CardBody";
import Button from "../../core-components/CustomButtons/Button"

import classNames from "classnames";

import imagesStyles from "../../assets/jss/material-kit-react/imagesStyles";
import buttonStyle from "../../assets/jss/material-kit-react/components/buttonStyle";
import { cardTitle } from "../../assets/jss/material-kit-react";

const styles = {
    ...imagesStyles,
    ...buttonStyle,
    cardTitle,
    textCenter: {
        textAlign: "center"
    },
}

const useStyles = makeStyles(styles);

export default function Project(props){
    const {color, buttonColor, img, projectName, projectDescription, projectLink} = props;
    const classes = useStyles();
    return(
        <Card color={color} className={classes.textCenter}>
            <CardBody>
                <Button
                    className={classNames(classes.lg, classes.round)}
                    color={buttonColor}
                    href={projectLink}
                    target="_blank"
                    style={{marginBottom: "1rem"}}
                >
                    {projectName}
                </Button>
                <h4>{projectDescription}</h4>
            </CardBody>
            <img
                src={img}
                style={{height: "15rem", width: "15rem", display: "block"}}
                className={classes.imgCard}
            />
        </Card>
    )
}