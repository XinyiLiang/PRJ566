import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import {Card , Button, Modal,Col} from 'react-bootstrap';
import Login from './Login';




 export function EventCard({data,setOrder}){

    let history = useHistory();
    const [Game, dataSet] = useState([]);
   

    let team_id = parseInt(sessionStorage.getItem("team"),10);
    let game_id= data.GAME_ID;
    let auth = sessionStorage.getItem("auth");
    const [values,valuesSet]  = useState({
        team_id : team_id,
        game_id : sessionStorage.getItem("GameID")
    })
    


    const [teamScore, setState] = useState({
        total_score:0,
        moves:0,
        correct_answers:0,
        team_id:parseInt(sessionStorage.getItem("team"),10),
        game_id:data.GAME_ID
    }) ;
  
      useEffect(() => {
      async function fetchMyAPI() {
        let response = await fetch(`/api/get/scenario_game/${data.GAME_ID}`, {
            method:'GET'
            }).then(response => response.json()).then(data => {

               
                dataSet(data);
               
            })
  
      }
      fetchMyAPI()
      checkTeam()
      
    }, [])
 
    const registerTeam = (teamScore ) => {
        return fetch('/api/score/posttodb', {
          body: JSON.stringify(teamScore),
          method: 'POST',
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
          }
        })
      };
      const checkTeam = () => {
        return fetch('/api/get/getAllScores').then(res=>res.json()).then(data => {
            if (data.length > 0) {
                console.log(data)
                console.log('team exists');
                
  
          
            } else {
                console.log(data)
                console.log("team doesn't exist");
        
            }
          });
        }
    
   
      
    const[infoModalShow,infoSetModalShow] = React.useState(false);
    const[LogInModalShow,LogInSetModalShow] = React.useState(false);
    
    function check (){

        if(auth === "true" && sessionStorage.getItem("team") != "0"){
          
          
         
            registerTeam(teamScore);
            sessionStorage.setItem("GameID",data.GAME_ID);
            zeroStep();
            
            history.push('/Play');
    

        }else if (sessionStorage.getItem("team") == "0"){
            alert("Must be in the team to join the game!")
            history.push('/Teams');
          
        }
        
        else
        {
            infoSetModalShow(false); 
            LogInSetModalShow(true);

        }

    }
    function zeroStep ()  {
        return fetch(`/api/put/zeroStep/${team_id}`, {
          method: 'PUT',
          body: JSON.stringify(values),
          headers: {
          'Content-Type': 'application/json'
          }
        })    
    }
  
     const date = new Date(data.DATE).toISOString().slice(0,10);
    return(

   

       

        <div className= "mt-3">
            
            <h5> {date} </h5>
        <Card className=" h-100 shadow-sm bg-dark border-warning rounded-lg p-3 " style={{borderWidth:'5px'}}>
           
            <Card.Title className="  mb-0 front-weight-bold text-warning h3">{Game.NAME}</Card.Title>

                <Card.Img src= {Game.IMAGE}/>
                <Card.Body className = "text-white" > 
                <Card.Text> <img src={require('../Images/Pin.png')} className="mb-1" alt="Pin" style={{width:"20px", height:"20px"}} /> Online </Card.Text> 
                <Card.Text> <img src={require('../Images/clock.png')} className="mb-1" alt="Time" style={{width:"20px", height:"20px"}} />  {data.TIME} </Card.Text> 
                </Card.Body>
              
                

                <Button variant="info" onClick={() => infoSetModalShow(true)} > More </Button>
               
   
        </Card>
        <Modal show={infoModalShow} onHide={() => infoSetModalShow(false)} size ="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                {Game.NAME}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p> <h5>{Game.DESCRIPTION}</h5></p>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="success"  onClick={                        ()=>check()                              }>Join Game</Button>
        <Button onClick={() => infoSetModalShow(false)}>Close</Button>
           
        </Modal.Footer>
    </Modal>

    <Modal show={LogInModalShow} 
    onHide={() => LogInSetModalShow(false)} 
    size ="mg" 
    aria-labelledby="contained-modal-title-vcenter"  
    >
       
        <Modal.Header closeButton>
                
           <h3 >Log in to your account</h3>
           
        </Modal.Header>
        <Modal.Body>
          <Login/>
        </Modal.Body>
        <Modal.Footer>
       
        <Button onClick={() => LogInSetModalShow(false)}>Close</Button>
           
        </Modal.Footer>
    </Modal>



        </div>
    )

   

}

export default EventCard;