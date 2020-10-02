import React from "react";

import Button from "../../core-components/CustomButtons/Button.js";

import GitHub from '@material-ui/icons/GitHub';

export default function GitHubButton(props){
    const {link} = props;
    return(
        <div>
            <Button color="header" className={" fab"} href={link} target="_blank">
                <GitHub/>
            </Button>
        </div>
    )

}


