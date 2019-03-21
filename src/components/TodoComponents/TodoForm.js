import React from 'react';
import './Todo.css';

const TodoForm = props => {
  return (
    <form className="todo-form">
      <input
        type="text"
        placeholder="Input a new task here"
        value={props.newTask}
        onChange={props.newTaskChange}
      />
      <button
        onClick={props.addItem}
        onKeyPress={ e => {
            if(e.key === 'Enter') { props.addItem }
          }
        }
      >
        Add Todo
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