import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const Admin = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const [productUrl, setProductUrl] = useState(null);
    const onSubmit = data => {
        const productData = {
            name: data.name,
            author: data.author,
            price: data.price,
            productUrl: productUrl
        }
        console.log(productData);
        const url = `http://localhost:5000/addProduct`;
        fetch(url ,{
            method: 'POST',
            headers: {'content-Type': 'application/json'},
            body: JSON.stringify(productData)
        })
        .then(res => console.log("server side response", res))
    };
    
    const handleImageChange = event =>{
        const imageData = new FormData();
        imageData.set('key', '08b10d29ebe980b7653915a407c6fa7e');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
        .then(function(response){
            setProductUrl(response.data.data.display_url);
        })
        .catch(function(error){
            console.log(error);
        });
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <input name="name" placeholder="Enter Book Name" ref={register} />
                <br/>
                <input author="author" placeholder="Enter Author Name" ref={register} />
                <br/>
                <input price="price" placeholder="Enter Price" ref={register} />
                <br/>
                <input name="exampleRequired" type="file" onChange={handleImageChange} />
                <input type="submit" />
                
            </form>
        </div>
    );
};

export default Admin;