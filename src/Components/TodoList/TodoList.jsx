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

    // Function to update todo
    const updateTodo = (todoId, newVal) => {
        // ensure todo is not empty on submission
        if (!newVal.title || /^\s*$/.test(newVal.title)) {
            return
        }

        setTodos(pre => pre.map(itm => itm.id === todoId ? newVal : itm))
    }

    // function to delete todos
    const removeTodo = id => {
        const removeArry = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArry)
    }

    // toggling a complete todo status
    const completeTodo = (id) => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.complete = !todo.complete
            }
            return todo
        })

        setTodos(updatedTodos)
    }

    return (
        <div>
            <h3>Anything to do?</h3>
            <TodoForm onSubmit={addTodo} />
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
        </div>
    )
}

export default TodoList