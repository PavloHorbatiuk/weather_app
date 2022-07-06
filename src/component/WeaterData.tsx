import {Grid, Typography} from '@mui/material';
import {Box, styled} from '@mui/system'
import React from 'react'
import theme, {outBoxshadow} from '../theme';
import {DataType} from './types'


const Title = styled(Typography)(() => ({
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 24,
}));
const Paragraph = styled(Typography)(() => ({
    fontWeight: 'bold',
    fontSize: 20,
}));
const IconWrapper = styled(Box)(() => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    marginTop: theme.spacing(1),
    textAlign: 'left',
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    boxShadow: "inset 2px 1px 3px 0 rgb(200 186 186 / 50%)",
    background: "#f3f4f7",
    fontSize: "24px",
    borderRadius: "10px",
    color: "#ffff"
}));


type WeatherDataTypes = {
    data: DataType;
    converterKelvin: (k: number) => string;
    icon: string | undefined;
    color: string
}
const WeatherData: React.FC<WeatherDataTypes> = ({data, converterKelvin, icon, color}) => {
    const Item = styled(Box)(() => ({
        padding: theme.spacing(1),
        marginTop: theme.spacing(1),
        textAlign: 'left',
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        background: `${color}`,
        boxShadow: outBoxshadow,
    }));
    const clouds = data.weather.map(f => f.description)
    return (
        <Box sx={{
            flexGrow: 1
        }}>
            <Title>{data.name}</Title>
            <Grid container
                  rowSpacing={1}
                  direction={{xs: "column", sm: "row"}}
                  columnSpacing={{xs: 1, sm: 2, md: 3}}>
                <Grid item xs={12}>
                    <Item>
                        <IconWrapper>
                            <img style={{height: 'auto'}} src={icon} alt='icon'/>
                        </IconWrapper>
                        <Paragraph>
                            Temperature {converterKelvin(data.main.temp)} °C
                        </Paragraph>
                        <Paragraph>
                            Humidity: {data.main.humidity}%
                        </Paragraph>
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <Paragraph>
                            Feels like {converterKelvin(data.main.feels_like)} °C
                        </Paragraph>
                    </Item>
                    <Item>
                        <Paragraph>
                            Sky: {clouds}
                        </Paragraph>
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <Paragraph>
                            Main: {data.weather.map(f => f.main)}
                        </Paragraph>
                    </Item>
                    <Item>
                        <Paragraph>
                            Wind: {data.wind.speed} mph
                        </Paragraph>
                    </Item>
                </Grid>
            </Grid>
        </Box >
    )
}

export default WeatherData
