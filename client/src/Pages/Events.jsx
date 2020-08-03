import React , { useEffect, useState } from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import event from './Data.json';
import {NavBar} from '../components/NavBar';


import {EventCard} from '../components/EventCard';


export function Events() {
///   
const [gameDay, gameSet] = useState([])
    




useEffect(() => {
  async function fetchGameDay() {
    let response = await fetch('/api/get/getAllGamedays');
    response = await response.json();
    gameSet(response);
  };


fetchGameDay();

  
}, [])

 return (
    <div className="HomeMain">
      <NavBar/>
  <Container >
      <Row>
          {gameDay.map(data =>(
              <Col md={6} xs={8} lg={3} className="mb-5" key={`${data.GAME_ID}`}>
                  <EventCard data={data} />
               
              </Col>
          ))}
      </Row>   

    


  </Container>
  </div>
 )
  
 }
export default Events;

