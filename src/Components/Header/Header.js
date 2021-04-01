import React from 'react';
import './Header.css';



const Header = (props) => {
    
    console.log(props);
    return (
        <nav className="header">
            <div className="brand-name">
                <h2>The Book House</h2>
            </div>
            <div className= "li-items">
                
                <li><a href="/home">Home</a></li>
                <li><a href="/admin">Admin</a></li>
                <li><a href="/orders">Orders</a></li>
                <li><a href="/checkout">Checkout</a></li>
                <li><a href="/login">Login</a></li>
            </div>
        </nav>
    );
};

export default Header;