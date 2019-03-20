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
      <button onClick={props.addItem}>Add Todo</button>
      <button>Clear Completed</button>
    </form>
  )
}

export default TodoForm;