import React, { Component } from "react";

class Scroll extends Component {
  render() {
    return (
      <div
        style={{
          overflowY: "scroll",
          height: "93%",
          border: "2px solid white",
          borderRadius: "10px",
          boxShadow: "inset 0 0 10px black",
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Scroll;
