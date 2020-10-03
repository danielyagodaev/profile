import React from "react";

// @material-ui/core components
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "../../core-components/CustomButtons/Button.js";

import {makeStyles} from "@material-ui/core/styles";

import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle";

const useStyles = makeStyles(styles);

function createSingleNavigationButton(classes, linkData){
    return(
        <ListItem className={classes.listItem}>
            <Button
                href={linkData.link}
                color="transparent"
            >
                <h5>{linkData.name}</h5>
            </Button>
        </ListItem>
    )
}

export default function NavigationButtons(navigationLinks){
    const classes = useStyles();
    const allNavButtons = navigationLinks.map((linkData) => createSingleNavigationButton(classes, linkData));
    return(
        <List className={classes.list}>
            {[...allNavButtons]}
        </List>
    )
}