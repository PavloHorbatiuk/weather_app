import React, { ChangeEvent } from 'react'
import { Button, TextField } from "@mui/material";

type AddLocationFormProps = {
    locationHandler: (location: string) => void
}
const AddLocationForm: React.FC<AddLocationFormProps> = ({ locationHandler }) => {
    const [location, setLocation] = React.useState<string>('')
    const changeLocation = (e: ChangeEvent<HTMLInputElement>) => setLocation(e.target.value)
    const findHandler = () => locationHandler(location)
    return (
        <div>
            <TextField
                fullWidth
                value={location}
                onChange={changeLocation}
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
