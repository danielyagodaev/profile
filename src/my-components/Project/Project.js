import React from "react";

export default function Project(props){
    const {img, projectName, projectDescription, projectLink} = props;
    return(
        <div>
            <img
                src={img}
                alt={projectName}
                title={projectDescription}
                className="slick-image"
            />
            <div className="slick-caption" style={{marginBottom: "1.7rem"}}>
                <a href={projectLink} target="_blank" rel="noopener noreferrer">
                    <h3 style={{color: "#ffffff"}}>{projectName}</h3>
                </a>
            </div>
        </div>
    )
}