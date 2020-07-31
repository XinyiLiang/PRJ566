import React, { Component, useEffect, useState } from "react";
import { Button, Modal,ListGroup,Form} from 'react-bootstrap';

import {BsBookHalf} from 'react-icons/bs';



function PhoneBook() {
    const [show, setShow] = React.useState(false);
  
    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    const [Quest, dataSet] = useState([])

    useEffect(() => {
      async function fetchMyAPI() {
        let response = await fetch('/api/get/getAllQuestions')
        response = await response.json()
        dataSet(response)
      }
  
      fetchMyAPI()
      
    }, [])
  
    return (
      <>
      
        <Button  variant="outline-info font-weight-bold" onClick={handleShow}>
        Questions <BsBookHalf />
        </Button>
      
        <Modal
          show={show}
          onHide={handleClose}
         
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header  closeButton>
            <Modal.Title>Questions</Modal.Title>
          </Modal.Header>
       
                

            <Form.Group>
            {Quest.map(data =>(
                    <ListGroup.Item action onClick={alert}  key={data.Quest_ID}>
                       {data.NAME}
                       <Form.Control type="text" placeholder="Normal text" />
                    </ListGroup.Item>
              ))}
             
              
            </Form.Group>
                
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
         
          </Modal.Footer>
        </Modal>
      </>
    );


 }


  
  export default PhoneBook;      

 



