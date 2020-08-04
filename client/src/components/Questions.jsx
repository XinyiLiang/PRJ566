import React, {  useEffect, useState } from "react";
import { Button, Modal,ListGroup} from 'react-bootstrap';
import { Input} from 'react-advanced-form-addons'
import { Form, Field } from 'react-advanced-form'
import {BsBookHalf} from 'react-icons/bs';



export function Questions() {

  const[infoModalShow,infoSetModalShow] = React.useState(false);

    const [Quest, dataSet] = useState([])
 

  const auth = sessionStorage.getItem("auth");
  
  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch(`/api/get/getAllQuestionsby/${10}`)
      response = await response.json()
      dataSet(response)
  
    }

    fetchMyAPI()
  
  }, [])

    return (
      <>
      <Button  variant="outline-info font-weight-bold" onClick={ ()=>infoSetModalShow(true)}>
      Questions <BsBookHalf />
      </Button>

      <Modal show={infoModalShow} size ="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Questions
          </Modal.Title>
      </Modal.Header>

      <Modal.Body>
    
      <Form>
              {Quest.map(data =>(
                   <ListGroup.Item action  key={data.QUESTION_ID}>
                     
                      {data.DESCRIPTION}
                    </ListGroup.Item>
              ))}
           </Form>  
              
      </Modal.Body>


      <Modal.Footer>
      <Button variant="success" onClick={  ()=>infoSetModalShow }>Join Game</Button>
      <Button onClick={() => infoSetModalShow(false)}>Close</Button>
         
      </Modal.Footer>
      </Modal>

     
      </>
       
     
    );


  }
 


  
  export default Questions;      

 



