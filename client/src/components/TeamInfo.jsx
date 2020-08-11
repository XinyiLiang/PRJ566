import React, { useEffect, useState,Prompt } from "react";
import {BsFillLockFill} from "react-icons/bs";
import { Form, Field } from 'react-advanced-form'
import { Input, Button } from 'react-advanced-form-addons'
import { Modal } from "react-bootstrap";


function TeamInfo() {


  
  const [Teams, dataSet] = useState([]);
  const [password, setPassword] = useState("");
  const[infoModalShow,infoSetModalShow] = React.useState(false);

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch('api/get/GetAllTeamInfo')
      response = await response.json()
      dataSet(response)
      console.log(response);
    }
  
    
    fetchMyAPI();
   
  
  }, [])

  const editPlayerTeam = (team_id,email) => {
    return fetch(`/api/put/userTeam/${email}`, {
      method: 'PUT',
      body: JSON.stringify({email:email,team_id:team_id}),
      headers: {
      'Content-Type': 'application/json'
      }
    })
  };

 function checkPlayer(data){

  if(sessionStorage.getItem("auth") == "true"){
      if(data.TYPE === 'public'){
        sessionStorage.setItem("team",data.TEAM_ID);
        console.log(sessionStorage.getItem("email"))
        editPlayerTeam(data.TEAM_ID,sessionStorage.getItem("email"));
        alert("Welcome to the Team (" + data.NAME + ")")
      }else{
        console.log(data);
        return(

          infoSetModalShow(true)
        
          )
      }
  }


 }
  function passCheck(data,value) {
      console.log(data,value)
    if(data.PASSWORD == value){
      editPlayerTeam(data.TEAM_ID,sessionStorage.getItem("email"));
    }else{
      return(alert("Wrong Password"));
    }

  }


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
                                onClick={()=>{checkPlayer(data) }}
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
                  <Form >
                    <Field.Group >
                      <Input
                        name="password"
                        type="password"
                        label="Password"
                        onChange={e =>setPassword(e.value)}
                      />
                          <Button bsSize="lg" variant="success" type="submit" primary onClick={()=>passCheck(data,password)}  >Join</Button>  
                    </Field.Group>      
                    
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