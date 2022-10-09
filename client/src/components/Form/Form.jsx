import React, { useState } from 'react'
import classes from './Form.module.scss'
import { TextField } from '@mui/material'

const Form = () => {
    const [user, setUser] = useState({
        name: "",
        phone: "",
        issue: "",
        date: new Date()
    })
    return (
        <form className={classes.form}>
            <TextField
                id="outlined-basic" label="Name"
                variant="outlined"
                margin='dense'
                
            />
            <TextField
                id="outlined-basic" label="Phone" variant="outlined"
                margin='dense'

            />
            <TextField
                id="outlined-basic" label="Issue" variant="outlined"
                margin='dense'
            />
            <input type='date'
                className={classes.date}
            />
            <button className={classes.submit}>
                Book
            </button>

        </form>
    )
}

export default Form