/* eslint-disable no-unused-vars */
import Button from 'react-bootstrap/Button'
import React, { useState } from 'react'
import { Col, Container, FloatingLabel, Form, Image } from 'react-bootstrap'
import './Login.css'
import login from '../../assets/login.jpg'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
const Login = () => {

  const[username,setUsername] = useState("");
  const[password,setPassword] = useState("")
  const[error,setError] = useState("");
  const navigate =useNavigate()


  const onHandleEmail=(event)=>{
      setUsername(event.target.value);
  }
  const onHandlePassword=(event)=>{
    setPassword(event.target.value);
  }
  const onHandleSubmit=async()=>{
    const data = {
      'username':username,
      'password':password
    }
    try{
      
       const response = await axios.post("http://localhost:9000/auth/login",data);
      // console.log(response);

      if(response.status==401){
        // 
        console.log("dkjsdhjsdsdsdsd")
        setError(response.data);
      }

    sessionStorage.setItem('token',response.data.token);
    sessionStorage.setItem('username',response.data.username);
    sessionStorage.setItem('user_id',response.data.id);
    axios.defaults.headers.common['Authorization'] =`Bearer ${response.data.token}`;
    navigate("/home")
    }catch(ex){
      //
      setError("password or username incorrect");
      setPassword("")
      setUsername("")
    }
   
  }

  return (
    <>
    <div className='bg-secondary-subtle'>
    <Container>
      
        <div className='row align-items-center vh-100 '>   
        <Col md={5}>
        <Form onSubmit={onHandleSubmit}>
        <h2 className='d-flex justify-content-center'>Login</h2>
      <FloatingLabel
        controlId="floatingInput"
        label="Username"
        className="mb-3 p-1"
      >
        <Form.Control type="text" placeholder="name@example.com" className='rounded-3 p-3' value={username} onChange={onHandleEmail}/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password" className='p-1'>
        <Form.Control type="password" placeholder="Password" className='rounded-3 p-3'  value={password} onChange={onHandlePassword}/>
      </FloatingLabel>
      <div className='d-grid mt-3'>
     <Button className='rounded-5 p-2' variant='secondary' onClick={onHandleSubmit}>Sign In</Button>   
      </div>
      <br/>
      <Link to="/register" style={{ textDecoration: 'none',color:'black'}}>
         <h5>Not a User?</h5>
      </Link>
      
    </Form>
    {
      error?? <><p>{error}</p></>
    }
    <hr/>
    </Col>
    <Col md={6}>
    <Image src={login} alt="login pic" thumbnail className='rounded-5 p-2'/>
    </Col>
   </div>
   </Container>
   </div> 
    </>
  )
}

export default Login