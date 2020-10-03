import React from "react";

import Button from "../../core-components/CustomButtons/Button.js";

import Twitter from '@material-ui/icons/Twitter';

export default function TwitterButton(props){
    const {link, color} = props;
    return(
        <div>
            <Button color={color} className={" fab"} href={link} target="_blank">
                <Twitter/>
            </Button>
        </div>
    )
}