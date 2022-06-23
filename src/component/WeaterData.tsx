import { Grid, Typography } from '@mui/material';
import { Box, styled } from '@mui/system'
import React from 'react'
import { DataType } from './models'

const ShoppingCartHeader = styled(Typography)(() => ({
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 24,
}));
const ItemsListWrapper = styled(Box)(() => ({
    paddingTop: 20,
}));
type WeatherDataTypes = {
    data: DataType;
    converterKelvin: (k: number) => string
}
const WeatherData: React.FC<WeatherDataTypes> = ({ data, converterKelvin }) => {

    return (
        <ItemsListWrapper>
            <Grid container key={data.weather.id}>
                <Grid item xs={12} md={8}>
                    <ShoppingCartHeader>{data.name}</ShoppingCartHeader>
                </Grid>
                <Grid item xs={12}>
                    <p>{converterKelvin(data.main?.temp)}</p>
                </Grid>
            </Grid>
        </ItemsListWrapper>
    )
}

export default WeatherData