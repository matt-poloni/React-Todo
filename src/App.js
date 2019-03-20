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
          task: 'Task 1',
          id: Date.now(),
          completed: true,
        },
        {
          task: 'Task 2',
          id: Date.now() + 1,
          completed: false,
        },
      ],
      newTask: '',
    }
  }

  handleToggleComplete = e => {
    const i = this.state.listItems.findIndex(li => li['id'].toString() === e.target.dataset.id);
    let newArr = this.state.listItems;
    newArr[i]['completed'] = !newArr[i]['completed'];
    this.setState({ listItems: newArr });
  }
  handleNewTaskChange = e => {
    this.setState({ newTask: e.target.value })
  }
  handleAddItem = e => {
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
  handleClearCompleted = e => {
    e.preventDefault();

    this.setState({
      listItems: this.state.listItems.filter(li => !li.completed),
    })
  }

  render() {
    return (
      <div className="wrap-app">
        <h2>Todo List: MVP</h2>
        <TodoList
          listItems={this.state.listItems}
          toggleComplete={this.handleToggleComplete}
        />
        <TodoForm
          listItems={this.state.listItems}
          newTask={this.state.newTask}
          newTaskChange={this.handleNewTaskChange}
          addItem={this.handleAddItem}
          clearCompleted={this.handleClearCompleted}
        />
      </div>
    );
  }
}

export default App;
