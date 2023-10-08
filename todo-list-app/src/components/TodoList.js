import React, { useState } from 'react'
import AddTodoForm from './AddTodoForm';


function TodoList () {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        const newTodos = [todo, ...todos]
        
        setTodos(newTodos)
    };
    
    return (
        <div>
            <h1>Task List</h1>
            <AddTodoForm onSubmit={addTodo} />
        </div>
    );
}

export default TodoList;