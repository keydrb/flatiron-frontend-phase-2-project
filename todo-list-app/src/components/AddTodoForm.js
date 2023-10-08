import React, { useState } from 'react';

function AddTodoForm() {
const [input, setInput] = useState('');

    return (
       <form className='add-todo-form'>
         <input 
            type='text'
            placeholder='Add a todo' 
            value={input}
            name='text' 
            className='todo-input'
        />
        <button className='add-todo-button'>Add todo</button>
      </form>
    );
}

export default AddTodoForm