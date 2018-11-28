import React, { Component } from 'react';
import createForm from './createForm'

const SelectForm = (props) => {
    const question = props.question;

    return (
      <form>
        <label>{question.name}</label>
        <select onChange={props.handleChange} name="answer">
          <option value="">--</option>
          {question.choices.map(choice => {
            return <option value={choice.value}>{choice.label}</option>
          })}
        </select>
        <button type="submit" onClick={props.handleSubmit}>Next</button>
      </form>
    );
  }

export default createForm(SelectForm)
