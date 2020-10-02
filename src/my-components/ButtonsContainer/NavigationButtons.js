import React from "react";

// @material-ui/core components
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "../../core-components/CustomButtons/Button.js";

import {makeStyles} from "@material-ui/core/styles";

import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle";

const useStyles = makeStyles(styles);

export default function NavigationButtons(){
    const classes = useStyles();
    return(
        <List className={classes.list}>
            <ListItem className={classes.listItem}>
                <Button
                    href=""
                    color="transparent"
                >
                    <h5>About Me</h5>
                </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Button
                    href=""
                    color="transparent"
                >
                    <h5>Skills</h5>
                </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Button
                    href=""
                    color="transparent"
                >
                    <h5>Projects</h5>
                </Button>
            </ListItem>
        </List>
    )
}