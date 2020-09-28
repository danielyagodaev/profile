import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";

import {makeStyles} from "@material-ui/core/styles";
import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle";
// @material-ui/core components
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "./../CustomButtons/Button.js";

const useStyles = makeStyles(styles);

export default function NavigationButtons(props){
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