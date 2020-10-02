import React from "react";

import Button from "../../core-components/CustomButtons/Button.js";

import EmailOutlined from '@material-ui/icons/EmailOutlined';

export default function EmailButton(props){
    const {link} = props;
    return(
        <div>
            <Button color="header" className={" fab"} href={link} target="_blank">
                <EmailOutlined/>
            </Button>
        </div>
    )
}