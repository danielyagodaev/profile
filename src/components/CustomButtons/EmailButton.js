import React from "react";

import Button from "./Button.js";

import EmailOutlined from '@material-ui/icons/EmailOutlined';

export default function EmailButton(props){
    const {link} = props;
    return(
        <div>
            <Button color="primary" className={" fab"} href={link} target="_blank">
                <EmailOutlined/>
            </Button>
        </div>
    )
}