import React from "react";

export default function FeatureBox(props) {
  return (
    <div className="FeatureBox">
      {props.icon}
      <h5>{props.title}</h5>
      <p>Lorem ipsum dolor sit amet consectetur elit </p>
    </div>
  );
}
