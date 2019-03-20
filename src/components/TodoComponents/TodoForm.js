import React from 'react';

const TodoForm = props => {
  return (
    <form>
      <input
        type="text"
        placeholder="Input a new task here"
        value={props.newTask}
        onChange={props.newTaskChange}
      />
      <button
        onClick={props.addItem}
        onKeyPress={ e => {
            if(e.key === 'Enter') {
              e.preventDefault();
              props.addItem;
            }
          }
        }
      >
        Add Todo
      </button>
      <button>Clear Completed</button>
    </form>
  )
}

export default TodoForm;