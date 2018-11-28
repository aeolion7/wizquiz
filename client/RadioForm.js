import React, { Component } from 'react';

export default class RadioForm extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };
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

        {question.choices.map(choice => {
          return (
            <label>
              <input
                type="radio"
                name="answer"
                value={choice.value}
                onChange={this.handleChange}
              />
              {choice.label}
            </label>
          );
        })}

        <button type="submit" onClick={this.handleSubmit}>
          Next
        </button>
      </form>
    );
  }
}
