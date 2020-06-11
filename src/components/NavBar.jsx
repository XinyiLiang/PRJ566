import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div`
  .navbar {
    background-color :  #4b4a4f;
  }

  .navbar-nav .nav-link {
    color: #bbb;
    margin-left: 20px;
    &:hover {
      color: white;
    }
     
`;

export const NavBar = () => (

    <Styles>
       

        <Navbar expand = 'lg'>
            <Navbar.Toggle aria-controls = "basic-navbar-nav"/>
        
                
            <h1 className="App-title">Detective</h1>
            <Nav className="ml-auto">
                
                <Nav.Item><Nav.Link href="./">Home </Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="./About">About </Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="./Teams">Teams </Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="./Events">Events </Nav.Link></Nav.Item>
                <Nav.Item><button id="loginBtn" type="button" class="btn btn-danger" >Play</button></Nav.Item>
                <Nav.Item ><button id="loginBtn" type="button" class="btn btn-info btn-rounded">Log In</button></Nav.Item>
                </Nav>

        </Navbar>
      </Styles>
    )

   
export default NavBar;
