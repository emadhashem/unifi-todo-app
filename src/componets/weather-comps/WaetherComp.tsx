import { Box, Typography } from '@mui/material'
import React from 'react'

function WaetherComp({waether} : {waether : any}) {
  return (
    <Box sx={{width : '100%'}} justifyContent={"space-evenly"} >
        <Typography variant='subtitle2' sx={{textTransform : 'uppercase'}} >
            Status : {waether.weather[0].main}
        </Typography>
        <Typography variant='subtitle2' >
            Current Temp : {waether.main.temp} 
        </Typography>
        <Typography variant='subtitle2' >
            Max Temp : {waether.main.temp_max} 
        </Typography>
        <Typography variant='subtitle2' >
            Min Temp : {waether.main.temp_min} 
        </Typography>
        <Typography variant='subtitle2' >
            Clouds : {waether.clouds.all} %
        </Typography>
        <Typography variant='subtitle2' gutterBottom>
            Wind Speed : {waether.wind.speed} % 
        </Typography>

    </Box>
  )
}

export default WaetherComp