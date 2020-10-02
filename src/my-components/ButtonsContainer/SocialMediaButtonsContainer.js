import React from "react";

// @material-ui/core components
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import LinkedinButton from "../CustomButtons/LinkedinButton";
import GitHubButton from "../CustomButtons/GitHubButton";
import EmailButton from "../CustomButtons/EmailButton";

import {makeStyles} from "@material-ui/core/styles";

import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle";

const useStyles = makeStyles(styles);

export default function SocialMediaButtonsContainer(){
    const classes = useStyles();
    return(
       <List className={classes.list}>
           <ListItem className={classes.listItem}>
               <LinkedinButton link="https://www.linkedin.com/in/daniel-yago-5b692aba/"/>
           </ListItem>
           <ListItem className={classes.listItem}>
               <GitHubButton link="https://github.com/danielyagodaev"/>
           </ListItem>
           <ListItem className={classes.listItem}>
               <EmailButton link="mailto:danielyag@gmail.com"/>
           </ListItem>
       </List>
    );
}