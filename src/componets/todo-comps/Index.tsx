
import Container from '@mui/material/Container'
import React, { useState } from 'react'
import NewTodo from './NewTodo'
import { ListTodoItem, Todo } from './types'
import TodoList from './TodoList'
import { TodoContext } from './context/todoapp-context'

function Home() {

    const [todos, settodos] = useState<ListTodoItem[]>([])
    function addTodo(newTodo : Todo) {
        settodos(preTodos => [newTodo , ...preTodos])
    }
    function deletTodo(id : string) {
        settodos(preTodos => preTodos.filter(todo => todo.id !== id))
    }
    function editTodo(id : string , newTitle : string , newDescription : string) {
        settodos(preTodos => preTodos.map(todo => {
            if(todo.id !== id) return todo
            else return{...todo , title : newTitle , description : newDescription}
        }))
    }
    function markTodo(id : string) {
        settodos(preTodos => preTodos.map(todo => {
            if(todo.id !== id) return todo
            else return{...todo , checked : !todo.checked, finishedAt :(!!todo.finishedAt) ? null : new Date}
        }))
    }
    
    function archiveTodo(id : string) {
        settodos(preTodos => preTodos.map(todo => {
            if(todo.id !== id) return todo
            else return{...todo , archiveAt : (!!todo.archiveAt) ? null : new Date}
        }))
    }
    
    return (
        <Container maxWidth="md">
            <TodoContext.Provider value={{todos , add : addTodo, delete : deletTodo, update : editTodo, archive : archiveTodo, mark : markTodo}} >
                <NewTodo />
                <TodoList />
            </TodoContext.Provider>
        </Container>
    )
}

export default Home