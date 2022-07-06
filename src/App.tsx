import React, {useContext, useEffect} from 'react';
import {Main} from './component';
import {UIContext, UIContextProvider} from './UIContext';
import {Box, styled, Typography} from "@mui/material";
import {weatherApi} from "./api/api";
import {DataType} from "./component/types";

const BoxWrapper = styled(Box)(() => ({
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center"

}));
const CustomH1 = styled(Typography)(() => ({
    textAlign: "center",
    alignItems: "center",
    fontSize: '22px',
    lineHeight: "115px",
    fontWeight: "bold",

}));

function App() {
    const [data, setData] = React.useState<DataType | null>(null)
    const [isLoading, setIsloading] = React.useState(true)
    const {setAlert} = useContext(UIContext);
    const Background = styled(Box)(() => ({
        backgroundColor: "#f3f4f7",
        height: '100vh',
    }));
    useEffect(() => {
        setIsloading(true)
        weatherApi.getData()
            .then(res => {
                setData(res.data)
                setIsloading(false)
            })
            .catch(error => {
                setAlert({
                    show: true,
                    severity: 'error',
                    message: JSON.stringify(error),
                })
            })

    }, [])
    if (isLoading) return <BoxWrapper><CustomH1>Loading...</CustomH1></BoxWrapper>
    return (
        <UIContextProvider>
            <Background>
                <Main data={data}
                      setData={setData}
                />
            </Background>
        </UIContextProvider>
    );
}

export default App;
