import React, { useState, useRef, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './todoform.css'

function TodoForm(props) {
    // check if an edit has been passed
    const [input, setInput] = useState(props.edit ? props.edit.value : '')

    const priorityRef = useRef()
    const inputRef = useRef(null)

    // onPage load
    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault() // stop reload on submit

        props.onSubmit({
            id: uuidv4(),
            title: input,
            priority: priorityRef.current.value,
            complete: false
        })

        setInput('')
    }

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                    <div className='formElement'>
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            placeholder='Edit todo'
                            value={input}
                            name='title'
                            className='todo-input'
                            onChange={handleChange}
                            ref={inputRef}
                        />
                    </div>
                    <div className='formElement'>
                        <label htmlFor="priority">Priority:</label>
                        <select name="priority" id="priority" ref={priorityRef}>
                            <option value="high" >High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                    </div>
                    <button className='todo-button' id='editTodo'>Update</button>
                </>
            ) : (
                <>
                    <div className='formElement'>
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            placeholder='Add Todo'
                            value={input}
                            name='title'
                            className='todo-input'
                            onChange={handleChange}
                            ref={inputRef}
                        />
                    </div>
                    <div className='formElement'>
                        <label htmlFor="priority">Priority:</label>
                        <select name="priority" id="priority" ref={priorityRef}>
                            <option value="high" >High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                    </div>
                    <button className='todo-button' id='addTodo'>Add Todo</button>
                </>
            )}
        </form>
    )
}

export default TodoForm