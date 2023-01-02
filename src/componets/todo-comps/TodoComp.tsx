import React, { useContext, useState } from 'react'
import { ListTodoItem } from './types'
import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import { TodoContext } from './context/todoapp-context'
import EditIcon from '@mui/icons-material/Edit';3
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import UnarchiveIcon from '@mui/icons-material/Unarchive';
function TodoComp({ todo }: { todo: ListTodoItem }) {
    const context = useContext(TodoContext)
    const [title, settitle] = useState(todo.title)
    const [description, setdescription] = useState(todo.description)

    const handleMarkTodo = () => (_e: React.ChangeEvent<HTMLInputElement>) => {
        context.mark(todo.id)
    }
    const handleDelete = () => () => {
        context.delete(todo.id)
    }
    const handleUpdate = () => () => {
        context.update(todo.id , title , description)
    }
    const handleArchive = () => () => {
        context.archive(todo.id)
    }
    function formatDate(date : Date) {
        let format = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}-${date.toLocaleString()}`;
        return format
    }

    return (
        <Accordion sx={{width : '100%'}} >
            <AccordionSummary >
                <Stack width={"50%"} >
                    <Typography sx={{textDecorationLine: (todo.checked ? 'line-through' : 'none')}} >
                        {todo.title}
                    </Typography>
                    <Typography sx={{textDecorationLine: (todo.checked ? 'line-through' : 'none')}}>
                        {todo.description}
                    </Typography>
                </Stack>
                <Stack  width={"50%"} >
                    <Typography sx = {{ width : '100%'}} variant='subtitle1' >
                        Create at {formatDate(todo.createdAt)} 
                    </Typography>
                    {(!!todo.archiveAt) && <Typography sx = {{ width : '100%'}} variant='subtitle1' >
                        Archive at {formatDate(todo.archiveAt)} 
                    </Typography>}
                    {(!!todo.finishedAt) && <Typography sx = {{ width : '100%'}} variant='subtitle1' >
                        Finished at {formatDate(todo.finishedAt)} 
                    </Typography>}
                </Stack>
            </AccordionSummary>
            
            <AccordionDetails>
                <Stack direction={"column"}
                    spacing={3}
                    
                >
                    <TextField sx={{width : '100%'}} disabled={todo.checked} label="title" value={title} onChange={e => settitle(e.target.value)} />
                    <TextField sx={{width : '100%'}} disabled={todo.checked} label="description" value={description} onChange={e => setdescription(e.target.value)} />
                    <Button sx={{width : '20%'}} onClick={handleUpdate()} disabled = {todo.checked} >
                        Edit <EditIcon />
                    </Button>
                </Stack>
                <Stack direction={"row"} justifyContent = "space-between" >
                    <Checkbox checked={todo.checked} onChange={handleMarkTodo()} />
                    <Button variant='contained' color='error' onClick={handleDelete()}  >
                        delete <DeleteOutlineIcon />
                    </Button>
                    <Button variant='contained' color={(!!todo.archiveAt) ? "success" : "secondary"}  onClick={handleArchive()} >
                        archive <UnarchiveIcon />
                    </Button>
                </Stack>
            </AccordionDetails>
        </Accordion>
    )
}

export default TodoComp