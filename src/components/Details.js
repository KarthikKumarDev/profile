import React from "react";
import "./Details.scss";

function Details() {
  return (
    <div className="details-parent">
      <div className="profile-section">
        <h3>PROFILE</h3>
        <span> Sample profile text</span>
      </div>
      <div className="experience-section">
        <h3>EXPERIENCE</h3>
        <span> Sample experience text</span>
      </div>
      <div className="education-section">
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
