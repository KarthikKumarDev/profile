import React from "react";
import "./Skillset.scss";
import Skills from "./Skills";

import { skills } from "../../models/Skills";

function Skillset() {
  return (
    <div className="skillset-parent">
      {skills.map(skill => {
        return <Skills title={skill.skillTitle} skills={skill.skills} />;
      })}
    </div>
  );
}

export default Skillset;
