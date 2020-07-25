import React from 'react';
import AnnoucementSlider from '../components/AnnoucementSlider';
import {Container,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import axios from 'axios';

export const Home = () =>(
    <div>
        <div className="HomeMain">

<Container >
   <Row >

   <Col md={5} xs={5} lg={6}>
          <div id="HomePic" >
              <img src={require('../Images/HomeDetective.png')} alt="Welcome Detective" class="IMGtest" />
          </div>
   </Col>

   <Col md={7} xs={7} lg={6}>
              <div className="WelcomeDiv" >
                 <h1> Welcome Back </h1>
                 <h2>Detective</h2>
              </div>

              <div className="HomeExplain" >
                <p>
                We are fighting with the city crime and we need you to help us <br /> 
                save the city from falling apart. <br /> Read the crime case announcement to find out more.
                 </p>
                 
              </div>

      </Col>
   </Row> 
  

        <Row className="second-part" >
        <Col md={8} xs={12} lg={7}>  
                          <AnnoucementSlider />
         </Col>
        <Col md={4} xs={12} lg={5}>
                 <div className="HelpTool">
                     <h2>Help Tool</h2>
                      <ul>
                        <li><a href="/">How to Play</a></li>
                        <li><a href="/">ScoreBoard</a></li>
                        <li><a href="/ContactUs">Contact Us</a></li>
                      </ul>
                  </div>
              </Col>
              
              
       </Row>          
      
      
       </Container>
   </div>    
 </div> 
          
       
    
    )
export default Home;
