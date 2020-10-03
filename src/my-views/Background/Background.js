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
    const {id, color, text} = props;
    const classes = useStyles();
    return(
        <div id={id}>
            <Card color={color} className={classes.textCenter}>
                <CardHeader>
                    <h3>ABOUT ME</h3>
                    <hr style={{borderTop: "solid 4px"}}/>
                </CardHeader>
                <CardBody style={{marginLeft: "15%", marginRight: "15%"}}>
                    {text}
                </CardBody>
            </Card>
        </div>
    )
}