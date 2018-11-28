import React, { Component } from 'react';

export default class SelectForm extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({
      value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.value);
  }

  render() {
    const question = this.props.question;

    return (
      <form>
        <label>{question.name}</label>
        <select onChange={this.handleChange} name="answer">
          <option value="">--</option>
          {question.choices.map(choice => {
            return <option value={choice.value}>{choice.label}</option>
          })}
        </select>
        <button type="submit" onClick={this.handleSubmit}>Next</button>
      </form>
    );
  }
}
