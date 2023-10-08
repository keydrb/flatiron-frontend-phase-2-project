import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = React.useState([]);

  const handleTaskAdded = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact render={() => <TaskList tasks={tasks} />} />
          <Route path="/add" render={() => <AddTask onTaskAdded={handleTaskAdded} />} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;