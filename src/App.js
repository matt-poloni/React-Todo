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
      newSearch: '',
      newTask: '',
    }
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  searchItems = () => {}

  clearSearch = () => {}

  toggleComplete = id => {
    this.setState({
      listItems: this.state.listItems.map(item => {
        return item.id === id ?
          { ...item, completed: !item.completed } :
          item;
      })
    })
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
        <TodoForm
          listItems={this.state.listItems}
          name='newSearch'
          textPH='Search for specific items'
          value={this.state.newSearch}
          valueChange={this.handleChanges}
          textSubmit='Search'
          addItem={this.searchItems}
          textReset='Reset'
          resetFunc={this.clearSearch}
        />
        <TodoList
          listItems={this.state.listItems}
          toggleComplete={this.toggleComplete}
        />
        <TodoForm
          listItems={this.state.listItems}
          name='newTask'
          textPH='Input a new task here'
          value={this.state.newTask}
          valueChange={this.handleChanges}
          textSubmit='Add Task'
          submitFunc={this.addItem}
          textReset='Clear Completed'
          resetFunc={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
