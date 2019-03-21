import './reset.css';
import './index.css';
import React, { Component } from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      listItems: [
        {
          task: 'Prepopulated, Complete',
          id: Date.now(),
          completed: true,
        },
        {
          task: 'Prepopulated, Not Complete',
          id: Date.now() + 1,
          completed: false,
        },
      ],
      newTask: '',
    }
  }

  toggleComplete = id => {
    this.setState({
      listItems: this.state.listItems.map(item => {
        if(item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          }
        }
        return item;
      })
    })

  }

  newTaskChange = e => {
    this.setState({ newTask: e.target.value })
  }

  addItem = e => {
    e.preventDefault();
    const newTask = {
      task: this.state.newTask,
      id: Date.now(),
      completed: false,
    }

    this.setState({
      listItems: [...this.state.listItems, newTask],
      newTask: '',
    })
  }

  clearCompleted = e => {
    e.preventDefault();

    this.setState({
      listItems: this.state.listItems.filter(li => !li.completed),
    })
  }

  render() {
    return (
      <div className="wrap-app">
        <h2>Your To-Do List</h2>
        <TodoList
          listItems={this.state.listItems}
          toggleComplete={this.toggleComplete}
        />
        <TodoForm
          listItems={this.state.listItems}
          newTask={this.state.newTask}
          newTaskChange={this.newTaskChange}
          addItem={this.addItem}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
