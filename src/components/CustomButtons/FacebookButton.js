import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";

import Button from "./Button.js";

import Facebook from '@material-ui/icons/Facebook';

export default function FacebookButton(props) {
    const {link} = props;
    return (
        <div>
            <Button color="facebook" className={" fab fa-facebook-square"} href={link} target="_blank">
                <Facebook/>
            </Button>
        </div>
    )
}