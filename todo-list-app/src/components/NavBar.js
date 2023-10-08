import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
      <nav>
        <ul>
          <li><Link to="/">Task List</Link></li>
          <li><Link to="/add">Add Task</Link></li>
          </ul>
    </nav>
  );
};

export default NavBar;