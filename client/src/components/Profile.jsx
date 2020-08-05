import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import "../Profile.css";


export function Profile() {

 
        const [user, dataSet] = useState([])
        const [team,teamSet] = useState([])
        const email = sessionStorage.getItem('email');
         const auth = sessionStorage.getItem('auth');
          const history = useHistory();

          

        useEffect(() => {
            if(auth == 'true'){
            async function fetchMyAPI() {
            let response = await fetch(`/api/get/getPlayer/${email}`, {
                method:'GET'
                }).then(response => response.json()).then(data => {
                    
                        
                    dataSet(data);
                
                })               
            }
            async function fetchMyTEam() {
                let teamname = await fetch(`/api/get/team/${sessionStorage.getItem("team")}`, {
                    method:'GET'
                    }).then(teamname => teamname.json()).then(team => {
    
                        teamSet(team);
                    })
                }
             fetchMyTEam()
            fetchMyAPI();
       
      
    }else{
        history.push('/Login')
    }
}, [])


   
        return (
            <div className="profile">
                <div className="row">

                    <div className="col-sm-12 col-md-4 col-lg-12">

                        <ul class="list-group">
                            <li class="list-group-item list-group-item-info">User Name: {user.USERNAME}</li>
                            <li class="list-group-item list-group-item-info">Team Name:{team.NAME}</li>
                            <li class="list-group-item list-group-item-info">Name:{user.FIRST_NAME} {user.LAST_NAME}</li>
                            <li class="list-group-item list-group-item-info">Phone Number:{user.PHONENUMBER}</li>
                            <li class="list-group-item list-group-item-info">Email:{user.EMAIL}</li>

                        </ul>
                        <div class="btn-group p-3 col-lg-5 pull-right">
                            <button type="button" class="btn btn-primary " onClick={()=>{window.location.href="/ChangeProfile"}} >Change Info</button>
  

                        </div>
                    </div>
                </div>
            </div>

        )
    
}

export default Profile;