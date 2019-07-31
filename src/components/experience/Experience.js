import React from "react";
import "./Experience.scss";

const Experience = props => {
  return (
    <div className="experience">
      <div className="title-section">{props.title.toUpperCase()}</div>
      <div className="subtitle-section">{props.subtitle.toUpperCase()}</div>
    </div>
  );
};

export default Experience;
