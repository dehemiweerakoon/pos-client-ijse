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
import { Link } from 'react-router-dom';


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
            <Link to={'/category/6'}>            
            <Image src={beauty} fluid className='rounded-5'/>
            </Link>
          </Col>
          <Col md={2} className='shadow  bg-tertiary rounded p-3'role="button">
          <p>Books</p>
          <Link to="/category/5">
            <Image src={books} fluid className='rounded-5' />
          </Link>
           
          </Col>
          <Col md={2} className='shadow  bg-tertiary rounded p-3' role="button">
          <p>Clothing</p>
          <Link to={'/category/3'}>
           <Image src={cloth} fluid  className='rounded-5'/>
           </Link>
          </Col>
          <Col md={2} className='shadow  bg-tertiary rounded p-3'role="button">
          <p>Furniture</p>
          <Link to={'/category/7'}>
          <Image src={furniture} fluid className='rounded-5'/>
          </Link>
           
          </Col>
          <Col md={2} className='shadow  bg-tertiary rounded p-3' role="button">
          <p>Home Appliances</p>
          <Link to={'/category/4'}>
            <Image src={home_appliences} fluid  className='rounded-5'/>
          </Link>
          </Col>
          <Col md={2} className='shadow  bg-tertiary rounded p-3'role="button">
          <p>Electronics</p>
          <Link to={'/category/1'}>
          <Image src={electronic} fluid className='rounded-5'/>
          </Link>
          </Col>
        </Row>
        <Row className='mt-2'>
        <Col md={2} className='shadow  bg-tertiary rounded p-3'role="button">
           <p>Groceries</p>
           <Link to={'/category/2'}>
           <Image src={shopping}fluid className='rounded-5'/>
           </Link>
          </Col>
          <Col md={2} className='shadow  bg-tertiary rounded p-3' role="button">
          <p>Sports Equipment</p>
          <Link to='/category/8'>
           <Image src={sport} fluid className='rounded-5'/>
          </Link>
          </Col>
          <Col md={2} className='shadow  bg-tertiary rounded p-3' role="button">
          <p>Toys</p>
          <Link to={'/category/9'}>
          <Image src={toys} fluid className='rounded-5'/>
          </Link>
          </Col>
          <Col md={2} className='shadow  bg-tertiary rounded p-3' role="button">
          <p>Stationery</p>
          <Link to={'/category/10'}>
          <Image src={stationary} fluid className='rounded-5'/>
          </Link>
          </Col>
        </Row>
      </Container>
</>
  )
}

export default Home