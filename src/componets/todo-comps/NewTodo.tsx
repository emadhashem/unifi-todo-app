import React, { useContext, useState } from 'react'
import Container from '@mui/material/Container'
import { FormControl } from '@mui/material';
import TextField from '@mui/material/TextField'
import { Stack } from '@mui/system'
import Button from '@mui/material/Button'
import {Todo} from './types'
import { v4 } from 'uuid';
import { TodoContext } from './context/todoapp-context';


function NewTodo() {
    const [title, settitle] = useState('')
    const [description, setdescription] = useState('')
    const context = useContext(TodoContext)
    
    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if(!title || !description) return alert('please add title and description')
        context.add({
            title,
            description,
            createdAt : new Date(),
            id : v4(),
            checked : false
        })
        settitle('')
        setdescription('')
    }
    return (
        <form onSubmit={onSubmit} >
            <Stack direction={"column"} spacing={2} sx={{ marginTop: 3 }}  >
                <TextField value={title} label="title" name='title' onChange={e => settitle(e.target.value)} />
                <TextField value={description} label="description" onChange={e => setdescription(e.target.value)} />
            </Stack>
            <Button type='submit'>
                Add
            </Button>
        </form >
    )
}

export default NewTodo