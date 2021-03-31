import React from 'react';
import './HomeDetails.css';

const HomeDetails = (props) => {
    const { name, productUrl, author } = props.product;
    return (
        <div className="main-products">
            <div className=".single-product">
                <img style={{ width: "300px", height: "300px" }} src={productUrl} alt="" />
                <h3>{name}</h3>
                <h3>{author}</h3>
            </div>
        </div>
    );
};

export default HomeDetails;