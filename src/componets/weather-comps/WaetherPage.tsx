import React, { useEffect, useState } from 'react'
import { get5DaysWeather } from '../../api/weatherApi'
import { Button, Divider, Grid, List, Paper, Typography } from '@mui/material'
import { Container } from '@mui/system'
import { styled } from '@mui/material/styles';
import WaetherComp from './WaetherComp';
import { useNavigate } from 'react-router-dom';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginBottom : 2
}));
function WaetherPage() {
    const [wData, setwData] = useState(null)
    const navigate = useNavigate()
    useEffect(() => {
        get5DaysWeather()
            .then(data => {
                const days = {} as any
                data.list.map((item: any, idx: number) => {
                    const arr = item.dt_txt.split(" ")
                    if (days[arr[0]] == undefined) {
                        days[arr[0]] = []
                    }
                    days[arr[0]].push(item)
                    if (idx == data.list.length - 1) setwData(days)

                })
            })
    }, [])
    

    return (
        <Container sx={{marginTop : 2}} >
            <Button onClick={() => navigate('/')} >Back</Button>
            <Grid container >
                {
                    wData && Object.keys(wData).map((key: string) => (
                        <Grid item key={key} xs={2}  >
                            <Item>
                                {key}
                            </Item>
                            {
                                [...wData[key]].map((weather: any) => (
                                    <>
                                        <Typography variant='subtitle2'  sx = {{textAlign : 'center'}} >
                                            {
                                                weather.dt_txt.split(" ")[1]
                                            }

                                        </Typography>
                                        <WaetherComp waether={weather} />
                                        <Divider />
                                    </>
                                ))
                            }
                        </Grid>
                    ))
                }
                <Divider />
            </Grid>
        </Container>
    )
}

export default WaetherPage