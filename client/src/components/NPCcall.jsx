import React, { useEffect, useState } from "react";
import { Button, Modal, Form} from 'react-bootstrap';
import {Container,Row,Col} from 'react-bootstrap';


//import NPCcall from './NPCcall';


function NPCcall() {

   // const [show, setShow] = React.useState(false);


    return (
      <>
      
       
      {/* N P C call */}
        
        <Modal
          show={NPCModal}
          onHide={CloseNPC}
          aria-labelledby="contained-modal-title-vcenter"
          centered
          dialogClassName="NPCcall"
        >
          
          <Modal.Header  closeButton>
          {NPCClues.map(data =>(
            <Modal.Title>You are now calling... {data.name}  </Modal.Title>
            ))} 
          </Modal.Header>
         
          <Modal.Body className="show-grid">
             <Container>
                <Row>
                   <Col xs={12} md={4} lg={3}>
                   <img src={require('../Images/Police.jpg')} alt="police" style={{width:"8vw", height:"8vw"}} />
                   </Col>
                   
                   <Col xs={12} md={8} lg={9}>
                   <Form>
                   <h4>Hi, here is Police Station. What can I help you?</h4>
                   <Form.Check
                         type="radio"
                         label="Show evidence list"
                         name="formHorizontalRadios"
                         id="Option1"
                         />
                     <Form.Check
                        type="radio"
                        label="Show the suspect's confession"
                        name="formHorizontalRadios"
                        id="Option2"
                      />

                    </Form> 
                   </Col>
                  
                </Row>
                <Row>
                <Col xs={12} md={12} lg={12}>
                <Button  variant="success" className="float-right" onClick={OpenNPC}>Ask </Button>
                </Col>
                </Row>
             </Container>
             </Modal.Body>
         
       
          <Modal.Footer>
          <Button variant="outline-info font-weight-bold" onClick={OpenNPC}>
              Question List
            </Button>
            <Button variant="secondary" onClick={CloseNPC}>
              Close
            </Button>
         
          </Modal.Footer>
        </Modal>



      </>
    );


 }


  
  export default NPCcall;      

 



