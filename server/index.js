const express = require('express')
const app = express();
const path = require('path');
const Razorpay = require('razorpay')
const shortid = require('shortid')
const cors = require('cors');
const { config } = require('dotenv');
require('dotenv').config()
config({ path: "./config/config.env" })
app.use(cors())


const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY,
    key_secret: process.env.RAZORPAY_SECRET
})

app.post('/razorpay', async (req, res) => {
    const payment_capture = 1
    const amount = 1
    const currency = 'INR'

    const options = {
        amount: amount * 100,
        currency,
        receipt: shortid.generate(),
        payment_capture,
    }

    try {
        const response = await razorpay.orders.create(options)
        res.json({
            id: response.id,
            currency: response.currency,
            amount: response.amount
        })

    } catch (error) {
        console.log(error)
    }
})











app.listen(1337, () => {
    console.log("Server running ")
})