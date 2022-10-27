import React, { useState } from 'react'
import Todo from '../Todo/Todo'
import TodoForm from '../TodoForm/TodoForm'

function TodoList() {
    const [todos, setTodos] = useState([])

    // function to add a todo
    const addTodo = (todo) => {
        // ensure todo is not empty on submission
        if (!todo.title || /^\s*$/.test(todo.title)) {
            return
        }

        const newTodos = [todo, ...todos]
        setTodos(newTodos)
    }

    // toggling a complete todo status
    const completeTodo = (id)=>{
        let updatedTodos = todos.map(todo=>{
            if(todo.id === id){
                todo.isComplete = !todo.inComplete
            }
            return todo
        })

        setTodos(updatedTodos)
    }

    return (
        <div>
            <h3>Anything to do?</h3>
            <TodoForm onSubmit={addTodo} />
            <Todo todos={todos} completeTodo={completeTodo}/>
        </div>
    )
}

export default TodoList