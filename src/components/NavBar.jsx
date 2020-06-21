import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div`
  .navbar {
    background-color :  #4b4a4f;
    color: white;
  }

  .navbar-nav .nav-link {
    margin-left: 20px;
    color: white;
    &:hover {
      color: grey;}
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
                <Nav.Item><Nav.Link href="./Play"><button id="PlayBtn"  class="btn btn-danger" >Play</button></Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="./Login"><button id="loginBtn" type="button" class="btn btn-info btn-rounded">Log In</button></Nav.Link></Nav.Item>
                </Nav>

        </Navbar>
      </Styles>
    )

export default NavBar;


