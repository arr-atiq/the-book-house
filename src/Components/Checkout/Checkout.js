import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Checkout.css';
import { Button } from 'react-bootstrap';

const Checkout = () => {
    const { productId } = useParams();
    const [checkProduct, setCheckProduct] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCheckProduct(data))
    }, [])

    const handleOrder = () => {

    }
    return (
        <div className="checkout-info">
            <img src={checkProduct.productUrl} alt="" />
            <div className="product-details">
                <p>{checkProduct.name}</p>
                <p><small>{checkProduct.author}</small></p>
                <p>Price: ${checkProduct.price}</p>
                <Button onClick={()=>handleOrder()} className="buy-now" variant="primary">Buy Now</Button>{' '}
            </div>
        </div>
    );
};

export default Checkout;