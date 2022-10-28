import React, { useState } from 'react'
import { MdDeleteOutline } from 'react-icons/md'
import { GrEdit } from 'react-icons/gr'
import TodoForm from '../TodoForm/TodoForm'
import './todo.css'

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const submitEdit = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    // return a form to update on the edit button click
    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitEdit} />
    }


    return (
        <div className='todoContainer'>
            {todos.map((todo) => (
                <div className={todo.complete?'completeRow':''}>
                    <div className='todoItem' key={todo.index} >
                        <div>
                            <button className={todo.complete ? 'completeBtn' : 'incompleteBtn'} onClick={() => completeTodo(todo.id)}>{todo.complete ? "Mark Undone" : "Mark Done"}</button>
                        </div>
                        <div className='titleDiv'>
                            {todo.title}
                        </div>
                        <div>
                            {todo.priority}
                        </div>
                        <div className='icons'>
                            <MdDeleteOutline onClick={() => removeTodo(todo.id)} />
                            <GrEdit onClick={() => setEdit({ id: todo.id, title: todo.title, priority: todo.priority })} />
                        </div>
                    </div>
                </div>
            ))
            }
        </div>
    )
}

export default Todo