import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// core components
import GridContainer from "../../core-components/Grid/GridContainer.js";
import GridItem from "../../core-components/Grid/GridItem.js";
import Card from "../../core-components/Card/Card.js";
import CardHeader from "../../core-components/Card/CardHeader";
import Project from "../../my-components/Project/Project";

import { makeStyles } from "@material-ui/core/styles";

import carouselStyles from "../../assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";
import componentsStyle from "../../assets/jss/material-kit-react/views/components";

const styles = {
    textCenter: {
        textAlign: "center"
    },
    ...carouselStyles,
    ...componentsStyle
}

const useStyles = makeStyles(styles);

function createSingleProjectView(projectData){
    return(
        <Project
            img={projectData.img}
            projectName={projectData.name}
            projectDescription={projectData.description}
            projectLink={projectData.link}
        />
    );
}

export default function ProjectsCarousel(props){
    const {id, color, list} = props;
    const allProjects = list.map((projectData) => createSingleProjectView(projectData));
    const classes = useStyles();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false
    };
    return (
        <div id={id}>
            <Card color={color} className={classes.textCenter}>
                <CardHeader>
                    <h3>Projects</h3>
                    <hr style={{borderTop: "solid 4px"}}/>
                </CardHeader>
                <div className={classes.section}>
                    <div className={classes.container}>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={8}>
                                <Card carousel>
                                    <Carousel {...settings}>
                                        {[...allProjects]}
                                    </Carousel>
                                </Card>
                            </GridItem>
                        </GridContainer>
                    </div>
                </div>
            </Card>
        </div>
    );
}


