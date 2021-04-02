import axios from 'axios';
import './Admin.css';
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
            ShippingCost: data.ShippingCost,
            vat: data.vat,
            productUrl: productUrl
        }
        const url = `https://frozen-island-42030.herokuapp.com/addProduct`;
        fetch(url ,{
            method: 'POST',
            headers: {'content-Type': 'application/json'},
            body: JSON.stringify(productData)
        })
        .then(res => {
            alert("Product added successfully")
        })
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
            <form className="admin-form" onSubmit={handleSubmit(onSubmit)}>
                
                <input name="name" placeholder="Enter Book Name" ref={register} />
                <input name="author" placeholder="Enter Author Name" ref={register} />
                <input name="price" type="number" placeholder="Enter Price" ref={register} />
                <input name="ShippingCost" type="number" placeholder="Enter Shipping Cost" ref={register} />
                <input name="vat" type="number" placeholder="Enter Vat" ref={register} />
                <input name="exampleRequired" type="file" onChange={handleImageChange} />
                <input type="submit" />
                
            </form>
        </div>
    );
};

export default Admin;