/* eslint-disable no-unused-vars */
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

const ProtectedUtills = () => {
    const token = sessionStorage.getItem('token');
    if(!token){
        return(
            <Navigate to={"/login"}/>
        )
    }
  return (
    <>
    <NavBar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default ProtectedUtills