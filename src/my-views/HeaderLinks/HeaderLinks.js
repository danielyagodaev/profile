import React from "react";

import Header from "../../core-components/Header/Header";
import NavigationButtons from "../../my-components/ButtonsContainer/NavigationButtons";
import SocialMediaButtonsContainer from "../../my-components/ButtonsContainer/SocialMediaButtonsContainer";

export default function HeaderLinks(props){
    const {navigationLinks, socialMediaLinks, color} = props;
    const navigationButtons = new NavigationButtons(navigationLinks);
    const socialMediaButtonsContainer = new SocialMediaButtonsContainer(socialMediaLinks, color);
    return(
        <Header
            color={color}
            leftLinks={navigationButtons}
            rightLinks={socialMediaButtonsContainer}
            style={{marginBottom: "0", borderRadius: "0"}}
            fixed
        />
    )
}