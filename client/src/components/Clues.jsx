import React, { useEffect, useState } from "react";
import { Button, Modal,ListGroup} from 'react-bootstrap';
import { BsFillInfoCircleFill } from "react-icons/bs";
import Carousel from 'react-bootstrap/Carousel'


function Clues() {

   // const [show, setShow] = React.useState(false);

     const [CluesModal, setShow] = React.useState(false);
     const Close = () => setShow(false);
     const Open = () => setShow(true);

    const [Clues, dataSet] = useState([])
    const id = sessionStorage.getItem("team");
   

    useEffect(() => {
      async function fetchMyAPI() {
        let response = await fetch(`/api/get/getTeamClues/${id}`)
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
       
            
          <Carousel>
              {Clues.map(data =>(
                     <img key={data.CLUE_ID} style={{ width: "100%" }} src = {data.DESCRIPTION}/>
              ))}
               </Carousel>
       
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

 


