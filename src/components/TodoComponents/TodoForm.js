import React from 'react';
import './Todo.css';

const TodoForm = props => {
  return (
    <form
      className="todo-form"
      onSubmit={props.submitFunc}
    >
      <input
        type="text"
        name={props.name}
        placeholder={props.textPH}
        value={props.value}
        onChange={props.valueChange}
      />
      <button
        type="submit"
      >
        {props.textSubmit}
      </button>
      <button
        onClick={props.resetFunc}
      >
        {props.textReset}
      </button>
    </form>
  )
}

export default TodoForm;