/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Col, Container, Image, Row, Table } from 'react-bootstrap'
import { getRequest } from '../../services/ApiSerives';
import axios from 'axios';

const Cart = () => {
  const user_id = sessionStorage.getItem('user_id');
  const [carts,setCarts] = useState({
    id: user_id,
    cartItems:[],
    totalAmount:0
  });
  const [itemId,setItemId] = useState(0);
  const [images,setImages] = useState([]);
  const getImage =async() =>{
    console.log("")
     try {
       const newImages = [] // Create an array to hold the image URLs
   
       for (let i = 0; i < carts.cartItems.length; i++) {
         const item = carts.cartItems[i].item;
         const name = `${item.name}.png`;
         const response = await axios(`http://localhost:9000/file/${name}`, { responseType: 'blob' });
         newImages.push(URL.createObjectURL(response.data)); // Push the new image URL to the array

       }
       setImages(newImages);
     } catch (error) {
       console.error("Error fetching images:", error);
     }
    }
    const deletecartItem = async (id)=>{
      console.log("delete button")
     const response = await axios.delete(`http://localhost:9000/${user_id}/cartdelete/${id}/${1}`);
     console.log(response);
     getAllCartItems();    
    }
  const getAllCartItems=async()=>{
     const respnose = await getRequest(`/${user_id}/cart`);
     console.log(respnose.data);
     setCarts(respnose.data);
   }
   useEffect(()=>{
    if(carts.cartItems.length>0){
       getImage();
    }
   },[carts.cartItems])
   useEffect(()=>{
    getAllCartItems();
   },[])
  return (
    <Container>
      <Row>
        <Col>
       <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Item</th>
          <th>Price</th>
          <th>Qty</th>
          <th>delete</th>
        </tr>
      </thead>
      <tbody>
       {
        carts.cartItems && carts.cartItems.map((items,index)=>{
          return(
            <>
            <tr>
            <td>{index}</td>   
              <td>
                <div className='d-flex flex-row p-3'>
                  <Image src={images[index]} width={'150px'} rounded/> 
                  <p className='p-2 text-success fw-bold'>{items.item.name}</p>
                 <p className='p-2'>  {items.item.itemCategory.name}</p>
                </div>  
              </td>
              <td>$ {items.item.price}</td>
              <td>{items.quantity}</td>
              <td>
              <svg role='button' onClick={()=>{deletecartItem(items.item.id);}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
              </svg></td>
            </tr>
            </>
          )
        })
       }
      </tbody>
    </Table>
        </Col>
      </Row>
    </Container>
  )
}

export default Cart