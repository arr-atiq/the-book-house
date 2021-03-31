import React from 'react';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useState } from 'react';


if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}


const Login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const [users, setUsers] = useState({
        isSignedIn: false,
        name: '',
        photo: '',
        email: ''
    })
    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((res) => {
                const {displayName, email, photoURL} = res.user;
                const signedInUser = {
                    isSignedIn: true,
                    photo: photoURL,
                    name: displayName,
                    email: email
                }
                setUsers(signedInUser);
            })
            .catch((err) => {
                console.log(err);
                console.log(err.message);
            })
    }

    const handleGoogleSignOut = () => {
        firebase.auth().signOut()
        .then((res) => {
            const signedOutUser = {
                isSignedIn: false,
                name: '',
                photo: '',
                email: ''
            }
            setUsers(signedOutUser);
        })
    }
    return (
        <div className="login-section">
            
            {
                users.isSignedIn ?  <button className="sign-out" onClick={handleGoogleSignOut}>Sign Out</button> :
                <button className="sign-in" onClick={handleGoogleSignIn}>Sign In With Google</button>
            }
           {
               users.isSignedIn &&
               <div className="user-info">
                   <p>Welcome, {users.name}</p>
                   <p>Your Email: {users.email}</p>
                   <img src={users.photo} alt=""/>
               </div>
           }
        </div>
    );
};

export default Login;