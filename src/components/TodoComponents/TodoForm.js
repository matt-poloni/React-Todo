import React from 'react';
import './Todo.css';

const TodoForm = props => {
  return (
    <form
      className="todo-form"
      onSubmit={props.addItem}
    >
      <input
        type="text"
        placeholder="Input a new task here"
        value={props.newTask}
        onChange={props.newTaskChange}
      />
      <button
        type="submit"
      >
        Add Task
      </button>
      <button
        onClick={props.clearCompleted}
      >
        Clear Completed
      </button>
    </form>
  )
}

export default TodoForm;