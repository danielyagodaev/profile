import React from "react";

// @material-ui/core components
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import LinkedinButton from "../CustomButtons/LinkedinButton";
import GitHubButton from "../CustomButtons/GitHubButton";
import EmailButton from "../CustomButtons/EmailButton";

import {makeStyles} from "@material-ui/core/styles";

import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle";
import FacebookButton from "../CustomButtons/FacebookButton";
import TwitterButton from "../CustomButtons/TwitterButton";

const useStyles = makeStyles(styles);

function getSocialMediaButton(name, link, color){
    switch(name){
        case "Linkedin":
            return (<LinkedinButton link={link} color={color}/>);
        case "Github":
            return (<GitHubButton link={link} color={color}/>);
        case "Email":
            return (<EmailButton link={link} color={color}/>);
        case "Facebook":
            return (<FacebookButton link={link} color={color}/>);
        case "Twitter":
            return (<TwitterButton link={link} color={color}/>);
        default:
            return null;
    }
}

function createSingleButton(classes, linkData, color){
    const socialMediaButton = getSocialMediaButton(linkData.name, linkData.link, color);
    return(
        <ListItem className={classes.listItem}>
            {socialMediaButton}
        </ListItem>
    );
}

export default function SocialMediaButtonsContainer(linksData, color){
    const classes = useStyles();
    const allButtons = linksData.map((linkData) => createSingleButton(classes, linkData, color));
    return(
       <List className={classes.list}>
           {[...allButtons]}
       </List>
    );
}