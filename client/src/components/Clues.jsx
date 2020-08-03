import React, { useEffect, useState } from "react";
import { Button, Modal,ListGroup,Form} from 'react-bootstrap';
import { BsFillInfoCircleFill } from "react-icons/bs";


function PhoneBook() {
    const [show, setShow] = React.useState(false);
  
    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    const [CLUES, dataSet] = useState([])

    useEffect(() => {
      async function fetchMyAPI() {
        let response = await fetch('/api/get/getAllNpcClues')
        response = await response.json()
        dataSet(response)
      }
  
      fetchMyAPI()
      
    }, [])
  
    return (
      <>
      
        <Button  variant="outline-info font-weight-bold" onClick={handleShow}>
        Clues <BsFillInfoCircleFill  />
        </Button>
      
        <Modal
          show={show}
          onHide={handleClose}
         
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header  closeButton>
            <Modal.Title>Clues</Modal.Title>
          </Modal.Header>
       
                

            <Form.Group>
            {CLUES.map(data =>(
                    <ListGroup.Item action onClick={alert}  key={data.clue_ID}>
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

 



