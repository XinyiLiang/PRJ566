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
            
            
             <div className="info">
                <h4 className="userName" >{user.USERNAME}</h4>
                 <table className='details' frame='void' >
                 <tr height="75">
                     <td> <img className="icon"src={require('../Images/user.png')} alt='icon' /></td>
                     <td >
                     <tr className="detail">Name </tr> 
                     <tr className="value" > {user.FIRST_NAME} {user.LAST_NAME}</tr>
                     </td>
                     </tr>
                     <tr height="75">
                     <td> <img className="icon"src={require('../Images/emailicon.png')} alt='icon' /></td>
                     <td >
                     <tr className="detail" >Email Address </tr> 
                     <tr className="value" > {user.EMAIL}</tr>
                     </td>
                     </tr>
                     <tr height="75">
                     <td> <img className="icon"src={require('../Images/teamicon.png')} alt='icon'  /></td>
                     <td >
                     <tr className="detail" >Team Name </tr> 
                     <tr className="value" > {team.NAME}</tr>
                     </td>
                     </tr>
                
                     <tr height="75">
                     <td> <img className="icon"src={require('../Images/phone-icon.png')} alt='icon'  /></td>
                     <td >
                     <tr className="detail" >Phone Number </tr> 
                     <tr className="value" > {user.PHONENUMBER}</tr>
                     </td>
                     </tr>
             
                 </table>
                 <div align="center">
                            <button type="button" class="btn btn-primary " onClick={()=>{window.location.href="/ChangeProfile"}} >UPDATE PROFILE</button>
                </div>
             </div>
                                           
        </div>
            
        )
    
}

export default Profile;
