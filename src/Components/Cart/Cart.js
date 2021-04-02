// import React from 'react';
// import './Cart.css';
// import { useForm } from 'react-hook-form';


// const Cart = (props) => {
//     console.log(props.orderPro);
//      const { handleSubmit} = useForm();
    
      
//     const onSubmit = (data) => {
//         // const newOrderPlace = [...loggedInUser, ...orderProduct]
//         const orderNewProduct = { 
//             firstName: data.fname,
//             lastName: data.lname,
//             address: data.address,
//             // orderPro: orderPro
            
//         }
//         const url = 'http://localhost:5000/orderPlace';
//         fetch(url, {
//             method: 'POST',
//             headers: { 'Content-Type' : 'application/json'},
//             body: JSON.stringify(orderNewProduct)
//         })
//         .then(res=> {
//             console.log("server side response");
//         })
//     }
  
//     return (
//         <div>
//              <form onSubmit={handleSubmit(onSubmit)}>
//                 <input type="text" id="fname" name="fname"  />
//                 <input type="text" id="lname" name="lname"  />
//                 <input type="text" id="lname" name="address"  />
//                 <input type="submit" value="Submit" />
//             </form>
//         </div>
//     );
// };

// export default Cart;