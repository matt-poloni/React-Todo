// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return (
    <ul>
      {props.listItems.map(li => (
        <Todo
          key={li.id}
          listItem={li}
        />
      ))}
    </ul>
  )
}

export default TodoList;