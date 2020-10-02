import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import CardHeader from "../../core-components/Card/CardHeader";
import NavPills from "../../core-components/NavPills/NavPills";
import Card from "../../core-components/Card/Card";

const styles = {
    textCenter: {
        textAlign: "center"
    }
}

const useStyles = makeStyles(styles);

export default function Skills(props){
    const classes = useStyles();
    return(
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
                                    <p>ELK</p>
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
    )
}