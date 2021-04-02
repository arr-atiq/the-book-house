import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import './Checkout.css';
import { Button } from 'react-bootstrap';

const Checkout = () => {
    const { productId } = useParams();
    const [checkProduct, setCheckProduct] = useState({});
    
    useEffect(() => {
        const url = `https://frozen-island-42030.herokuapp.com/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data =>
                setCheckProduct(data))
    }, [])

    const history = useHistory();
    const handleAddProduct = productId => {
        history.push(`/shipment/${productId}`);
    }
    return (
        <div className="details-section">
            <div className="checkout-info">
                <img src={checkProduct.productUrl} alt="" />
                <div className="product-details">
                    <p>Book: {checkProduct.name}</p>
                    <p><small>Author: {checkProduct.author}</small></p>
                    <p><small>Quantity: 1</small></p>
                    <p><small>Price: ${checkProduct.price}</small></p>
                    <p><small>ShippingCost: ${checkProduct.shippingCost}</small></p>
                    <p><small>Vat: ${checkProduct.vat}</small></p>
                    <Button onClick={() => handleAddProduct(productId)} className="buy-now" variant="primary">Place Order</Button>{' '}
                </div>
            </div>
        </div>
    );
};

export default Checkout;