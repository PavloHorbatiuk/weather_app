import React, {useContext, useEffect} from 'react'
import AddLocationForm from './AddLocationForm'
import {DataType} from './types'
import WeatherData from './WeaterData';
import {Container} from '@mui/material';
import {weatherApi} from '../api/api';
import {UIContext} from '../UIContext';
import smthingElse from './../assets/static/weather.svg';
import {cloudColor, rainSky, sunColor} from "../theme";


const values = {
    clouds: "Clouds",
    rain: "Rain",
    sun: "Sun",
    snow: "Snow",
    clear: "Clear",
}

export interface ValidationType {
    helperText: string
    error: boolean;
}

interface MainProps {
    data: DataType | null
    setData: (data: DataType) => void
}

export const Main: React.FC<MainProps> = ({data, setData}) => {
    const [color, setColor] = React.useState('')
    const [icon, setIcon] = React.useState<string>()
    const [validation, setValidation] = React.useState<ValidationType>({
        helperText: '',
        error: false
    })
    const {sun, rain, clouds, snow, clear} = values
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
        if (location.length < 2) {
            setValidation({error: true, helperText: 'Incorrect text'})
        } else {
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
    }


    useEffect(() => {
        switch (dataWeather?.main) {
            case clouds: {
                setColor(cloudColor)
                setIcon(clouds);
                break
            }
            case sun: {
                setColor(sunColor)
                setIcon(sun)
                break
            }
            case rain: {
                setColor(rainSky)
                setIcon(rain)
                break
            }
            case snow: {
                setIcon(snow)
                break
            }
            case clear: {
                setColor(sunColor)
                setIcon(clear)
                break
            }
            default: {
                setIcon(smthingElse)
            }

        }
    }, [dataWeather?.main])


    return (
        <div>
            <Container maxWidth='sm'>
                <AddLocationForm
                    validation={validation}
                    keyPressHandler={keyPressHandler}
                    locationHandler={locationHandler} />
                {!!data &&
                    < WeatherData
                        color={color}
                        icon={icon}
                        converterKelvin={converterKelvin}
                        data={data}/>}
            </Container>
        </div>
    )
}


// if (dataWeather?.main === "Clouds") {
//     setColor(cloudColor)
//     setIcon(clouds)
// } else if (dataWeather?.main === "Rain") {
//     setColor(rainSky)
//     setIcon(rain)
// } else if (dataWeather?.main === "Sun") {
//     setColor(sunColor)
//     setIcon(sun)
// } else if (dataWeather?.main === "Snow") {
//     setIcon(snow)
// } else if (dataWeather?.main === "Clear") {
//     setColor(sunColor)
//     setIcon(clear)
// } else {
//     setIcon(smthingElse)
// }
