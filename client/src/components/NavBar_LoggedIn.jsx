import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';

export const NavBarLoggedIn = () => (

    
        <Navbar expand = 'lg' >
           <Navbar.Toggle   data-toggle="collapse" data-target="#navbarNav"   /> 
            
           <h1 className="App-title">Detective</h1>
            <div class="collapse navbar-collapse navItemStyle" id="navbarNav" >
            <Nav className="  ml-auto"  >
                
                <Nav.Item><Nav.Link href="./">Home </Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="./About">About </Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="./Teams">Teams </Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="./Events">Events </Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="./Play"><button id="PlayBtn"  class="btn btn-danger" >Play</button></Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="./Profile">Hello! {sessionStorage.getItem("name")} </Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="./"><button id="loginBtn" type="button" class="btn btn-outline-warning" onClick={(e) => sessionStorage.clear()}>Log Out</button></Nav.Link></Nav.Item>
           
                </Nav>
                </div>
        </Navbar>
     
    )

export default NavBarLoggedIn;


