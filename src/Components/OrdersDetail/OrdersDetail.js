import React from 'react';
import './OrdersDetail.css';
import { Table } from 'react-bootstrap';

const OrdersDetail = (props) => {
    const { name, author, price } = props.order.orderProduct;
    const { orderTime, _id } = props.order;

    const deleteUser = (event, id) => {
        // fetch(`https://frozen-island-42030.herokuapp.com/orderDelete/${id}`,{
        //     method: 'DELETE'
        // })
        // .then(res => res.json())
        // .then(result =>{
        //     // console.log("deleted successfully");

        //     if(result){
        //         event.target.parentNode.style.display = 'none';
        //     }
        // })
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
                        <button class="btn btn-danger"onClick={deleteUser()}>Delete</button>
                    </td>
                </tr>
            </table>

            {/* <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>BookName</th>
                        <th>AuthorName</th>
                        <th>OrderTime</th>
                        <th>Price</th>
                        <th>Delete Order</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{name}</td>
                        <td>{author}</td>
                        <td>{orderTime}</td>
                        <td>${price}</td>
                        <td>
                            <button onClick={deleteUser()}>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </Table> */}
        </div>
    );
};

export default OrdersDetail;