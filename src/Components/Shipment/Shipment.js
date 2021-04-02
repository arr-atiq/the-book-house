import React, { useContext, useEffect, useState } from 'react';
import './Shipment.css';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
// import { UserContext } from '../../App';


const Shipment = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const { productId } = useParams();
    const [orderProduct, setOrderProduct] = useState([]);
    console.log(orderProduct);

    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrderProduct(data));
    }, [])

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const onSubmit = (data) => {
        const allPlaceNewOrder = {...loggedInUser, orderProduct, shipment: data, orderTime: new Date()}
        const url = 'http://localhost:5000/orderPlace';
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(allPlaceNewOrder)
        })
            .then(res => {
                alert("Order Place Successful!");
            })
    }

    return (

        <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
            <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your Name" />
            {errors.name && <span className="error">Name is required</span>}

            <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your Email" />
            {errors.email && <span className="error">Email is required</span>}

            <input name="address" ref={register({ required: true })} placeholder="Your Address" />
            {errors.address && <span className="error">Address is required</span>}

            <input name="phone" ref={register({ required: true })} placeholder="Your Phone Number" />
            {errors.phone && <span className="error">Phone Number is required</span>}

            <input type="submit" />
        </form>

    );
};

export default Shipment;
