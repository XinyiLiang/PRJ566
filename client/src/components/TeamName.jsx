import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';



export function TeamName() {

 
        const [team,teamSet] = useState({
            "NAME":""
        })
        const email = sessionStorage.getItem('email');
         const auth = sessionStorage.getItem('auth');
          const history = useHistory();

          

        useEffect(() => {
            async function fetchMyTEam() {
                let teamname = await fetch(`/api/get/team/${sessionStorage.getItem("team")}`, {
                    method:'GET'
                    }).then(teamname => teamname.json()).then(team => {
    
                        teamSet(team);
                    })
                }
                fetchMyTEam();
               
            },[])

        return (
          team.NAME
            )
    
}

export default TeamName;