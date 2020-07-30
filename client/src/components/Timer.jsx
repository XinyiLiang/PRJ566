
import React from "react";

import Countdown from 'react-countdown-now';
function Timer() {

    // Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
    } else {
      // Render a countdown
      return <span>{hours}:{minutes}:{seconds}</span>;
    }
  };
   
 
    return (
        <Countdown
    date={Date.now() + 7200000}
    renderer={renderer}/>
    );


 }


  
  export default Timer;      

 



