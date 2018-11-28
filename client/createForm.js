import React, { Component } from 'react'

const createForm = (FormComponent) => {
    return class StatefulForm extends Component {
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
            this.props.answerQuestion(this.state.value);
          }

        render() {
            return <FormComponent handleChange={this.handleChange} handleSubmit={this.handleSubmit} {...this.state} {...this.props} />;
        }
    }
}

export default createForm;
