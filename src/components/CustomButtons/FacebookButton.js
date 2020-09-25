import React from "react";

import Button from "./Button.js";

import Facebook from '@material-ui/icons/Facebook';

export default function FacebookButton(props) {
    const {link} = props;
    return (
        <div>
            <Button color="facebook" className={" fab fa-facebook"} href={link} target="_blank">
                <Facebook/>
            </Button>
        </div>
    )
}