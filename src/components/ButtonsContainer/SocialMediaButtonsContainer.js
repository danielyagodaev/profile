import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
import LinkedinButton from "../CustomButtons/LinkedinButton";
import GitHubButton from "../CustomButtons/GitHubButton";
import EmailButton from "../CustomButtons/EmailButton";
import {makeStyles} from "@material-ui/core/styles";
import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle";
// @material-ui/core components
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const useStyles = makeStyles(styles);

export default function SocialMediaButtonsContainer(props){
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