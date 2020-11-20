import React, { Component } from "react";
import Particles from "react-particles-js";

class ParticlesBG extends Component {
  render() {
    return (
      <Particles
        style={{
          backgroundColor: "white",
          zindex: -1,
          position: "absolute",
        }}
        params={{
          particles: {
            number: {
              value: 50,
            },
            size: {
              value: 2,
            },
            color: {
              value: "black",
            },
            line_linked: {
              enable: true,
              distance: 200,
              color: "#000000",
              opacity: 0.5,
              width: 1,
            },
          },
          interactivity: {
            detectsOn: "window",
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />
    );
  }
}
export default ParticlesBG;
