import React from 'react'
import Todo from '../Todo/Todo'
import TodoList from '../TodoList/TodoList'
import './body.css'

export default function Body() {
    return (
        <>
            <div className='container'>
                <div className='content'>
                    <div className='titleSearch'>
                        <h1>Todo App</h1>
                        <div className='searchDiv'>
                            <input type="text" placeholder='Type to Search' />
                            <button>Search</button>
                        </div>
                    </div>
                    <hr />
                    <div className='contentSection'>
                        <div className='leftNav'>
                            <a>Add Todo</a>
                            <a>Incomplete Todos</a>
                            <a>Completed Todos</a>
                            <div className='selector'>
                                <label htmlFor="priority">Priority:</label>
                                <select name="priority" id="priority">
                                    <option value="high">High</option>
                                    <option value="medium">Medium</option>
                                    <option value="low">Low</option>
                                </select>
                            </div>
                        </div>
                        <div className='contentDisplay'>
                            <TodoList />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
