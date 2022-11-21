import React, { useState } from 'react'
import classes from './Form.module.scss'
import axios from "axios";

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

    // Razorpay ---------------------------------------------------
    const displayRazorpay = async () => {
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

        if (!res) {
            alert("Failed to load")
            return;
        }

        const data = await fetch('http://localhost:5000/razorpay', { method: 'POST' }).then((t) => t.json()
        )

        const options = {
            "key": process.env.REACT_APP_RAZORPAY_KEY,
            currency: data.currency,
            amount: data.amount.toString(),
            order_id: data.id,
            "name": "Alvi Dental Care",
            "description": "Test Transaction",
            "handler": function () {
                // send form data to mongodb
                const newPatient = { ...user }
                axios.post('http://localhost:5000/create', newPatient)
            },
        }
        const paymentObject = new window.Razorpay(options)
        paymentObject.open()
    }


    //Validations----------------------------------------------

    // const [formValid, setFormValid] = useState(false);
    // const checkFormValid = () => {
    //     nameValid && phoneValid ? setFormValid(true) : setFormValid(false);
    // }

    const [issuesValid, setIssuesValid] = useState(false);
    const checkIssuesValidation = () => {
        user.issue.length > 0 && user.history.length > 0 ? setIssuesValid(true) : setIssuesValid(false);
    }
    const [phoneValid, setPhoneValid] = useState(false);
    const checkPhoneValidation = () => {
        user.phone.length === 11 ? setPhoneValid(true) : setPhoneValid(false);
    }

    const [nameValid, setNameValid] = useState(false);
    const checkNameValidation = () => {
        user.firstName.length > 0 && user.lastName.length > 0 ? setNameValid(true) : setNameValid(false)
    }


    //--------------------------------------------------------
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        issue: "",
        history: "",
        date: '',
        time: "",
        // date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
        // time: date.toLocaleTimeString('en-IN'),
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        clear();
    }
    const clear = () => {
        setUser({
            firstName: "",
            lastName: "",
            phone: "",
            issue: "",
            history: "",
            date: '',
            time: ""
        })
    }


    // Main form ---------------------------------------------------
    return (
        <div className={classes.container}>
            <h1>Book an Appointment</h1>
            <form
                autoComplete='off'
                className={classes.form}
                onSubmit={handleSubmit}
            >
                <div>
                    <p className={classes.form__name}>Name</p>
                    <div className={classes.form__name__container}>
                        <input
                            type='text'
                            required
                            placeholder="First Name"
                            variant="filled"
                            value={user.firstName}
                            onChange={(e) => {
                                setUser((prev) => {
                                    return {
                                        ...prev,
                                        firstName: e.target.value
                                    }
                                })
                                checkNameValidation()
                            }}
                        />
                        <input
                            type='text'
                            required
                            placeholder="Last Name"
                            variant="filled"
                            value={user.lastName}
                            onChange={(e) => {
                                setUser((prev) => {
                                    return {
                                        ...prev,
                                        lastName: e.target.value
                                    }
                                })
                                checkNameValidation()
                            }}
                        />
                    </div>
                </div>
                <div className={classes.form__number}>
                    <p>Phone</p>
                    <input
                        type='number'
                        required
                        placeholder="Phone"
                        variant="filled"
                        value={user.phone}
                        onChange={(e) => {
                            setUser((prev) => {
                                return {
                                    ...prev,
                                    phone: e.target.value
                                }
                            })
                            checkPhoneValidation();
                        }}

                    />
                </div>
                <div className={classes.form__history}>
                    <p>Do you have any past medical history ?</p>
                    <div className={classes.form__concerns__history}>
                        <textarea
                            type='text'
                            required
                            placeholder='Blood pressure, Diabetes, etc.'
                            rows='3'
                            variant="filled"
                            value={user.history}
                            onChange={(e) => {
                                setUser((prev) => {
                                    return {
                                        ...prev,
                                        history: e.target.value
                                    }
                                })
                                checkIssuesValidation()
                            }}

                        />
                    </div>
                </div>
                <div className={classes.form__describe_concerns}>
                    <p>Chief Complaint</p>
                    <textarea
                        type='text'
                        required
                        placeholder='Toothache, Bleeding, etc.'
                        rows='5'
                        variant="filled"
                        value={user.issue}
                        onChange={(e) => {
                            setUser((prev) => {
                                return {
                                    ...prev,
                                    issue: e.target.value
                                }
                            })
                            checkIssuesValidation()
                        }}

                    />
                </div>
                <div className={classes.form__date}>
                    <p>Select date and time</p>
                    <div className={classes.form__date__container}>
                        <input
                            required
                            placeholder="Select Date"
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
                        <input
                            required
                            placeholder="Select Date"
                            type='time'
                            className={classes.date}
                            value={user.time}
                            onChange={(e) => {
                                setUser((prev) => {
                                    return {
                                        ...prev,
                                        time: e.target.value
                                    }
                                })
                            }}

                        />
                    </div>
                </div>
                {phoneValid && nameValid && issuesValid ? (
                    <button
                        className={classes.form__buttonClass}
                        onClick={displayRazorpay}
                    >
                        Book
                    </button>
                ) : (
                    <button
                        className={classes.notFilled}
                    >
                        Book
                    </button>
                )}

            </form>
        </div>
    )
}

export default Form