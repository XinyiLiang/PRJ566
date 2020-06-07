import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div`
  .navbar {
    background-color :  #5D5C61;
  }

  .navbar-nav .nav-link {
    color: #bbb;

    &:hover {
      color: white;
    }
  }
`;

export const NavBar = () => (

    <Styles>
       

        <Navbar expand = 'lg'>
            <Navbar.Toggle aria-controls = "basic-navbar-nav"/>

            <Nav className="m-auto">
                  <Nav.Item><Nav.Link href="./">Home </Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link href="./About">About </Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="./Media">Media </Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="./Teams">Teams </Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="./Events">Events </Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="./Account">Account </Nav.Link></Nav.Item>
                </Nav>

        </Navbar>
      </Styles>
    )

export default NavBar;
