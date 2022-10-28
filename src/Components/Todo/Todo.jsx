import React, { useState } from 'react'
import { MdDeleteOutline } from 'react-icons/md'
import { GrEdit } from 'react-icons/gr'
import './todo.css'

function TodoItem({ todo,completeTodo,removeTodo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })
    return (
        <div className='todoItem'>
            <div>
                <button className={todo.complete ? 'completeBtn' : 'incompleteBtn'} onClick={() => completeTodo(todo.id)}>{todo.complete ? "Mark Undone" : "Mark Done"}</button>
            </div>
            <div>
                {todo.title}
            </div>
            <div>
                {todo.priority}
            </div>
            <div className='icons'>
                <MdDeleteOutline onClick={() => removeTodo(todo.id)} />
                <GrEdit onClick={()=>setEdit({ id: todo.id, title: todo.title, priority: todo.priority })} />
            </div>
        </div>
    )
}


function Todo({ todos, completeTodo, removeTodo }) {
    

    return (
        <div className='todoContainer'>
            {todos.map((todo) => (
                <TodoItem key={todo.index} todo={todo} completeTodo={completeTodo} removeTodo={removeTodo} />
            ))
            }
        </div>
    )
}

export default Todo