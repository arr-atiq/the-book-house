import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import HomeDetails from '../HomeDetails/HomeDetails';
import './Home.css';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allProducts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className="container">
            <div className="all-products">
                {
                    products.map(pd => <HomeDetails id={pd.id} product={pd}></HomeDetails>)
                }
            </div>
        </div>
    );
};

export default Home;