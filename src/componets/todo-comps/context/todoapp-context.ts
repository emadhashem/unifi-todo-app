import React from "react"
import { ListTodoItem, Todo } from "../types"
export interface ITodoContext {
    todos : ListTodoItem[]
    add : (todo : Todo) => void
    delete : (id : string) => void
    update : (id : string , newTitle : string , newDescription : string) => void
    archive : (id : string) => void
    mark : (id : string) => void
} 

export const TodoContext = React.createContext<ITodoContext>({
    todos : [],
    add : () => {},
    delete : () => {},
    update : () => {},
    archive : () => {},
    mark : () => {}
})
