import React from 'react';
import {Jumbotron , Button} from 'react-bootstrap';

import styled from 'styled-components';


const Styles = styled.div`
.annoucement {
  height:17em;
  width:35em;
  
}
 .AnnoucementBox{
  background-color: #464442;
  position:relative;
  
  margin: 0 auto;
  margin-top:-10em;
  border:5px solid background-color: #464442;;
  height:20em;
  width:35.5em;
  border-radius: 9px;
 }    
 .AnnoucementBox h5{
  color:white;
  padding: 3px;
 } 
`;


export const Annoucement = () => (
<Styles>
    <div className="AnnoucementBox">
      <h5>Annoucement</h5>
    <Jumbotron className="annoucement">
    <h4>City homicide</h4>
    <p>
     August 17, two man was murdered on a raining night. One is the famous actor, Alan Madison.
     The other one is an ordinary man, Richard Owen. The police are analyzing the evidence and 
     confessions at the scene. We need your help to find the murderer.
    </p>
    <p>
      <Button variant="primary">Join Now</Button>
    </p>
  </Jumbotron>
  </div>
  </Styles>
    )

export default  Annoucement;