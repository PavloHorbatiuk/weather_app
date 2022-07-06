import React, {ChangeEvent, KeyboardEvent} from 'react'
import {Box, Button, styled, TextField} from "@mui/material";
import Paper from '@mui/material/Paper';
import {inShadow, outBoxshadow} from "../theme";


const Wrapper = styled(Box)(() => ({
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 24,
    padding: "20px 0 20px 0",

}));
const FindButton = styled(Button)(() => ({
    variant: "outlined",
    boxShadow: outBoxshadow
}));

type AddLocationFormProps = {
    locationHandler: (location: string) => void
    keyPressHandler: (e: number, location: string) => void
}
const AddLocationForm: React.FC<AddLocationFormProps> = ({locationHandler, keyPressHandler}) => {
    const [location, setLocation] = React.useState<string>('')
    const changeLocation = (e: ChangeEvent<HTMLInputElement>) => setLocation(e.target.value)
    const findHandler = () => locationHandler(location)
    const enterHandler = (e: KeyboardEvent<HTMLInputElement>) => keyPressHandler(e.charCode, location)
    return (
        <Wrapper>
            <Paper>
                <TextField
                    sx={{
                        background: "#f1f1f4",
                        borderRadius: "5px 0 0 5px",
                        boxShadow: inShadow,
                    }}
                    fullWidth
                    value={location}
                    onChange={changeLocation}
                    onKeyPress={enterHandler}
                    id="standard-search"
                    label="Location"
                    type="search"
                    variant="outlined"
                    InputProps={{endAdornment: <FindButton onClick={findHandler}>Find</FindButton>}}
                />
            </Paper>
        </Wrapper>
    )
}

AddLocationForm.propTypes = {}

export default AddLocationForm
