import React, { Component } from "react";
import Text from "./text";
import Scroll from "../components/scroll";

class Page extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
    };
  }

  addNewText = (text) => {
    let newEvents = this.state.events;
    newEvents.push(text);
    this.setState({
      events: newEvents,
    });
  };

  updateText = (newText, i) => {
    let newEvents = this.state.events;
    newEvents[i] = newText;
    this.setState({
      events: newEvents,
    });
  };

  removeText = (i) => {
    let newEvents = this.state.events;
    newEvents.splice(i, 1);
    this.setState({
      events: newEvents,
    });
  };

  renderText = (text, i) => {
    return (
      <Text
        key={i}
        index={i}
        updateText={this.updateText}
        removeText={this.removeText}
      >
        {text}
      </Text>
    );
  };

  render() {
    return (
      <div
        className="br4 pa2 ma2"
        style={{
          backgroundColor: "rgb(256 256 256 / 81%)",
          width: 600,
          height: 800,
        }}
      >
        <button
          className="db ttu b white br3 grow ma1 pa1 f4 bg-light-blue b--blue"
          onClick={this.addNewText.bind(null, "What's up?")}
        >
          Add New
        </button>
        <Scroll>
          {this.state.events.map((text, i) => this.renderText(text, i))}
        </Scroll>
      </div>
    );
  }
}

export default Page;
