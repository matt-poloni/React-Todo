import React from 'react';

const Todo = props => {
  return (
    <li>
      {props.listItem.task}
    </li>
  )
}

export default Todo;