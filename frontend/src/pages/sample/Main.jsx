import React from 'react'
import axios from "axios";


const payment = (amount) => {


    const checkoutHandler = async (amount) => {

        const { data: { key } } = await axios.get("http://localhost:1406/api/key")

        const { data: { order } } = await axios.post("http://localhost:1406/api/checkout", {
            amount
        })

        const options = {
            key,
            amount: order.amount,
            currency: "INR",
            name: "Sahil kumar",
            description: "RAzorpay testing",
            image: "",
            order_id: order.id,
            callback_url: "http://localhost:5173/student",
            prefill: {
                name: "Sahil Kumar",
                email: "sahil.kumar@example.com",
                contact: "9999999999"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#121212"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();
    }

    return (
        <>
        <div>
           <div className='' ></div>
           <br />
           <button className='bg-red-500'onClick={checkoutHandler(100)}>Buy</button>
        </div>

        </>
    )
}

export default payment;