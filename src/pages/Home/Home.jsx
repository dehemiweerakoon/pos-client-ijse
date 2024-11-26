/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Button, Col, Container, FloatingLabel, Form, Image, Row } from 'react-bootstrap'
import NavBar from '../../components/NavBar/NavBar'
import cover from '../../assets/cover2.jpg'
import beauty from '../../assets/beauty products.png';
import books from '../../assets/books.png'
import cloth from '../../assets/clothing showroom.png'
import furniture from '../../assets/furniture items.png'
import home_appliences from '../../assets/home appliances.png'
import electronic from '../../assets/laptop shop.png'
import toys from '../../assets/set of toys.png'
import sport from '../../assets/sport set.png'
import stationary from '../../assets/stationary items.png'
import shopping from '../../assets/shopping items.png'
import Footer from '../../components/Footer/Footer';


const Home = () => {
  return (
   <>
   
    <div
        style={{
          backgroundImage: `url(${cover})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '60vh', // Full viewport height
            // Full viewport width
          position: 'relative',
        }}
      >
        <Container fluid className="text-center  d-flex flex-column align-items-center justify-content-center" style={{ height: '100%' }}>
          <h1 className='fw-bold' style={{color:"#0B5852"}}>Shopping And Department Store</h1>
          <div>
            <p> Shopping is a bit of a relaxing hobby for me which<br/>
             is sometimes troubling for the bank balance.</p>
          </div>
          <Button className='rounded-5' style={{backgroundColor:"#0B5852"}}> Learn More </Button>
        </Container>
      </div>
      <Container className='mt-5'>
        <Row >
          <Col md={2} className='shadow  bg-tertiary rounded p-3' role="button">
            <p>Beauty Products</p>
            <Image src={beauty} fluid className='rounded-5'/>
          </Col>
          <Col md={2} className='shadow  bg-tertiary rounded p-3'role="button">
          <p>Books</p>
           <Image src={books} fluid className='rounded-5' />
          </Col>
          <Col md={2} className='shadow  bg-tertiary rounded p-3' role="button">
          <p>Clothing</p>
           <Image src={cloth} fluid  className='rounded-5'/>
          </Col>
          <Col md={2} className='shadow  bg-tertiary rounded p-3'role="button">
          <p>Furniture</p>
           <Image src={furniture} fluid className='rounded-5'/>
          </Col>
          <Col md={2} className='shadow  bg-tertiary rounded p-3' role="button">
          <p>Home Appliances</p>
           <Image src={home_appliences} fluid  className='rounded-5'/>
          </Col>
          <Col md={2} className='shadow  bg-tertiary rounded p-3'role="button">
          <p>Electonics</p>
           <Image src={electronic} fluid className='rounded-5'/>
          </Col>
        </Row>
        <Row className='mt-2'>
        <Col md={2} className='shadow  bg-tertiary rounded p-3'role="button">
           <p>Groceries</p>
           <Image src={shopping}fluid className='rounded-5'/>
          </Col>
          <Col md={2} className='shadow  bg-tertiary rounded p-3' role="button">
          <p>Sports Equipment</p>
           <Image src={sport} fluid className='rounded-5'/>
          </Col>
          <Col md={2} className='shadow  bg-tertiary rounded p-3' role="button">
          <p>Toys</p>
           <Image src={toys} fluid className='rounded-5'/>
          </Col>
          <Col md={2} className='shadow  bg-tertiary rounded p-3' role="button">
          <p>Stationery</p>
           <Image src={stationary} fluid className='rounded-5'/>
          </Col>
        </Row>
      </Container>
  
   </>
  )
}

export default Home