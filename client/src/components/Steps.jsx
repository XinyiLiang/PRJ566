import React, { useEffect, useState,Prompt } from "react";


export function Steps() {

    const id = sessionStorage.getItem("team");
    const [steps,setSteps]  = useState([])
    const [values,valuesSet]  = useState({
        team_id : id,
        game_id : sessionStorage.getItem("GameID")
    })
               

        useEffect(() => {

           addStep()
            // setInterval(() => {

            //    addStep()
            //   }, 10000);
          
         
        })

       async function addStep(){
            
            await fetch(`/api/get/scoreTeam/${id}`, {
              body: JSON.stringify(values),
              method: 'POST',
              mode: 'cors', // no-cors, *cors, same-origin
              cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
              credentials: 'same-origin', // include, *same-origin, omit
              headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
              }
            }).then(res => res.json()).then(data => {
              if (data) {
                
                  return(setSteps(data.MOVES));     
            
              } else {
                  console.log("no Moves");
                         
              }
            });
            
          }


    
    return (
steps
    );


 }


  
  export default Steps;      

 



