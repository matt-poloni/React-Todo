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
          task: 'Sprint Challenge - React Wars',
          id: Date.now(),
          completed: false,
          filtered: false,
        },
        {
          task: 'Sprint Challenge - Lambda Times, React',
          id: Date.now() + 1,
          completed: false,
          filtered: false,
        },
        {
          task: 'Functional Components I',
          id: Date.now() + 2,
          completed: true,
          filtered: false,
        },
        {
          task: 'Functional Components II',
          id: Date.now() + 3,
          completed: true,
          filtered: false,
        },
        {
          task: 'Class Components I',
          id: Date.now() + 4,
          completed: true,
          filtered: false,
        },
        {
          task: 'Class Components II',
          id: Date.now() + 5,
          completed: true,
          filtered: false,
        },
        {
          task: 'React Tooling',
          id: Date.now() + 6,
          completed: false,
          filtered: false,
        },
        {
          task: 'The React Lifecycle',
          id: Date.now() + 7,
          completed: false,
          filtered: false,
        },
        {
          task: 'React Composition Patterns',
          id: Date.now() + 8,
          completed: false,
          filtered: false,
        },
        {
          task: 'CSS in JS',
          id: Date.now() + 9,
          completed: false,
          filtered: false,
        },
      ],
      newSearch: '',
      newTask: '',
    }
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  searchItems = e => {
    e.preventDefault();

    this.setState({
      listItems: this.state.listItems.map(item => {
        return !item.task.includes(this.state.newSearch) ?
          { ...item, filtered: true } :
          { ...item, filtered: false };
      })
    })
  }

  clearSearch = e => {
    e.preventDefault();

    this.setState({
      listItems: this.state.listItems.map(item => {
        return { ...item, filtered: false };
      }),
      newSearch: '',
    })
  }

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
      filtered: false,
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
          textSubmit='Search Tasks'
          submitFunc={this.searchItems}
          textReset='Clear Search'
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
