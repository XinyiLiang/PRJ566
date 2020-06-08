import React , {Component} from 'react';
import {Card, Budge , Button} from 'react-bootstrap';


export function EventCard({data,setOrder}){

    return(
        <Card className="h-100 mt-3 shadow-sm bg-light border-lg border-warning rounded-lg p-3  ">
           
            <Card.Img variant="top" src={data.image}/>
            <Card.Body className = "d-flex flex-coloum">
                <div className="d-flex mb-2 justify-content-between">
                     <Card.Title class="mb-0 front-weight-bold">{data.name}
                     </Card.Title>
                     </div>
            </Card.Body>
          
        </Card>
    )

}

export default EventCard;