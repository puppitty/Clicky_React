import React from "react";
import "./BirdCard.css";

const BirdCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
      </ul>
    </div>
    <span onClick={() => props.removeBird(props.id)} className="remove">
      𝘅
    </span>
  </div>
);

export default BirdCard;
