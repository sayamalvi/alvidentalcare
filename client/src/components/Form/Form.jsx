import React, { useState } from 'react'
import classes from './Form.module.scss'
import { TextField } from '@mui/material'

const Form = () => {
    const [user, setUser] = useState({
        name: "",
        phone: "",
        issue: "",
        date: ""
    })
    // const handleChange = (e) => {
    //     setUser((prev) => {
    //         return {
    //             ...prev,
    //             value: e.target.value
    //         }
    //     })
    // }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user)
        clear();
    }
    const clear = () => {
        setUser({
            name: "",
            phone: "",
            issue: "",
            date: new Date()
        })
    }
    return (
        <div className={classes.container}>
            <h1>Contact Us !</h1>
            <form
                className={classes.form}
                onSubmit={handleSubmit}
            >
                <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    margin='dense'
                    value={user.name}
                    onChange={(e) => {
                        setUser((prev) => {
                            return {
                                ...prev,
                                name: e.target.value
                            }
                        })
                    }}
                />
                <TextField
                    id="outlined-basic" label="Phone" variant="outlined"
                    margin='dense'
                    value={user.phone}
                    onChange={(e) => {
                        setUser((prev) => {
                            return {
                                ...prev,
                                phone: e.target.value
                            }
                        })
                    }}

                />
                <TextField
                    id="outlined-basic" label="Issue" variant="outlined"
                    margin='dense'
                    value={user.issue}
                    onChange={(e) => {
                        setUser((prev) => {
                            return {
                                ...prev,
                                issue: e.target.value
                            }
                        })
                    }}

                />
                <input type='date'
                    className={classes.date}
                    value={user.date}
                    onChange={(e) => {
                        setUser((prev) => {
                            return {
                                ...prev,
                                date: e.target.value
                            }
                        })
                    }}

                />
                <button className={classes.submit}>
                    Book
                </button>

            </form>
        </div>
    )
}

export default Form