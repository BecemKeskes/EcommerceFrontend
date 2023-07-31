import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Badge } from '@mui/material';


const NavScroll = () => {
  const navigate = useNavigate();
const {cartTotalQuantity} = useSelector((state) => state.storecart);
  return (

    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
      

        <Navbar.Brand href="#">ESPS COMMERCE REDUX</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">Articles</Nav.Link>
            <Nav.Link as={Link} to="/categories">Catégories</Nav.Link>
            <Nav.Link as={Link} to="/scategories">Scatégories</Nav.Link>
            
            <Nav.Link as={Link} to="/affichart">Articles admin</Nav.Link>
           
          
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
        <Nav.Link as={Link} to="/cart">PANIER</Nav.Link>
      </Container>
    </Navbar>
  );
}


export default NavScroll
