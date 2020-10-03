import React from "react";

import Button from "../../core-components/CustomButtons/Button.js";

import Linkedin from '@material-ui/icons/LinkedIn';

export default function LinkedinButton(props){
    const {link, color} = props;
    return (
        <div>
            <Button color={color} className={" fab"} href={link} target="_blank">
                <Linkedin/>
            </Button>
        </div>
    )

}