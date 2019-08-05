import React from "react";
import "./Experience.scss";

const Experience = props => {
  return (
    <div
      className="experience"
      onClick={() => props.onExperienceClick(props.id)}
    >
      <img src={`../img/${props.imageSrc}.png`} alt="Engineer" width="42"></img>
      <div className="title-section">{props.title.toUpperCase()}</div>
      <div className="subtitle-section">{props.subTitle.toUpperCase()}</div>
    </div>
  );
};

export default Experience;
