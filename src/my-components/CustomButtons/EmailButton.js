import React from "react";

import Button from "../../core-components/CustomButtons/Button.js";

import EmailOutlined from '@material-ui/icons/EmailOutlined';

export default function EmailButton(props){
    const {link, color} = props;
    return(
        <div>
            <Button color={color} className={" fab"} href={link} target="_blank">
                <EmailOutlined/>
            </Button>
        </div>
    )
}