import React, { Component } from "react";
import "./Details.scss";
import Experience from "./experience/Experience";
import ExperienceDetails from "./experience/ExperienceDetails";
import { experiences } from "../models/Experience";

class Details extends Component {
  state = {
    currentExperience: 1
  };

  render() {
    return (
      <div className="details-parent">
        <div className="profile-section red-border">
          <h3>PROFILE</h3>
          <span> Sample profile text</span>
        </div>
        <div className="experience-section red-border">
          <h3>EXPERIENCE</h3>
          <div className="experience-header">
            {experiences.map(item => {
              return (
                <div>
                  <Experience
                    id={item.id}
                    imageSrc={item.imageSrc}
                    title={item.title}
                    subTitle={item.subTitle}
                    onExperienceClick={value =>
                      this.setState({ currentExperience: value })
                    }
                  />
                </div>
              );
            })}
          </div>
          <ExperienceDetails details={this.state.currentExperience} />
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
}

export default Details;
