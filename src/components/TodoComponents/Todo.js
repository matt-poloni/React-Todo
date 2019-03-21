import React from 'react';

const Todo = props => {
  return (
    <li
      className={props.listItem.completed ? 'complete' : ''}
      onClick={() => props.toggleComplete(props.listItem.id)}
    >
      {props.listItem.task}
    </li>
  )
}

export default Todo;