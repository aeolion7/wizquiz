import React, { Component } from 'react';
import questions from '../data/questions.json';
import SelectForm from './SelectForm';
import RadioForm from './RadioForm';

export default class Questions extends Component {
  constructor() {
    super();
    this.state = {
      questions: questions,
    };
  }
  render() {
    return (
      <div>
        <SelectForm question={questions[0]} />
        <RadioForm question={questions[1]} />
      </div>
    );
  }
}
