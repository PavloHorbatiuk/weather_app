import React, { ChangeEvent, KeyboardEvent } from 'react'
import { Button, TextField } from "@mui/material";

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
        <div>
            <TextField
                fullWidth
                value={location}
                onChange={changeLocation}
                onKeyPress={enterHandler}
                id="standard-search"
                label="Search field"
                type="search"
                variant="standard"
            />
            <Button onClick={findHandler}>Find</Button>
        </div>
    )
}

AddLocationForm.propTypes = {}

export default AddLocationForm
