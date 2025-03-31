/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Button, Carousel, Col, Container, FloatingLabel, Form, Image, Row } from 'react-bootstrap'
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
import slide01 from '../../assets/slide01.jpg'
import slide02 from '../../assets/slide02.jpg'
import slide03 from '../../assets/slide03.jpg'

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



      <Container className='mt-5 d-flex  flex-column align-items-center justify-content-center' style={{color:"black"}}>
        <Col md={7} sm={12}> 
        <Carousel>
      <Carousel.Item interval={1000}>
        <Image src={slide01} fluid text="First slide" rounded style={{opacity:"0.75"}}/>
        <Carousel.Caption>
          <div  className='p-2' style={{background:"hsla(0, 0.00%, 100.00%, 0.39)",backdropFilter:"blur(50px)",borderRadius:"10px"}}>
              <h3 className='text-black'>Customer Satisfaction</h3>
          <p sm={0} className='text-black'>Achieved by providing high-quality products, excellent customer service</p>
          </div>
     
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <Image src={slide02} fluid text="Second slide" rounded/>
        <Carousel.Caption>
        <div className='p-2' style={{background:"hsla(0, 0.00%, 100.00%, 0.39)",backdropFilter:"blur(50px)",borderRadius:"10px"}}>
        <h3 className='text-black'>Adding Items Into Cart</h3>
        <p className='text-black'>Users can easily add items to their shopping cart by selecting desired products and clicking the add-to-cart button</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <Image src={slide03} fluid text="Third slide" rounded/>
        <Carousel.Caption>
          <div className='p-2' style={{background:"hsla(0, 0.00%, 100.00%, 0.39)",backdropFilter:"blur(50px)",borderRadius:"10px"}}>
             <h3 className='text-black'>Pay With Your Card</h3>
          <p className='text-black'>
          User can do their purchase by paying with a credit or debit card through the online payment gateway
          </p>
          </div>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </Col>
      </Container>



      <Container className='mt-5'>
        <Row >
          <Col md={2} className='shadow  bg-tertiary rounded p-3 hover-zoom' role="button"  style={{background:"hsla(0, 0.00%, 100.00%, 0.39)",backdropFilter:"blur(50px)",borderRadius:"10px"}}>
            <p>Beauty Products</p>
            <Link to={'/category/6'}>            
            <Image src={beauty} fluid className='rounded-5'/>
            </Link>
          </Col>
          <Col md={2} className='shadow  bg-tertiary rounded p-3 hover-zoom'role="button"style={{background:"hsla(0, 0.00%, 100.00%, 0.39)",backdropFilter:"blur(50px)",borderRadius:"10px"}}>
          <p>Books</p>
          <Link to="/category/5">
            <Image src={books} fluid className='rounded-5' />
          </Link>
           
          </Col>
          <Col md={2} className='shadow  bg-tertiary rounded p-3 hover-zoom' role="button"style={{background:"hsla(0, 0.00%, 100.00%, 0.39)",backdropFilter:"blur(50px)",borderRadius:"10px"}}>
          <p>Clothing</p>
          <Link to={'/category/3'}>
           <Image src={cloth} fluid  className='rounded-5'/>
           </Link>
          </Col>
          <Col md={2} className='shadow  bg-tertiary rounded p-3 hover-zoom'role="button"style={{background:"hsla(0, 0.00%, 100.00%, 0.39)",backdropFilter:"blur(50px)",borderRadius:"10px"}}>
          <p>Furniture</p>
          <Link to={'/category/7'}>
          <Image src={furniture} fluid className='rounded-5'/>
          </Link>
           
          </Col>
          <Col md={2} className='shadow  bg-tertiary rounded p-3 hover-zoom' role="button"style={{background:"hsla(0, 0.00%, 100.00%, 0.39)",backdropFilter:"blur(50px)",borderRadius:"10px"}}>
          <p>Home Appliances</p>
          <Link to={'/category/4'}>
            <Image src={home_appliences} fluid  className='rounded-5'/>
          </Link>
          </Col>
          <Col md={2} className='shadow  bg-tertiary rounded p-3 hover-zoom'role="button"style={{background:"hsla(0, 0.00%, 100.00%, 0.39)",backdropFilter:"blur(50px)",borderRadius:"10px"}}>
          <p>Electronics</p>
          <Link to={'/category/1'}>
          <Image src={electronic} fluid className='rounded-5'/>
          </Link>
          </Col>
        </Row>
        <Row className='mt-2'>
        <Col md={2} className='shadow  bg-tertiary rounded p-3 hover-zoom'role="button" style={{background:"hsla(0, 0.00%, 100.00%, 0.39)",backdropFilter:"blur(50px)",borderRadius:"10px"}}>
           <p>Groceries</p>
           <Link to={'/category/2'}>
           <Image src={shopping}fluid className='rounded-5'/>
           </Link>
          </Col>
          <Col md={2} className='shadow  bg-tertiary rounded p-3 hover-zoom' role="button" style={{background:"hsla(0, 0.00%, 100.00%, 0.39)",backdropFilter:"blur(50px)",borderRadius:"10px"}}>
          <p>Sports Equipment</p>
          <Link to='/category/8'>
           <Image src={sport} fluid className='rounded-5'/>
          </Link>
          </Col>
          <Col md={2} className='shadow  bg-tertiary rounded p-3 hover-zoom' role="button" style={{background:"hsla(0, 0.00%, 100.00%, 0.39)",backdropFilter:"blur(50px)",borderRadius:"10px"}}>
          <p>Toys</p>
          <Link to={'/category/9'}>
          <Image src={toys} fluid className='rounded-5'/>
          </Link>
          </Col>
          <Col md={2} className='shadow  bg-tertiary rounded p-3 hover-zoom' role="button"style={{background:"hsla(0, 0.00%, 100.00%, 0.39)",backdropFilter:"blur(50px)",borderRadius:"10px"}}>
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