import React, { Component } from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './reset.css';
import './index.css';

class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      listItems: [
        {
          task: 'Test Item 1',
          id: Date.now(),
          completed: false,
        },
        {
          task: 'Test Item 2',
          id: Date.now() + 1,
          completed: false,
        },
      ],
      newTask: '',
    }
  }

  handleNewTaskChange = e => {}
  handleAddItem = e => {
    e.preventDefault();
    const newTask = {
      task: this.state.newTask,
      completed: false,
      id: Date.now();
    }

    this.setState({
      listItems: [...this.state.listItems, newTask],
    })
  }
  handleClearCompleted = e => {}

  render() {
    return (
      <div className="wrap-app">
        <h2>Todo List: MVP</h2>
        <TodoList
          listItems={this.state.listItems}
        />
        <TodoForm
          listItems={this.state.listItems}
          newTask={this.state.newTask}
          newTaskChange={this.handleNewTaskChange}
          addItem={this.handleAddItem}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
