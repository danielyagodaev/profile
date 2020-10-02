import React from "react";

import Header from "../../core-components/Header/Header";
import NavigationButtons from "../../my-components/ButtonsContainer/NavigationButtons";
import SocialMediaButtonsContainer from "../../my-components/ButtonsContainer/SocialMediaButtonsContainer";

export default function HeaderLinks(props){
    const navigationButtons = new NavigationButtons();
    const socialMediaButtonsContainer = new SocialMediaButtonsContainer();
    return(
        <Header
            color="header"
            leftLinks={navigationButtons}
            rightLinks={socialMediaButtonsContainer}
            style={{marginBottom: "0", borderRadius: "0"}}>
        </Header>
    )
}