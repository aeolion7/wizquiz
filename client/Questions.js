import React, { Component } from 'react';
import questions from '../data/questions.json';
import SelectForm from './SelectForm';
import RadioForm from './RadioForm';
import axios from 'axios'

export default class Questions extends Component {
  constructor() {
    super();
    this.state = {
      questions: [{
        name: '',
        choices: []
      }],
      answers: [],
      currentQuestion: 0,
      flip: false
    };
  }

  answerQuestion (answerStr) {
    this.setState((prevState) => {
      prevState.answers.push(answerStr)
      prevState.currentQuestion++
    })
  }

  async componentDidMount() {
    try {
      const response = await axios.get('/questions')
      this.setState({
        questions: response.data
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const newFlip = !this.state.flip
    const qIndex = this.state.currentQuestion
    this.setState({
      flip: newFlip
    })
    return (
      <div>
        {this.state.flip ? <SelectForm question={questions[qIndex]} /> : <RadioForm question={questions[qIndex]} />}
      </div>
    );
  }
}
