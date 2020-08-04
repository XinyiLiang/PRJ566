import React, { useEffect, useState } from "react";
import { Button, Modal,ListGroup,Form} from 'react-bootstrap';
import {Container,Row,Col} from 'react-bootstrap';



 export function Call({data,setOrder}){



     const [NPCModal, setNPCShow] = React.useState(true);
     const CloseNPC = () => setNPCShow(false);
    
     const OpenNPC = () => setNPCShow(true);         

     useEffect(() => {
        
        OpenNPC();
      });


        return(
<>
            <Modal
            show={NPCModal}
            onHide={CloseNPC}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            dialogClassName="NPCcall"
          >
            
            <Modal.Header  closeButton>
            
              <Modal.Title>You are now calling...   </Modal.Title>
             
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
           
              <Button variant="secondary" onClick={CloseNPC}>
              End Call
              </Button>
           
            </Modal.Footer>
          </Modal>
  </>
        );  
    }
 export default Call;