import React, { useEffect, useState } from "react";
import { Button, Modal,ListGroup,Form} from 'react-bootstrap';
import {Container,Row,Col} from 'react-bootstrap';
import {BsBookHalf} from 'react-icons/bs';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
//import '../asset/styles.css'


function PhoneBook() {

   // const [show, setShow] = React.useState(false);

     const [PBModal, setPBShow] = React.useState(false);
     const ClosePB = () => setPBShow(false);
     const OpenPB = () => setPBShow(true);

     const [CluesModal, setClueShow] = React.useState(false);
     const CloseClues = () => setClueShow(false);
     const OpenClues = () => setClueShow(true);

     const [NPCModal, setNPCShow] = React.useState(false);
     const CloseNPC = () => setNPCShow(false);
    
     const OpenNPC = () => { setNPCShow(true);
                  
     }
     const [Score, scoreSet] = useState([]);
     const [NPCCall, setState] = useState([]) ;
     const [NPC, dataSet] = useState([]);
     const [Clues, clueSet] = useState([])
     
    const id = sessionStorage.getItem("team")
    const game_id = sessionStorage.getItem("GameID");

    const [values,valuesSet]  = useState({
      team_id : id,
      game_id : sessionStorage.getItem("GameID")
  })
    
        useEffect(() => {
        
          async function fetchMyAPI() {
            let response = await fetch('/api/get/getAllNpc')
            response = await response.json()
            dataSet(response)
          }             
        
          
          fetchMyAPI()}, [])

    function CallNPC(data){
      addStep();
      setState(data);

      
     
        let clues = fetch(`/api/get/getAllNpcClues/${data.NPC_ID}`, {
        
         method:'GET'
        }).then(clues => clues.json()).then(clues => {          
          clueSet(clues);
        })
      return(
   

        OpenNPC()
      )
    }
   
    
      const addStep = () => {
        return fetch(`/api/put/addStep/${id}`, {
          method: 'PUT',
          body: JSON.stringify(values),
          headers: {
          'Content-Type': 'application/json'
          }
        })    
    }

    const collectClues=(data)=>{
      
      fetch('/api/team_score_clue/posttodb', {
        body: JSON.stringify({clue_id:Clues.CLUE_ID}),
        method: 'POST',
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
        }
      }).then(res => res.json()).then(data => {
        if (data.length > 0) {
          console.log(data);
        } else {
          console.log(data);
            console.log("clue doesn't exist");
        }
      });
      OpenClues()
    }

    const zoomOutProperties = {
      duration: 5000,
      transitionDuration: 500,
      infinite: true,
      indicators: true,
      scale: 0.9,
      arrows: true
    };

    

 
    return (
      <>
      
        <Button  variant="outline-info font-weight-bold" onClick={OpenPB}>
          Phone Book <BsBookHalf />
        </Button>
      
        <Modal
          show={PBModal}
          onHide={ClosePB}
         
          aria-labelledby="contained-modal-title-vcenter"
          centered
          
        >
          <Modal.Header  closeButton>
            <Modal.Title>Phone Book</Modal.Title>
          </Modal.Header>
       
            
              <ListGroup>
              {NPC.map(data =>(
                   <ListGroup.Item action onClick={()=>CallNPC(data) }  key={data.NPC_ID}>
                       {data.NAME}
                    </ListGroup.Item>
              ))}
                </ListGroup> 
       
          <Modal.Footer>
            <Button variant="secondary" onClick={ClosePB}>
              Close
            </Button>
         
          </Modal.Footer>
        </Modal>
          
       
      {/* N P C call*/}
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
                   <img src={(NPCCall.IMAGE)} alt="police" style={{width:"8vw", height:"8vw"}} />
                   </Col>
                   
                   <Col xs={12} md={8} lg={9}>
                   <h4>Hi, this is {NPCCall.NAME}. How can I help you?</h4>
                   <h5>{NPCCall.ANSWER}</h5>
                   </Col>
                  
                </Row>
                <Row>
                <Col xs={12} md={12} lg={12}>
                <Button  variant="success" className="float-right" onClick={()=> OpenClues() }>Ask </Button>
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


        <Modal dialogClassName='custom-dialog'
          show={CluesModal}
          onHide={CloseClues}
          aria-labelledby="contained-modal-title-vcenter"
          centered
          
        >
          
          <Modal.Header  closeButton>
          
            <Modal.Title>Evidence</Modal.Title>
           
          </Modal.Header>
         
          <Modal.Body >

            
            <div className="slide-container"></div>
          <Zoom {...zoomOutProperties}>  
          {Clues.map(data =>( <img key={data.CLUE_ID} src={data.DESCRIPTION} />))} 
          </Zoom>
          <div />
             </Modal.Body>
          <Modal.Footer>
         
            <Button variant="secondary" onClick={CloseClues}>
            Close
            </Button>
         
          </Modal.Footer>
        </Modal>

      </>
    );


 }


  
  export default PhoneBook;      

 



