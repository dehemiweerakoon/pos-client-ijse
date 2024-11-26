/* eslint-disable no-unused-vars */
import Button from 'react-bootstrap/Button'
import React from 'react'
import { Col, Container, FloatingLabel, Form, Image } from 'react-bootstrap'
import login from '../../assets/login.jpg'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <>
  <div className='bg-secondary-subtle'>
    <Container>
      
        <div className='row align-items-center vh-100 '>   
        <Col md={5}>
        <Form>
        <h2 className='d-flex justify-content-center'>Register</h2>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mt-5 mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" className='rounded-5 p-2'/>
      </FloatingLabel>
        <FloatingLabel controlId='floatingusername' label="Username">
        <Form.Control type='text' placeholder='Username' className='mb-3 rounded-5 p-2'/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" className='rounded-5 p-2' />
      </FloatingLabel>
    
      <div className='d-grid mt-3'>
     <Button className='rounded-5 p-2' variant='secondary'>Sign In</Button>   
      </div>
      <br/>
      <Link to="/login" style={{ textDecoration: 'none',color:'black'}}>
         <h5>Already a User?</h5>
      </Link>
      
    </Form>
    <hr/>
    </Col>
    <Col md={6}>
    <Image src={login} alt="login pic"  className='rounded-5' height={"700px"}/>
    </Col>
   </div>
   </Container>
   </div> 
    </>
  )
}

export default Register