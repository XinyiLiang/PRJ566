import React, { Component, useEffect, useState } from "react";
import { Button, Modal,ListGroup} from 'react-bootstrap';

import {BsBookHalf} from 'react-icons/bs';



function PhoneBook() {
    const [show, setShow] = React.useState(false);
  
    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    const [NPC, dataSet] = useState([])

    useEffect(() => {
      async function fetchMyAPI() {
        let response = await fetch('/api/get/getAllNpc')
        response = await response.json()
        dataSet(response)
      }
  
      fetchMyAPI()
      
    }, [])
  
    return (
      <>
      
        <Button  variant="outline-info font-weight-bold" onClick={handleShow}>
          Phone Book <BsBookHalf />
        </Button>
      
        <Modal
          show={show}
          onHide={handleClose}
         
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header  closeButton>
            <Modal.Title>Phone Book</Modal.Title>
          </Modal.Header>
       
            
              <ListGroup>
              {NPC.map(data =>(
                    <ListGroup.Item action onClick={alert}  key={data.NPC_ID}>
                       {data.NAME}
                    </ListGroup.Item>
              ))}
                </ListGroup> 
       
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

 



