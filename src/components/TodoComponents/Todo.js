import React from 'react';

const Todo = props => {
  return (
    <li
      className={props.listItem.completed ? 'complete' : ''}
      data-id={props.listItem.id}
      onClick={props.toggleComplete}
    >
      {props.listItem.task}
    </li>
  )
}

export default Todo;