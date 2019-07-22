import React from "react";

function Skills(props) {
  return (
    <>
      <h3 className="skillset-parent-header">{props.title}</h3>
      <ul>
        {props.skills.map(skill => {
          return <li>{skill}</li>;
        })}
      </ul>
    </>
  );
}

export default Skills;
