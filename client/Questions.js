import React, { Component } from 'react';
import SelectForm from './SelectForm';
import RadioForm from './RadioForm';
import Result from './Result';
import sortHouse from './sortHouse';
import axios from 'axios';

export default class Questions extends Component {
  constructor() {
    super();
    this.state = {
      questions: [
        {
          name: '',
          choices: [],
        },
      ],
      answers: [],
      currentQuestion: 0,
    };
    this.answerQuestion = this.answerQuestion.bind(this);
  }

  answerQuestion(answerStr) {
    this.setState({
      answers: [...this.state.answers, answerStr],
      currentQuestion: this.state.currentQuestion + 1,
    });
  }

  async componentDidMount() {
    try {
      const response = await axios.get('/api/questions');
      this.setState({
        questions: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const qIndex = this.state.currentQuestion;
    const questions = this.state.questions;
    const answers = this.state.answers;
    const noMoreQuestions = questions.length === answers.length;
    return (
      <div>
        {noMoreQuestions ? (
          <Result house={sortHouse(answers)} />
        ) : qIndex % 2 === 0 ? (
          <SelectForm
            question={questions[qIndex]}
            answerQuestion={this.answerQuestion}
          />
        ) : (
          <RadioForm
            question={questions[qIndex]}
            answerQuestion={this.answerQuestion}
          />
        )}
      </div>
    );
  }
}
