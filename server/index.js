const express = require('express')
const mongoose = require('mongoose')
const app = express();
const path = require('path');
const Razorpay = require('razorpay')
const shortid = require('shortid')
const cors = require('cors');
const { config } = require('dotenv');
require('dotenv').config()
config({ path: "./config/config.env" })
app.use(cors())
app.use(express.json())
const PORT = process.env.PORT || 5000;


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


//monogdb connection
mongoose.connect(process.env.URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((err) => console.log(err.message));


app.use("/", require("./routes/patientRoute"))