import React from 'react';

import { makeStyles } from "@material-ui/core/styles";

import Card from "../../core-components/Card/Card";
import CardBody from "../../core-components/Card/CardBody";
import CardHeader from "../../core-components/Card/CardHeader";

const styles = {
    textCenter: {
        textAlign: "center"
    },
}

const useStyles = makeStyles(styles);

export default function Background(props){
    const classes = useStyles();
    return(
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
    )
}