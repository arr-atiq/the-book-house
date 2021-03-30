import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const Admin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    
    const handleImageChange = event =>{
        const imageData = new FormData();
        imageData.set('key', '08b10d29ebe980b7653915a407c6fa7e');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
        .then(function(response){
            console.log(response.data.data.display_url);
        })
        .catch(function(error){
            console.log(error);
        });
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <input name="example" defaultValue="test" ref={register} />
                <input name="exampleRequired" type="file" onChange={handleImageChange} />
                <input type="submit" />
                
            </form>
        </div>
    );
};

export default Admin;