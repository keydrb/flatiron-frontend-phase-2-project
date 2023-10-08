import React, { useState } from 'react';

function AddTodoForm(props) {
const [input, setInput] = useState('');

const handleChange = e => {
    setInput(e.target.value);
};
const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });

    setInput('');
};

    return (
       <form className='add-todo-form' onSubmit={handleSubmit}>
         <input 
            type='text'
            placeholder='Add a todo' 
            value={input}
            name='text' 
            className='todo-input'
            onChange={handleChange}
        />
        <button className='add-todo-button'>Add todo</button>
      </form>
    );
}

export default AddTodoForm