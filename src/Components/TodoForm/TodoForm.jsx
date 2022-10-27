import React, { useState, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './todoform.css'

function TodoForm(props) {
    const [input, setInput] = useState('')

    const priorityRef = useRef()

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault() // stop reload on submit

        props.onSubmit({
            id: uuidv4(),
            title: input,
            priority: priorityRef.current.value
        })

        setInput('')
    }

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <div className='formElement'>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    placeholder='Add Todo'
                    value={input}
                    name='title'
                    className='todo-input'
                    onChange={handleChange}
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
        </form>
    )
}

export default TodoForm