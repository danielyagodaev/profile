import React from "react";

import {makeStyles} from "@material-ui/core/styles";

import Card from "../../core-components/Card/Card";
import CardBody from "../../core-components/Card/CardBody";

import imagesStyles from "../../assets/jss/material-kit-react/imagesStyles";

const styles = {
    ...imagesStyles,
    textCenter: {
        textAlign: "center"
    },
}

const useStyles = makeStyles(styles);

export default function Main(props){
    const {color, profileImage, name, title} = props;
    const classes = useStyles();
    return (
        <Card color={color} className={classes.textCenter} style={{marginTop: "5rem"}}>
            <br/>
            <img
                style={{height: "180px", width: "180px", display: "block", border: "0.4em solid"}}
                className={classes.imgRoundedCircle}
                src={profileImage}
                title="Profile Image"
                alt="Card-img-cap"
            />
            <CardBody color={color}>
                <h3>{name}</h3>
                <hr style={{borderTop: "solid 4px"}}/>
                <h5>{title}</h5>
            </CardBody>
        </Card>
    )
}