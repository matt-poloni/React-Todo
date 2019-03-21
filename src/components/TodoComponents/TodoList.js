// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import './Todo.css';

const TodoList = props => {
  return (
    <ul className="todo-list">
      {props.listItems.map((li, i) => (
        <Todo
          key={i}
          listItem={li}
          toggleComplete={props.toggleComplete}
        />
      ))}
    </ul>
  )
}

export default TodoList;