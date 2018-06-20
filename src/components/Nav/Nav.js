import React from "react";
import "./Nav.css";

const Nav = props => (
  <div className="container-fluid">

    <nav className="navbar fixed-top navbar-light bg-light  justify-content-between">
      <span className="navbar-brand mb-0"><h1><strong>Bird Clicky Game</strong></h1></span>
      <span className="rightnav"><h3><strong>Score: {props.currentScore} | High Score: {props.highScore}</strong></h3></span>
    </nav>

  </div>

);
export default Nav;