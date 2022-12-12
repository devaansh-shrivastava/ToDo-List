import React, {useState, useEffect, useRef} from 'react'
import TodoForm from './ToDoForm'
import Todo from './ToDo'

function TodoList() {
  const[todos, setTodos] = useState([]);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addToDo = todo => {
    if(!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    // console.log(todo, ...todos);
  }
  
  const updateToDo = (todoId, newValue) => {
    if(!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue: item)));
  };

  const completeToDo = id => {
    let updatedTodos = todos.map(todo => {
      if(todo.id === id) {todo.isComplete = !todo.isComplete}
      return todo;
    });

    setTodos(updatedTodos);
  }

  const removeToDo = id => {
    const removeArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removeArr);
  }

  const clearList = () => {
    console.log(todos.length);
    const clearArr = [...todos].splice(0, 2);
    console.log(todos.length);

    setTodos(todos);
  }

  return (
    <div>
      <h1>My To-Do List </h1>
      <div className='todo-list-scrollable'>
        <Todo todos={todos} completeToDo={completeToDo} removeToDo = {removeToDo} updateToDo={updateToDo} />
      </div>
      <div className='adder'>
        <TodoForm onSubmit={addToDo}/>
        {/* <button className='todo-clear' onClick={clearList}>Clear List</button> */}
      </div>
    </div>
  )
}

export default TodoList