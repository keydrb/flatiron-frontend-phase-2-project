import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/navbar';
import TaskList from './components/tasklist';
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = React.useState([]);

  const handleTaskAdded = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };