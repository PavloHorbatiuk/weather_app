import React, { useContext, useEffect } from 'react'
import AddLocationForm from './AddLocationForm'
import { DataType } from './models'
import WeatherData from './WeaterData';
import { Container } from '@mui/material';
import { weatherApi } from '../api/api';
import { UIContext } from '../UIContext';


export const Main = () => {
    const [data, setData] = React.useState<DataType | null>(null)
    const { setAlert } = useContext(UIContext);
    const converterKelvin = (k: number) => {
        return (k - 273.15).toFixed()
    }
    const locationHandler = (location: string) =>
        weatherApi.setDataLocation(location)
            .then(res => {
                setData(res.data)
            }).catch(error => {
                console.log(error)
                setAlert({
                    show: true,
                    severity: 'error',
                    message: JSON.stringify(error.message),
                })
            })


    useEffect(() => {
        weatherApi.getData()
            .then(res => {
                setData(res.data)
            })
            .catch(error => {
                setAlert({
                    show: true,
                    severity: 'error',
                    message: JSON.stringify(error),
                })
            })

    }, [])

    return (
        <div>
            <Container maxWidth='sm'>
                <AddLocationForm locationHandler={locationHandler} />
                {!!data && < WeatherData
                    converterKelvin={converterKelvin}
                    data={data} />}
            </Container>
        </div>
    )
}


