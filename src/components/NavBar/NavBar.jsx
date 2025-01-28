/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Dropdown, FloatingLabel, Form, Image, Nav, Navbar, NavDropdown, Offcanvas, Row } from 'react-bootstrap'
import carts from '../../assets/carts.png'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { getRequest } from '../../services/ApiSerives'
import CategoryList from '../CategoryList/CategoryList'
const NavBar = () => {
 
  const [categories,setCategories] = useState([]);
  const user_name= sessionStorage.getItem('username');
  const [items,setItems] = useState([]);
  const navigate = useNavigate();
  const getAllcategories = async()=>{
   const response = await getRequest("/categories");
   setCategories(response.data);
  }
  const [searchInput,setSearchInput]=useState("");
  const LogOut=()=>{
  navigate("/login");
  sessionStorage.setItem('token',"");
  sessionStorage.setItem('username',"");
  sessionStorage.setItem('user_id',"");
  
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const search=async()=>{
    console.log("kkkk")
    if (searchInput.length<2){
      window.location.href="/items";
    }else{
     //
     const response = await getRequest("/items");
      const allItems = response.data;
      // Filter items based on search input
      const filteredItems = allItems.filter((item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      console.log();
      setItems(filteredItems);
      navigate("/search/items",{state:{filteredItems}})
      
    }
  }
  const handlesearchvalue=(event)=>{
     setSearchInput(event.target.value);
  }
  useEffect(()=>{
   getAllcategories();
  },[])

  return (
    <>
     <Container fluid className="m-0 text-white d-none d-md-block" style={{backgroundColor:'#0b3d3d'}} >
  <Row className='d-flex align-items-center'>
    <Col md={4} className='d-flex flex-row '>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white"  className="bi bi-telephone text-white" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
</svg>
     041-6792340
    </Col>
    <Col md={4}>
    Get 50% Off On Selected Items | Shop Now
    </Col>
    <Col md={1} sm={0.5}>
      Eng
    </Col>
    <Col md={2} sm={0.5}>
      Location: SRI LANKA
    </Col>
  </Row>
</Container>
    {['lg'].map((expand)=>(
    <>
<Navbar key={expand} expand={expand} className="bg-body-tertiary ">
   <Container>
      <Image src={carts} alt='image' fluid role='button'/>
        <Navbar.Brand href="/home"><Link style={{ textDecoration: 'none',color:'black'}} to={'/home'}><h4>Shop Cart</h4></Link></Navbar.Brand>
        <Navbar.Toggle  aria-controls={`offcanvasNavbar-expand-${expand}`}/>
        <Navbar.Offcanvas  id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end">
        <Offcanvas.Body>
              <Nav className="me-auto">
                <NavDropdown title="Category" id="basic-nav-dropdown">
                  {categories && categories.map((category,index)=>{
                  return(
                
                    <NavDropdown.Item key={index} href={`/category/${category.id}`}>{category.name}</NavDropdown.Item>
                
                  ) }) }
                </NavDropdown>
                <Nav.Link href="/items">Items</Nav.Link>
                <Nav.Item>
                                  
                          <div className="position-relative">
                            <Form.Control
                              type="text"
                              placeholder="Search"
                              className="rounded-5 p-2"
                              style={{ paddingRight: "40px" }} 
                              value={searchInput}// Add padding to prevent text overlap with the icon
                            onChange={handlesearchvalue}/>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fillRule="currentColor"
                              className="bi bi-search position-absolute top-50 end-0 translate-middle-y me-3"
                              viewBox="0 0 16 16"
                              onClick={search}
                            >
                              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                            </svg>
                          </div> 
              </Nav.Item>
              </Nav>
              <Nav>
              <Nav.Item>
                <NavDropdown title={user_name} >
                      <NavDropdown.Item onClick={LogOut}>LogOut</NavDropdown.Item>
                    
              </NavDropdown>
              </Nav.Item>
            
                    <svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" fillRule="currentColor" className="m-2 bi bi-cart-fill" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                  </svg>
                  <Nav.Link href={"/cart"} style={{ textDecoration: 'none',color:'black'}}>Cart</Nav.Link>
            </Nav> 
        </Offcanvas.Body>
         
        </Navbar.Offcanvas>
        </Container>
    </Navbar>

    </>
    ))}


{/* <Container className='p-2 '>
  <Row className='align-items-center text-align-center mt-1' >
    <Col md={2} className='d-flex flex-row'>
     <Image src={carts} alt='image' fluid role='button'/>
    <Link style={{ textDecoration: 'none',color:'black'}} to={'/home'}><h4>Shop Cart</h4></Link>
    </Col>
    <Col md={1}>
    <Dropdown>
      <Dropdown.Toggle variant='light'>
         Category
      </Dropdown.Toggle>
       
        <Dropdown.Menu>
       {categories && categories.map((category,index)=>{
          return(
         
             <Dropdown.Item key={index} href={`/category/${category.id}`}>{category.name}</Dropdown.Item>
         
          ) }) }
      </Dropdown.Menu>
    </Dropdown>
    
    </Col>
    <Col md={2}>
   <Link to="/items"  style={{ textDecoration: 'none',color:'black'}}>Items</Link>
    </Col>
    <Col md={3}>
  <div className="position-relative">
    <Form.Control
      type="text"
      placeholder="Search"
      className="rounded-5 p-2"
      style={{ paddingRight: "40px" }} 
      value={searchInput}// Add padding to prevent text overlap with the icon
    onChange={handlesearchvalue}/>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fillRule="currentColor"
      className="bi bi-search position-absolute top-50 end-0 translate-middle-y me-3"
      viewBox="0 0 16 16"
      onClick={search}
    >
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
    </svg>
  </div>
</Col>
<Col className='d-flex flex-row' md={2}>
<Dropdown>
      <Dropdown.Toggle variant='light'>
        <svg xmlns="http://www.w3.org/2000/svg"  width="18" height="18" fillRule="currentColor" className="m-1 bi bi-person" viewBox="0 0 16 16">
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
        </svg>
      {user_name}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={LogOut}>LogOut</Dropdown.Item>
      </Dropdown.Menu>
 </Dropdown>

 
</Col>
<Col md={1}>
<svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" fillRule="currentColor" className="m-1 bi bi-cart-fill" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg>
<Link to={"/cart"} style={{ textDecoration: 'none',color:'black'}}>Cart</Link>
</Col>
  </Row>
</Container> */}

      
    </>
  )
}

export default NavBar