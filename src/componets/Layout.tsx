import { Container, IconButton, Typography } from '@mui/material'
import Divider from '@mui/material/Divider'
import { Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import CloudIcon from '@mui/icons-material/Cloud';
import { Link, useNavigate } from 'react-router-dom';
import WaetherComp from './weather-comps/WaetherComp';
import { getCurrentWheather } from '../api/weatherApi';
type LayOutProps = {
    children: React.ReactNode
}

function Layout({ children }: LayOutProps) {
    const navigate = useNavigate()
    const [weather, setweather] = useState(null)
    useEffect(() => {
        getCurrentWheather()
        .then(data => setweather(data))
    }, [])

    return (
        <Container>
            <Stack width={'100%'} direction={"row"} justifyContent="space-between" alignItems={"center"} >
                <Typography variant='h3' >TODO APP</Typography>
                <Stack width={'30%'} direction = {"row"} alignItems = "center" >
                    {weather && <WaetherComp waether={weather} />}
                    <Typography variant='h3' >
                        <IconButton onClick={() => navigate('/weather')} size='large' >
                            <CloudIcon fontSize='large' />
                        </IconButton>

                    </Typography>
                </Stack>
            </Stack>
            <Divider />
            {children}
        </Container>
    )
}

export default Layout