/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import { useLocation } from 'react-router-dom';
import { postRequest } from '../../services/ApiSerives';

// eslint-disable-next-line react/prop-types
const CategoryList = () => {
  const location = useLocation();
  const filteredItems = location.state?.filteredItems || [];
  const [images,setImages] = useState([]);
  const getImage =async() =>{
    console.log("")
     try {
       const newImages = [] // Create an array to hold the image URLs
   
       for (let i = 0; i < filteredItems.length; i++) {
         const item = filteredItems[i];
         const name = `${item.name}.png`;
         const response = await axios(`http://localhost:9000/file/${name}`, { responseType: 'blob' });
         newImages.push(URL.createObjectURL(response.data)); // Push the new image URL to the array

       }
       setImages(newImages);
     } catch (error) {
       console.error("Error fetching images:", error);
     }
    }
    const user_id = sessionStorage.getItem('user_id');
    // const [item_id,setItem_id] = useState(1);
       const createCart = async(item_id)=>{
         console.log(item_id);
       //  event.preventDefault();
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
         window.location.href="/cart";
       }
  useEffect(()=>{
    
    if (filteredItems.length > 0) {
      getImage(); // Fetch images only after items are updated
    }
  },[filteredItems])

  useEffect(()=>{
    console.log(filteredItems);
  })
  return (
    <>
    <Container>
        <Row>
           {
            filteredItems.map((item,index)=>{
              return(
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
                      onClick={(event)=>{createCart(item.id)}}
                    >
                      Add to Cart
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              )
            })
           }
           
        </Row>
    </Container>
    </>
  )
}

export default CategoryList