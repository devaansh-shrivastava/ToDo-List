import React, {useState} from 'react'
import TodoForm from './ToDoForm'
import { RiCloseCircleLine } from "react-icons/ri"
import { TiEdit } from "react-icons/ti"

function ToDo({todos, completeToDo, removeToDo, updateToDo}) {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  })

  const submitUpdate = value => {
    updateToDo(edit.id, value)
    setEdit({
      id: null, 
      value: ''
    })
  }
  if(edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map ((todo, index) => (
    <div className={todo.isComplete ? ('todo-Row-complete')  : ('todo-Row')} key={index}>
      <div key={todo.id} onClick={()=>completeToDo(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine className='deleteIcon' onClick={()=>removeToDo(todo.id)}/>
        <TiEdit  className='editIcon' onClick={()=>setEdit({id: todo.id, value: todo.text})}/>
      </div>
    </div>
  ))
}

export default ToDo