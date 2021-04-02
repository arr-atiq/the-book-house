import React from 'react';
import './OrdersDetail.css';

const OrdersDetail = (props) => {
    const { name, author, price } = props.order.orderProduct;
    const { orderTime, _id } = props.order;
    
    const deleteUser = (event, id) => {
        fetch(`http://localhost:5000//orderDelete/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result =>{
            // console.log("deleted successfully");

            if(result){
                event.target.parentNode.style.display = 'none';
            }
        })
    }
    return (
        <div>
            <table id="table">
                <tr>
                    <th>BookName</th>
                    <th>AuthorName</th>
                    <th>OrderTime</th>
                    <th>Price</th>
                    <th>Delete Order</th>
                </tr>
                <tr>
                    <td>{name}</td>
                    <td>{author}</td>
                    <td>{orderTime}</td>
                    <td>${price}</td>
                    <td>
                    <button onClick={deleteUser("event", _id)}>Delete</button>
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default OrdersDetail;