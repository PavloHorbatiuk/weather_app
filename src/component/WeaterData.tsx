import { Grid, Typography } from '@mui/material';
import { Box, styled } from '@mui/system'
import React from 'react'
import theme from '../theme';
import { DataType } from './types'



const Title = styled(Typography)(() => ({
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 24,
}));
const Paragraph = styled(Typography)(() => ({
    fontWeight: 'bold',
    fontSize: 20,
}));
const Item = styled(Box)(() => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    marginTop: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));
type WeatherDataTypes = {
    data: DataType;
    converterKelvin: (k: number) => string;
    icon: string | undefined
}
const WeatherData: React.FC<WeatherDataTypes> = ({ data, converterKelvin, icon }) => {

    const clouds = data.weather.map(f => f.description)
    return (
        <Box sx={{
            width: '100%', flexGrow: 1
        }}>
            <Title>{data.name}</Title>
            <Grid container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <Item>
                        <Paragraph>
                            Feels like  {converterKelvin(data.main.feels_like)} °C
                        </Paragraph>
                    </Item>
                    <Item>
                        <Paragraph >
                            Sky: {clouds}
                        </Paragraph>
                    </Item>
                    <Paragraph >
                        Main: {data.weather.map(f => f.main)}
                    </Paragraph>
                    <Paragraph >
                        Wind: {data.wind.speed}
                    </Paragraph>
                    <Paragraph >
                        Humidity: {data.main.humidity}
                    </Paragraph>

                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <img style={{ height: 'auto' }} src={icon} alt='icon' />
                    </Item>
                </Grid>
            </Grid>
        </Box >


    )
}

export default WeatherData