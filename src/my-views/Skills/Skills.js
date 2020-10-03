import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import CardHeader from "../../core-components/Card/CardHeader";
import NavPills from "../../core-components/NavPills/NavPills";
import Card from "../../core-components/Card/Card";

const styles = {
    textCenter: {
        textAlign: "center"
    }
}

const useStyles = makeStyles(styles);

function createSingleNavPill(skillData){
    console.log(JSON.stringify(skillData));
    const skillsList = skillData.list.map((skill) => (<p>{skill}</p>));
    return{
        tabButton: skillData.category,
        tabContent: (<span>{[...skillsList]}</span>)
    };
}

export default function Skills(props){
    const {id, color, skillsData} = props;
    const allNavPills = skillsData.map((skillData) => createSingleNavPill(skillData));
    const classes = useStyles();
    return(
        <div id={id}>
            <Card color={color} className={classes.textCenter}>
                <CardHeader>
                    <h3>SKILLS</h3>
                    <hr style={{borderTop: "solid 4px"}}/>
                </CardHeader>
                <NavPills color="header" tabs={allNavPills}/>
            </Card>
        </div>
    )
}