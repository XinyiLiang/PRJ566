import React, {  useEffect, useState } from "react";
import { Button, Modal,ListGroup} from 'react-bootstrap';
import { Input} from 'react-advanced-form-addons'
import { Form, Field } from 'react-advanced-form'
import {BsBookHalf} from 'react-icons/bs';



export function Questions() {

  const[infoModalShow,infoSetModalShow] = React.useState(false);
  const[answerModalShow,answerSetModalShow] = React.useState(false);

  const[existed,setExisted] = useState(false);

    const [Quest, dataSet] = useState([])
    const [oneQuestion, setOneQuestion] = useState([])
    const [oldAnswer, setOldAnswer] = useState({ANSWER:""})
    
 
  const team_id = sessionStorage.getItem("team");
  const auth = sessionStorage.getItem("auth");
  
  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch(`/api/get/getAllQuestionsby/${10}`)
      response = await response.json()
      dataSet(response)
  
    }

    fetchMyAPI();
  
  }, []);

    function getAnswer(data){
     
      setOneQuestion(data);
      getOldQuestion(data);
     
    answerSetModalShow(true)
        
    }


 

      const getOldQuestion = (data) => {
         fetch(`/api/get/answerTeam/${team_id}`, {
          body: JSON.stringify({question_id:data.QUESTION_ID,team_id:team_id}),
          method: 'POST',
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
          }
        }).then(res => res.json()).then(data => {
          if (data.length == 1) {
            setOldAnswer(data[0]);
            setExisted(true);
        
          } else {
              setOldAnswer({
                ANSWER:""
              })
              setExisted(false);
              console.log("NON");
          }
        });
      };
      
    
  


    function saveAnswer () {

      console.log(oldAnswer.ANSWER)
      if(existed){
        
        fetch(`/api/put/answer/${team_id}`, {
          method: 'PUT',
          body: JSON.stringify({team_id:team_id,question_id:oneQuestion.QUESTION_ID,answer:oldAnswer.ANSWER}),
          headers: {
          'Content-Type': 'application/json'
          }
        });

      }else{
       fetch('/api/answer/posttodb', {
        body: JSON.stringify({team_id:team_id,question_id:oneQuestion.QUESTION_ID,answer:oldAnswer.ANSWER}),
        method: 'POST',
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
        }
      }).then(res => res.json()).then(data => {
        if (data.length == 1) {

          answerSetModalShow(false)
      
        } else {
            console.log("user doesn't exist");
           
        }
      });
    }
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
      
        <Form >
        <Input
          name="Answer"
          type="Text"
          value = {oldAnswer.ANSWER}
          onChange={(e) =>{setOldAnswer({ANSWER:e.nextValue});}}
         />
          
          </Form>  
                
        </Modal.Body>
  
  
        <Modal.Footer>
        <Button bsSize="large" variant="success" type="submit" primary onClick={() => saveAnswer()}>Save</Button>
       <Button onClick={() => answerSetModalShow(false)}>Close</Button>
        </Modal.Footer>
        </Modal>
  
     
      </>
       
     
    );


  }
 


  
  export default Questions;      

 



