import React, { Component } from 'react';

class SimpleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: this.props.inputs || [],
    }
  }
  addOwner(e) {
    e.preventDefault();
    const input = this.refs.newInput.value.trim();
    let inputs = this.state.inputs;
    if (input) {
      inputs.push(input);
      this.setState({
        inputs: inputs,
      })
    }
    this.refs.newInput.value = '';
  }
  render() {
    const inputs = this.state.inputs.map((el, i) => {
      return (
        <li key={i}>{el}</li>
      );
    });
    return (
      <div>
        <h3>Inputs</h3>
        <ul>
          { inputs }
        </ul>
        <form onSubmit={this.addOwner.bind(this)}>
          <input type="text" ref="newInput" />
          <button>ADD OWNER</button>
        </form>
      </div>
    );
  }
}
export default SimpleForm;
