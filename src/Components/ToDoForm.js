import React, {useState, useEffect, useRef} from 'react'
import nextId from "react-id-generator";

function TodoForm(props) {
  const [input, setInput] = useState('');

  const inputRef = useRef(null);
  useEffect (() => {
    inputRef.current.focus();
  })

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault()

    props.onSubmit({
      id: nextId(),
      text: input
    })

    setInput('');
  };

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <input type="text" 
      value={input} 
      placeholder="Add a ToDo" 
      name="text" 
      className='todo-input' 
      onChange={handleChange} 
      ref={inputRef} />
      <button className='todo-button'>Add</button>
    </form>
  );
}

export default TodoForm;