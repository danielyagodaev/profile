import React from "react";

import Button from "./Button.js";

import Linkedin from '@material-ui/icons/LinkedIn';

export default function LinkedinButton(props){
    const {link} = props;
    return (
        <div>
            <Button color="header" className={" fab"} href={link} target="_blank">
                <Linkedin/>
            </Button>
        </div>
    )

}