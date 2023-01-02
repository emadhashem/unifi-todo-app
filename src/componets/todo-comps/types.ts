export interface Todo {
    title : string
    description : string
    createdAt : Date
    id : string
    checked : boolean
}

export interface ListTodoItem extends Todo {
    archiveAt? : Date | null
    finishedAt? : Date | null
}