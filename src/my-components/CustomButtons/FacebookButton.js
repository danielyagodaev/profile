import React from "react";

import Button from "../../core-components/CustomButtons/Button.js";

import Facebook from '@material-ui/icons/Facebook';

export default function FacebookButton(props) {
    const {link, color} = props;
    return (
        <div>
            <Button color={color} className={" fab"} href={link} target="_blank">
                <Facebook/>
            </Button>
        </div>
    )
}