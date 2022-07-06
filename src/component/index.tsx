import React, {useContext, useEffect} from 'react'
import AddLocationForm from './AddLocationForm'
import {DataType} from './types'
import WeatherData from './WeaterData';
import {Container} from '@mui/material';
import {weatherApi} from '../api/api';
import {UIContext} from '../UIContext';
import clouds from './../assets/static/cloudy.svg';
import rain from './../assets/static/rainy-1.svg';
import sun from './../assets/static/day.svg';
import clear from './../assets/static/day.svg';
import snow from './../assets/static/snowy-3.svg';
import smthingElse from './../assets/static/weather.svg';


interface MainProps {
    data: DataType | null
    setData: (data: DataType) => void
}

export const Main: React.FC<MainProps> = ({data, setData}) => {
    const [color, setColor] = React.useState('')
    const [icon, setIcon] = React.useState<string>()
    const dataWeather = data?.weather.find(f => f.main)
    const {setAlert} = useContext(UIContext);
    const converterKelvin = (k: number) => {
        return (k - 273.15).toFixed()
    }
    const keyPressHandler = (e: number, location: string) => {
        if (e === 13) {
            locationHandler(location)
        }
    }
    const locationHandler = (location: string) => {
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
            });
    }




    useEffect(() => {
        if (dataWeather?.main === "Clouds") {
            setColor("rgba(124, 124, 124, 1)")
            setIcon(clouds)
        } else if (dataWeather?.main === "Rain") {
            setColor("rgba(28, 87, 130, 1)")
            setIcon(rain)
        } else if (dataWeather?.main === "Sun") {
            setColor("rgba(255, 203, 103, 1)")
            setIcon(sun)
        } else if (dataWeather?.main === "Snow") {
            setIcon(snow)
        } else if (dataWeather?.main === "Clear") {
            setColor("rgba(255, 203, 103, 1)")
            setIcon(clear)
        } else {
            setIcon(smthingElse)
        }
    }, [dataWeather?.main])


    return (
        <div>
            <Container maxWidth='sm'>
                <AddLocationForm
                    keyPressHandler={keyPressHandler}
                    locationHandler={locationHandler} />
                {!!data &&
                    < WeatherData
                        color={color}
                        icon={icon}
                        converterKelvin={converterKelvin}
                        data={data} />}
            </Container>
        </div>
    )
}


