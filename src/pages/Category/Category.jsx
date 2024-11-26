/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getRequest } from '../../services/ApiSerives'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import axios from 'axios';

const Category = () => {

  const {id} = useParams();
  const [items,setItems] = useState([]);
  const [images,setImages] = useState([]);
  const getCateoryItem=async()=>{
    const response = await getRequest(`/item/category/${id}`);
    console.log(response.data);
    setItems(response.data);
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
   
       // After all images are fetched, update the state in one go
       console.log("hello");
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
          items && items.map((item,index)=>{
            return(
              <Col md={3} className='mt-3'>
              <Card className='shadow-lg p-2' style={{backgroundColor:'#ECECEC'}} role="button">
              <Image src={images[index]} alt='hello' className='rounded-5'  />
              <Card.Body>
                 <h5 className='fw-semibold'>{item.name}</h5>
                 <h6 className='text-secondary'>$ {item.price}</h6>
                <Button variant="light btn-outline-dark" className='mt-1 rounded-5'>Add to Cart</Button>
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

export default Category