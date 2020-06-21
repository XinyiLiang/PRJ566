import React  from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import event from './Data.json';

import {EventCard} from '../components/EventCard';


export function Events() {
///
 return (
    <div className="HomeMain">
  <Container >
      <Row>
          {event.map(data =>(
              <Col xs={3} className="mb-5" key={`${data.id}`}>
                  <EventCard data={data}/>
              </Col>
          ))}
      </Row>
  </Container>
  </div>
 )
  
          }
export default Events;

