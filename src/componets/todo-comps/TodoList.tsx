import { List, ListItem } from '@mui/material'
import React, { useContext } from 'react'
import { ListTodoItem } from './types'
import TodoComp from './TodoComp'
import { TodoContext } from './context/todoapp-context'


function TodoList() {
    const contxt = useContext(TodoContext)
  return (
    <List sx={{width : '100%'}} >
        {
            contxt.todos.map(todo => (
                <ListItem  key={todo.id} >
                    <TodoComp todo = {todo} />
                </ListItem>
            ))
        }
    </List>
  )
}

export default TodoList