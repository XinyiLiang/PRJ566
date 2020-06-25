import React from 'react';
import { Button} from 'react-bootstrap';

import styled from 'styled-components';


const Styles = styled.div`

 .AnnoucementBox{
  background-color: #464442;
  margin: 0 auto;
  margin-top:5em;
  margin-bottom:5em;
  border:5px solid background-color: #464442;;
  height:20em;
  width:30em;
  border-radius: 9px;
 }    
 .AnnoucementBox h5{
  color:white;
  padding: 3px;
 } 
 h2{
  font-family: 'Playfair Display SC', serif;
  font-size:4em;
 }
`;


export const Annoucement = () => (
<Styles>
    <div class="mt-5">
      <h2 class="card-title h1 white-text">Annoucement</h2>
    <div class="jumbotron .bg-secondary shadow p-3 mb-5 bg-white rounded ">
    <h4>City Homicide</h4>
    <h6>Game Date: June 25, 2020 19:00 PM</h6>
    <p>
     June 17, two man was murdered on a raining night. One is the famous actor, Alan Madison.
     The other one is an ordinary man, Richard Owen. The police are analyzing the evidence and 
     confessions at the scene. We need your help to find the murderer.
    </p>
    <p>
      <Button variant="primary">Join Now</Button>
    </p>
  </div>
  </div>
  </Styles>
    )

export default  Annoucement;