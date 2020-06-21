import React from 'react';
import {Annoucement} from '../components/Announcement';

export const Home = () =>(

       <div className="HomeMain">

           <div id="HomePic">
             <img src={require('../Images/HomeDetective.png')} alt="Welcome Detective" width="500" height="600" />
           </div>

           <div className="WelcomeDiv">
              <h1> Welcome Back  </h1>
              <h2>Detective</h2>
           </div>

           <div className="HomeExplain">
              <p>
              We are fighting with the city crime and we need you to help us <br /> 
              save the city from falling apart. <br /> Following is the next crime case solving announcement.
              </p>
           </div>
             
           <div className="HelpTool">
              <h2>Help Tool</h2>
                 <ul>
                    <li><a href="/">How to Play</a></li>
                    <li><a href="/">ScoreBoard</a></li>
                    <li><a href="/">Contact Us</a></li>
                 </ul>
           </div>

           <Annoucement />
       </div>
    
    )
export default Home;
