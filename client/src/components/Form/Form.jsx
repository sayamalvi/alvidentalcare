import React, { useState } from 'react'
import classes from './Form.module.scss'
import { TextField } from '@mui/material'

const loadScript = (src) => {
    return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = src
        document.body.appendChild(script)
        script.onload = () => {
            resolve(true)
        }
        script.onerror = () => {
            resolve(false)
        }
        document.body.appendChild(script)
    })
}
const Form = () => {

    // Razorpay --------------------------------------------------
    const displayRazorpay = async () => {
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

        if (!res) {
            alert("Failed to load")
            return;
        }

        const data = await fetch('http://localhost:1337/razorpay', { method: 'POST' }).then((t) => t.json()
        )
        console.log(data)

        const options = {
            "key": process.env.REACT_APP_RAZORPAY_KEY,
            currency: data.currency,
            amount: data.amount.toString(),
            order_id: data.id,
            "name": "Alvi Dental Care",
            "description": "Test Transaction",

        }
        const paymentObject = new window.Razorpay(options)
        paymentObject.open()
    }
    //------------------------------------------------------------
    const [isFilled, setIsFilled] = useState(false)
    // const [isFormFilled, setFormFilled] = useState({
    //     nameFilled: false,
    //     phoneFilled: false,
    //     issueFilled: false,
    //     dateFilled: false
    // })
    let buttonClass = isFilled ? 'filled' : 'notFilled'
    const [user, setUser] = useState({
        name: "",
        phone: "",
        issue: "",
        date: ""
    })
    console.log(buttonClass)

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
            <h1>Book an Appointment</h1>
            <form
                autoComplete='off'
                className={classes.form}
                onSubmit={handleSubmit}

            >
                <TextField
                    type='text'
                    required
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
                        // setFormFilled((prev) => {
                        //     return {
                        //         ...prev,
                        //         name: true
                        //     }
                        // })
                    }}
                />
                <TextField
                    type='number'
                    required
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
                    type='text'
                    required
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
                <input
                    required
                    type='date'
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
                <button
                    className={classes.buttonClass}
                    onClick={displayRazorpay}
                >
                    Book
                </button>

            </form>
        </div>
    )
}

export default Form