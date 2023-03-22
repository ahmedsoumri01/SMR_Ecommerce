import React from "react";

export default function FeatureBox(props) {
  return (
    <div className="FeatureBox">
      {props.icon}
      <h5>{props.title}</h5>
      <p>{props.description}</p>
    </div>
  );
}
