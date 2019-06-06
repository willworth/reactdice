import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  render() {
    return (
      <div>
        <i class={`Die fas fa-dice-${this.props.face}`} />
      </div>
    );
  }
}

export default Die;
