import React, { Component, createRef } from "react";

class Text extends Component {
  constructor() {
    super();
    this.myRef = createRef();
    this.state = {
      editing: false,
    };
  }

  edit = () => {
    this.setState({
      editing: true,
    });
  };

  save = () => {
    this.props.updateText(this.myRef.current.value, this.props.index);
    this.setState({
      editing: false,
    });
  };

  remove = () => {
    this.props.removeText(this.props.index);
  };

  renderNormal = () => {
    return (
      <div className="ba br4 bg-lightest-blue ma2 pa1 flex justify-between items-center">
        <pre className="calisto f4 pa2 w-75">{this.props.children}</pre>
        <div className="db w5">
          <button
            className="db ttu fr bg-red white br3 grow ma1 pa1 f4 b--transparent"
            onClick={this.remove}
          >
            Remove
          </button>
          <button
            className="db ttu fr bg-blue white br3 grow ma1 pa1 f4 b--transparent"
            onClick={this.edit}
          >
            Edit
          </button>
        </div>
      </div>
    );
  };

  renderForm = () => {
    return (
      <div className="ba br4 bg-light-green ma2 pa1 flex justify-between items-center">
        <textarea
          cols="30"
          rows="2"
          className="db f4 ma1"
          defaultValue={this.props.children}
          ref={this.myRef}
        ></textarea>
        <button
          className="db ttu fr bg-green white br3 grow ma1 pa1 f4"
          onClick={this.save}
        >
          Save
        </button>
      </div>
    );
  };

  render() {
    return this.state.editing ? this.renderForm() : this.renderNormal();
  }
}

export default Text;
