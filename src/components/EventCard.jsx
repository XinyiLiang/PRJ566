
import React from 'react';
import {Card , Button, Modal,Col} from 'react-bootstrap';
import Login from './Login';


export function EventCard({data,setOrder}){


    const[infoModalShow,infoSetModalShow] = React.useState(false);
    const[LogInModalShow,LogInSetModalShow] = React.useState(false);

    return(
        <div className= "mt-3">
            <h5> {data.date}</h5>
        <Card className=" h-100 shadow-sm bg-dark border-warning rounded-lg p-3 " style={{borderWidth:'5px'}}>
           
            <Card.Title className="  mb-0 front-weight-bold text-warning h3">{data.name}</Card.Title>

                <Card.Img src={data.image}/>
                <Card.Body className = "text-white" > 
                <Card.Text> <img src={require('../Images/Pin.png')} className="mb-1" alt="Pin" style={{width:"20px", height:"20px"}} />  {data.loc} </Card.Text> 
                <Card.Text> <img src={require('../Images/clock.png')} className="mb-1" alt="Time" style={{width:"20px", height:"20px"}} />  {data.time} </Card.Text> 
                </Card.Body>
              
                

                <Button variant="info" onClick={() => infoSetModalShow(true)} > More </Button>
               
   
        </Card>
        <Modal show={infoModalShow} onHide={() => infoSetModalShow(false)} size ="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                {data.name}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p> {data.info}</p>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="success" onClick={() =>{infoSetModalShow(false); LogInSetModalShow(true)} }>Apply</Button>
        <Button onClick={() => infoSetModalShow(false)}>Close</Button>
           
        </Modal.Footer>
    </Modal>

    <Modal show={LogInModalShow} onHide={() => LogInSetModalShow(false)} size ="mg" aria-labelledby="contained-modal-title-vcenter" >
        <Modal.Header closeButton>
           
             
                <Col ><img src={require('../Images/detectiveLogo.png')} className="App-logo" alt="logo "   /></Col>
                
  
           
        </Modal.Header>
        <Modal.Body>
          <Login/>
        </Modal.Body>
        <Modal.Footer>
       
        <Button onClick={() => LogInSetModalShow(false)}>Close</Button>
           
        </Modal.Footer>
    </Modal>



        </div>
    )

   


}

export default EventCard;