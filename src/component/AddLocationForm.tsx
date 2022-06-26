import React, { ChangeEvent, KeyboardEvent } from 'react'
import { Box, Button, styled, TextField } from "@mui/material";

const Wrapper = styled(Box)(() => ({
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 24,
}));


type AddLocationFormProps = {
    locationHandler: (location: string) => void
    keyPressHandler: (e: number, location: string) => void
}
const AddLocationForm: React.FC<AddLocationFormProps> = ({ locationHandler, keyPressHandler }) => {
    const [location, setLocation] = React.useState<string>('')
    const changeLocation = (e: ChangeEvent<HTMLInputElement>) => setLocation(e.target.value)
    const findHandler = () => locationHandler(location)
    const enterHandler = (e: KeyboardEvent<HTMLInputElement>) => keyPressHandler(e.charCode, location)
    return (
        <Wrapper>
            <TextField
                fullWidth
                value={location}
                onChange={changeLocation}
                onKeyPress={enterHandler}
                id="standard-search"
                label="Location"
                type="search"
                variant="standard"
            />
            <Button onClick={findHandler}>Find</Button>
        </Wrapper>
    )
}

AddLocationForm.propTypes = {}

export default AddLocationForm
