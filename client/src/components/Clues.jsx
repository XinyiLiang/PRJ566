import React, { useEffect, useState } from "react";
import { Button, Modal,ListGroup} from 'react-bootstrap';
import { BsFillInfoCircleFill } from "react-icons/bs";


function Clues() {

   // const [show, setShow] = React.useState(false);

     const [CluesModal, setShow] = React.useState(false);
     const Close = () => setShow(false);
     const Open = () => setShow(true);

    const [Clues, dataSet] = useState([])
   

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
      
        <Button  variant="outline-info font-weight-bold" onClick={Open}>
          Clues <BsFillInfoCircleFill />
        </Button>
      
        <Modal
          show={CluesModal}
          onHide={Close}
         
          aria-labelledby="contained-modal-title-vcenter"
          centered
          
        >
          <Modal.Header  closeButton>
            <Modal.Title>Clues</Modal.Title>
          </Modal.Header>
       
            
              <ListGroup>
              {Clues.map(data =>(
                   <ListGroup.Item action onClick={Close}  key={data.NPC_ID}  >
                       {data.clue}
                    </ListGroup.Item>
              ))}
                </ListGroup> 
       
          <Modal.Footer>
            <Button variant="secondary" onClick={Close}>
              Close
            </Button>
         
          </Modal.Footer>
        </Modal>
      </>
    );


 }


  
  export default Clues;      

 



