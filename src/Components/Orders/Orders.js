import React, { useEffect, useState } from 'react';
import OrdersDetail from '../OrdersDetail/OrdersDetail';

const Orders = () => {

    const [order, setOrder] = useState([])
    useEffect(() => {
        const url = 'http://localhost:5000/allPlaceOrders';
        fetch(url)
        .then(res => res.json())
        .then(data => setOrder(data))
    },[])
    return (
        <div>
            {
                order.map(addOrder => <OrdersDetail order = {addOrder}></OrdersDetail>)
            }
        </div>
    );
};

export default Orders;