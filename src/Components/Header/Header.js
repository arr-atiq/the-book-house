import React, { useContext } from 'react';
import { UserContext } from '../../App';
import './Header.css';



const Header = (props) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
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
                <li><a href="/about">About</a></li>
                <li><a href="/login">Login: {loggedInUser.name}</a></li>
            </div>
        </nav>
    );
};

export default Header;