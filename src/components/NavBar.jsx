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
         
            <div className="mr-auto">
                <img src={require('../Images/detectiveLogo.png')} className="App-logo" alt="logo" />
                <h1 className="App-title">Detective</h1>
             </div>

            <Nav className="ml-auto">
                
                <Nav.Item><Nav.Link href="./">Home </Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="./Media">Media </Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="./Teams">Teams </Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="./Events">Events </Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="./About">About </Nav.Link></Nav.Item>
                {/* <Nav.Item id="login"><Nav.Link href="./LogIn">Log In </Nav.Link></Nav.Item> */}
                <Nav.Item ><button type="button" id="loginBtn"  class="btn btn-outline-info btn-rounded waves-effect">Log In</button></Nav.Item>
                </Nav>

        </Navbar>
      </Styles>
    )

export default NavBar;
