import React from 'react';

const Todo = props => {
  const complete = props.listItem.completed ? 'complete' : '';
  const filtered = props.listItem.filtered ? 'filtered' : '';

  return (
    <li
      className={complete + ' ' + filtered}
      onClick={() => props.toggleComplete(props.listItem.id)}
    >
      {props.listItem.task}
    </li>
  )
}

export default Todo;