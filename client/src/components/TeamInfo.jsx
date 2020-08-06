import React, { useEffect, useState } from "react";
import {BsFillLockFill} from "react-icons/bs";


function TeamInfo() {


  
  const [Teams, dataSet] = useState([])

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch('api/get/GetAllTeamInfo')
      response = await response.json()
      dataSet(response)
    }
    fetchMyAPI()
    
  }, [])



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
        
             if(data.TYPE === 'public'){
              return(
                 <div class="row TeamDetailsRow"> 
                      <div class="col"> 
                      <span class="col-6 TeamName"> {data.NAME} </span>
                        </div>
                        <div class="col mu-auto TeamCol"> 
                         {data.TEAM_MEMBER_COUNT}
                        </div>
                        <div class="col md-auto text-right"> <button type="button" class="btn btn-outline-success btn-sm">Join</button> </div>
                 </div> 
              )}
              return(
                <div class="row TeamDetailsRow"> 
                      <div class="col"> 
                      <span class="col-6 TeamName">  {data.NAME}&nbsp;<BsFillLockFill/> </span>
                        </div>
                        <div class="col mu-auto TeamCol"> 
                        {data.TEAM_MEMBER_COUNT}
                        </div>
                        <div class="col md-auto text-right"> 
                        <button type="button" class="btn btn-outline-success btn-sm" 
                                onClick={()=>{ alert('It is a private team, need password!'); }}
                        >
                                  Join
                        </button> 
                        </div>
                 </div> 
              )
            }
              )}
           

        



      
       
       </div>
    </div>
   
    </>
   );


  }


export default TeamInfo;