import { instance } from '../server.js'

export const checkout = async (req, res) => {
    const options = {
        amount: "200000",
        currency: "INR",
    }

    const order = await instance.orders.create(options)
    console.log(order)

    res.status(200).json({ success: true, order })
}

export const paymentVerification = async (req, res) => {
    res.status(200).json({ success: true, order })
}