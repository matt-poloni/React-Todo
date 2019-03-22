import React from 'react';
import { render } from 'react-dom';
import App from './App';

const emptyStorage = [
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
]

render(<App emptyStorage={emptyStorage} />, document.getElementById('root'));
