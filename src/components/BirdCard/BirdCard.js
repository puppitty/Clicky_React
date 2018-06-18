import React from "react";
import "./BirdCard.css";

const BirdCard = props => (
  <div className="card"
    data-id={props.id}
    onClick={() => (props.imgClick(props.id))}>

    <div className="img-container">
      <img alt={props.name}
        src={props.image}
        data-name={props.name}
      />

    </div>
  </div>
);

export default BirdCard;
