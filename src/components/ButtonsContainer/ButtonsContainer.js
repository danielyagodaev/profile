import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components

export default function ButtonsContainer(props){
    const { className, children, ...rest } = props;
    const buttonsContainerClasses = classNames({
        [className]: className !== undefined
    });
    return(
        <div className={buttonsContainerClasses} {...rest}>
            {children}
        </div>
    )
}

ButtonsContainer.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
}