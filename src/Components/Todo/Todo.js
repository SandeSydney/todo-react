import React, { useState } from 'react'
import { MdDeleteOutline } from 'react-icons/md'
import { GrEdit } from 'react-icons/gr'


function Todo({ todos, completeTodo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    return todos.map((todo, index) => {

        console.log(todo);
        <div className={todo.complete ? 'todoComplete' : 'todoIncomplete'} key={index}>

            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.title}
            </div>
            <div className='icons'>
                <MdDeleteOutline />
                <GrEdit />
            </div>

        </div>
    })
}

export default Todo