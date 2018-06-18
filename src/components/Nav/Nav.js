import React from "react";

const Nav = props => (
  <div className="container-fluid text-center">
    <strong><p>Click an image of a bird to score</p>
      <p>Be sure not to click the same image twice!</p>
      <p>Score: {props.currentScore}</p>
      <p>High Score: {props.highScore}</p></strong>


  </div>
);
export default Nav;