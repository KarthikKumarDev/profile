import React from "react";
import "./Details.scss";
import Experience from "./experience/Experience";

function Details() {
  return (
    <div className="details-parent">
      <div className="profile-section red-border">
        <h3>PROFILE</h3>
        <span> Sample profile text</span>
      </div>
      <div className="experience-section red-border">
        <h3>EXPERIENCE</h3>
        <span> Sample experience text</span>
        <Experience title="Engineer" subtitle="QA" />
      </div>
      <div className="education-section red-border">
        <h3>EDUCATION</h3>
        <span> Sample education</span>
      </div>
      <div className="awards-section">
        <h3>AWARDS &amp; ACHIEVEMENTS</h3>
        <span> Sample awards text</span>
      </div>
    </div>
  );
}

export default Details;
