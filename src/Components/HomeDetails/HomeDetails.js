import React from 'react';
import './HomeDetails.css';
import { Button } from 'react-bootstrap';

const HomeDetails = (props) => {
    const { name, productUrl, author, price } = props.product;
    return (
        <div className="main-products">
            <div className=".single-product">
                <img style={{ width: "300px", height: "300px" }} src={productUrl} alt="" />
                <h4>{name}</h4>
                <h5>{author}</h5>
            </div>
            <div className="btn-area">
                <h4>${price}</h4>
                <Button className="buy-now" variant="primary">Buy Now</Button>{' '}
            </div>
        </div>
    );
};

export default HomeDetails;