import React from "react";
import "./Experience.scss";
import SoftDevIcon from "../SoftDevIcon.png";

const Experience = props => {
  return (
    <div
      className="experience"
      onClick={() => props.onExperienceClick(props.id)}
    >
      <img src={props.imageSrc} alt="Engineer" height="42" width="42"></img>
      <div className="title-section">{props.title.toUpperCase()}</div>
      <div className="subtitle-section">{props.subTitle.toUpperCase()}</div>
    </div>
  );
};

export default Experience;
