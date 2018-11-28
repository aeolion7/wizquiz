import React, { Component } from 'react';
import createForm from './createForm'

const RadioForm = (props) => {
    const question = props.question;
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
                onChange={props.handleChange}
              />
              {choice.label}
            </label>
          );
        })}

        <button type="submit" onClick={props.handleSubmit}>
          Next
        </button>
      </form>
    );
  }

  export default createForm(RadioForm)
