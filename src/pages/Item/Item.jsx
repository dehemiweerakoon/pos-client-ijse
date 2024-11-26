/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { getRequest, postRequest } from '../../services/ApiSerives';
import axios from 'axios';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';

const Item = () => {

    const [items,setItems] = useState([]);
    const [images,setImages] = useState([]);
    const getCateoryItem=async()=>{
      const response = await getRequest(`/items`);
      console.log(response.data);
      setItems(response.data);
    }
    const user_id = sessionStorage.getItem('user_id');
    const [item_id,setItem_id] = useState(1);
    const [carts,setCarts] = useState({
        id: user_id,
        cartItems:[],
        totalAmount:0
      });
      const createCart = async(event)=>{
        event.preventDefault();
        const save_cart = {
          id: parseInt(user_id),
          cartItems:{
            item:{
              id: parseInt(item_id),
            }
          },
          quantity:parseInt(1)
        }
        //console.log(save_cart);
        const respnose = await postRequest(`/${user_id}/addItem/${item_id}/${1}`);
        window.location.reload();
      }
    const getImage =async() =>{
      console.log("")
       try {
         const newImages = [] // Create an array to hold the image URLs
     
         for (let i = 0; i < items.length; i++) {
           const item = items[i];
           const name = `${item.name}.png`;
           const response = await axios(`http://localhost:9000/file/${name}`, { responseType: 'blob' });
           newImages.push(URL.createObjectURL(response.data)); // Push the new image URL to the array
  
         }
         setImages(newImages);
       } catch (error) {
         console.error("Error fetching images:", error);
       }
      }
    useEffect(()=>{
      
      if (items.length > 0) {
        getImage(); // Fetch images only after items are updated
      }
    },[items])
  
   useEffect(()=>{
    getCateoryItem();// get the category by  id //// ..
   },[])

  return (
    <>
     <Container>
      <Row>
      {
  images?.length ? (
    items && items.map((item, index) => (
      <Col md={3} className="mt-3" key={index}>
        <Card
          className="shadow-lg p-2"
          style={{ backgroundColor: "#ECECEC" }}
          role="button"
        >
          <Image
            src={images[index]}
            alt="hello"
            className="rounded-5"
          />
          <Card.Body>
            <h5 className="fw-semibold">{item.name}</h5>
            <h6 className="text-secondary">$ {item.price}</h6>
            <Button
              variant="light btn-outline-dark fw-semibold"
              className="mt-1 rounded-5"
              onClick={createCart}
            >
              Add to Cart
            </Button>
          </Card.Body>
        </Card>
      </Col>
        ))
    ) : (
        <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
        </div>
    )
    }
      </Row>
    </Container>
    </>
  )
}

export default Item