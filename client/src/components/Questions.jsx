import React, {  useEffect, useState } from "react";
import { Button, Modal,ListGroup} from 'react-bootstrap';
import { Input} from 'react-advanced-form-addons'
import { Form, Field } from 'react-advanced-form'
import {BsBookHalf} from 'react-icons/bs';



export function Questions() {

  const[infoModalShow,infoSetModalShow] = React.useState(false);
  const[answerModalShow,answerSetModalShow] = React.useState(false);

    const [Quest, dataSet] = useState([])
    const [Answer, setAnswer] = useState([])
    const [oneQuestion, setOneQuestion] = useState([])
 

  const auth = sessionStorage.getItem("auth");
  
  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch(`/api/get/getAllQuestionsby/${10}`)
      response = await response.json()
      dataSet(response)
  
    }

    fetchMyAPI()
  
  }, [])

    function getAnswer(data){
     
      setOneQuestion(data);
      return(
        answerSetModalShow(true)
      )
  
    }
  




    const saveAnswer = ({ serialized, fields, form }) => {
      // return fetch('/api/answer/posttodb', {
      //   body: JSON.stringify(serialized),
      //   method: 'POST',
      //   mode: 'cors', // no-cors, *cors, same-origin
      //   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      //   credentials: 'same-origin', // include, *same-origin, omit
      //   headers: {
      //   'Content-Type': 'application/json'
      //   // 'Content-Type': 'application/x-www-form-urlencoded',
      //   }
      // }).then(res => res.json()).then(data => {
      //   if (data.length == 1) {

      //     answerSetModalShow(false)
      
      //   } else {
      //       //console.log("user doesn't exist");
      //       alert("user doesn't exist!!");
      //   }
      // });
      console.log(JSON.stringify(serialized))
    }

    return (
      <>
      <Button  variant="outline-info font-weight-bold" onClick={ ()=>infoSetModalShow(true)}>
      Questions <BsBookHalf />
      </Button>

      <Modal show={infoModalShow} size ="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header >
          <Modal.Title id="contained-modal-title-vcenter">
          Questions
          </Modal.Title>
      </Modal.Header>

      <Modal.Body>
    
      <Form>
              {Quest.map(data =>(
                   <ListGroup.Item action  key={data.QUESTION_ID} onClick={()=>getAnswer(data)}>
                     
                      {data.DESCRIPTION}
                     
                    </ListGroup.Item>
              ))}
           </Form>  
              
      </Modal.Body>


      <Modal.Footer>
      <Button onClick={() => infoSetModalShow(false)}>Close</Button>
         
      </Modal.Footer>
      </Modal>


      <Modal show={answerModalShow} size ="md" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header >
            <Modal.Title id="contained-modal-title-vcenter">
            {oneQuestion.DESCRIPTION}
            </Modal.Title>
        </Modal.Header>
  
        <Modal.Body>
      
        <Form actrion={saveAnswer}>
        <Input
          name="Answer"
          type="Answer"
         
          onChange={e => setAnswer(e.value)}
         />
                
          </Form>  
                
        </Modal.Body>
  
  
        <Modal.Footer>
       <Button bsSize="large" variant="success" type="submit" primary onClick={e=>saveAnswer(e.value)} >Save</Button>
           
        </Modal.Footer>
        </Modal>
  
     
      </>
       
     
    );


  }
 


  
  export default Questions;      

 



