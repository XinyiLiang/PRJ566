

import React, { useEffect, useState,Prompt, useReducer } from "react";
import {BsFillLockFill} from "react-icons/bs";
import { Form, Field, FormProvider} from 'react-advanced-form'
import { Input, Button, Select } from 'react-advanced-form-addons'
import { Modal } from "react-bootstrap";
import Login from './Login';
import rules from '../ValidationRules'
import messages from '../ValidationMessages'

function TeamInfo() {

  let auth = sessionStorage.getItem("auth");
  
  
  const [Teams, dataSet] = useState([]);
  const [password, setPassword] = useState("");
  const[infoModalShow,infoSetModalShow] = React.useState(false);
  const[CreateTeamShow,CreateTeamSetModalShow] = React.useState(false);
  const[LogInModalShow,LogInSetModalShow] = React.useState(false);
 
  const[selectedOption,setTeamOption] = React.useState("");
  const [CreateTeam_password, setTPassword] = useState("");  
  const [CreateTeam_passwordCF, setTPasswordCF] = useState("");  
  const email = sessionStorage.getItem('email');


  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch('api/get/GetAllTeamInfo');
      response = await response.json();
      dataSet(response);

      console.log(response);
    }
  
    
    fetchMyAPI();
   
  
  }, [])

  const editPlayerTeam = (team_id,email) => {
    fetch(`/api/put/userTeam/${email}`, {
      method: 'PUT',
      body: JSON.stringify({email:email,team_id:team_id}),
      headers: {
      'Content-Type': 'application/json'
      }
    });
  };

 function checkPlayer(data){

  if(sessionStorage.getItem("auth") == "true"){
      if(data.TYPE === 'public'){
        sessionStorage.setItem("team",data.TEAM_ID);
        console.log(sessionStorage.getItem("email"));
        editPlayerTeam(data.TEAM_ID,sessionStorage.getItem("email"));
        alert("Welcome to the Team (" + data.NAME + ")");
      }else{
        console.log(data);
      

          infoSetModalShow(true);
        
          
      }
  }


 }
  function passCheck(data) {
 
    if(data.PASSWORD == password){
      try{
      editPlayerTeam(data.TEAM_ID,sessionStorage.getItem("email"));
      infoSetModalShow(false);
      console.log("Welcome to the Team (" + data.NAME + ")");
      sessionStorage.setItem("team",data.TEAM_ID);
      } catch(e) {
        console.log(e);
      }
    
    } else {
      console.log("Wrong Password");
    }

  }

 

  function createTeam(){
    if(auth === "true")
    {
      CreateTeamSetModalShow(true);
      setTeamOption("");
     }
    else
    {
      CreateTeamSetModalShow(false); 
      LogInSetModalShow(true); 
    }

}

const AddNewTeamToDB = ({ serialized, fields, form }) => {
  console.log(JSON.stringify(serialized));
  return fetch(`/api/team/posttodb`, {
    body: JSON.stringify(serialized),
    method: 'POST',
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
    'Content-Type': 'application/json'
    // 'Content-Type': 'application/x-www-form-urlencoded',
    }
    
  }).then(res => res.json()).then(data => {
    
    if (data.rowCount == 1) {
      console.log("ok!!");
          

    //history.push('/');
  // window.location.href="/Teams"
  CreateTeamSetModalShow(false); 
    } else {
        console.log("fails!!");
    }
  });

};


    return(
      <>
<div class="TeamList rounded">
        
    <div class="container rounded-top TeamListContainer">
        <div class="row rounded-top TeamListHeader"> 
                 <div class="col-6">
                    <span class="font-weight-bold">Team Name</span>
                 </div>
                 <div class="col col-mu-auto">
                    <span class="font-weight-bold">Member#</span>
                 </div>
                <div class="col col-md-auto">
                    <span class="font-weight-bold"></span>
                </div>
                
       </div>
   
       {Teams.map(data =>{
        
             if(data.TYPE === 'public'&& data.TEAM_ID != '0'){
              return(

                 <div class="row TeamDetailsRow" key={`${data.TEAM_ID}`}> 

                      <div class="col"> 
                      <span class="col-6 TeamName"> {data.NAME} </span>
                        </div>
                        <div class="col mu-auto TeamCol"> 
                         {data.TEAM_MEMBER_COUNT}
                        </div>

                        <div class="col md-auto text-right"> <button type="button" class="btn btn-outline-success btn-sm"
                         onClick={()=>{ checkPlayer(data) }}
                         >Join</button> </div>
                 </div> 
              )}
              else if (data.TYPE === 'private' && data.TEAM_ID != '0'){
              return(
                <div class="row TeamDetailsRow" key={`${data.TEAM_ID}`}> 

                      <div class="col"> 
                      <span class="col-6 TeamName">  {data.NAME}&nbsp;<BsFillLockFill/> </span>
                        </div>
                        <div class="col mu-auto TeamCol"> 
                        {data.TEAM_MEMBER_COUNT}
                        </div>
                        <div class="col md-auto text-right"> 
                        <button type="button" class="btn btn-outline-success btn-sm" 

                                onClick={()=>checkPlayer(data) }

                        >
                                  Join
                        </button> 
       
                        </div>
                    


                  <Modal show={infoModalShow} onHide={() => infoSetModalShow(false)} size ="sm" aria-labelledby="contained-modal-title-vcenter" centered>
                  <Modal.Header closeButton>
                      <Modal.Title id="contained-modal-title-vcenter">
                          {data.NAME}
                      </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>

                  <Form action >

                    <Field.Group >
                      <Input
                        name="password"
                        type="password"
                        label="Password"
                        required
                        onChange={e =>setPassword(e.nextValue)}
                      />
                           
                    </Field.Group>      
                    <Button bsSize="lg" variant="success" type="submit" primary onClick={() => passCheck(data)}  >Join</Button>
                    </Form>
                  </Modal.Body>
              </Modal>


                 </div> 
              )}
            }
          )}       
       </div>
    </div>
   
    </>
   );

  }


export default TeamInfo;
