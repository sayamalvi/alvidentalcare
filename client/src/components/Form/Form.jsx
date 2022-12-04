import React, { useState } from 'react'
import classes from './Form.module.scss'
import axios from "axios";
import PaymentSuccess from "../PaymentSuccess/PaymentSucess"

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
                setIsPaid(true)
                setFormValid(false)
                clear()
            },
        }
        const paymentObject = new window.Razorpay(options)
        paymentObject.open()
    }


    //Validations----------------------------------------------


    const [isPaid, setIsPaid] = useState(false);
    const [issuesValid, setIssuesValid] = useState(false);
    const checkIssuesValidation = () => {
        user.issue.length > 1 && user.history.length > 1 ? setIssuesValid(true) : setIssuesValid(false);
    }
    const [phoneValid, setPhoneValid] = useState(false);
    const checkPhoneValidation = () => {
        user.phone.length === 9 ? setPhoneValid(true) : setPhoneValid(false);
    }

    const [nameValid, setNameValid] = useState(false);
    const checkNameValidation = () => {
        user.firstName.length > 1 && user.lastName.length > 1 ? setNameValid(true) : setNameValid(false)
    }
    const [dateValid, setDateValid] = useState(false);
    const checkDateValidation = () => {
        user.date !== " " && user.time !== " " ? setDateValid(true) : setDateValid(false)
        console.log(user.time, user.date)
    }
    const [formValid, setFormValid] = useState(false);
    const checkFormValid = () => {
        phoneValid && nameValid && issuesValid && dateValid ? setFormValid(true) : setFormValid(false);
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
            {isPaid === false ? (
                <>
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
                        {nameValid &&
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
                        }
                        {phoneValid &&
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
                        }
                        {phoneValid &&
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
                        }
                        {issuesValid &&
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
                                            checkDateValidation()
                                            checkFormValid()
                                        }}

                                    />
                                </div>
                            </div>
                        }
                        {formValid ? (
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
                </>
            ) : (
                <PaymentSuccess setIsPaid={setIsPaid} />
            )}
        </div>
    )
}

export default Form