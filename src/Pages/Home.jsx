import React from 'react';
import AnnoucementSlider from '../components/AnnoucementSlider';


export const Home = () =>(
    <div>
        <div className="HomeMain">

<div class="container">
   <div class="row">

   <div class="col">
          <div id="HomePic" >
              <img src={require('../Images/HomeDetective.png')} alt="Welcome Detective" width="500" height="600" />
          </div>
   </div>

      <div class="col-6">
              <div className="WelcomeDiv" >
                 <h1> Welcome Back  </h1>
                 <h2>Detective</h2>
              </div>

              <div className="HomeExplain" >
                <p>
                We are fighting with the city crime and we need you to help us <br /> 
                save the city from falling apart. <br /> Read the crime case announcement to find out more.
                 </p>
                 
              </div>

      </div>
   </div> 
   </div>
   </div>

            <div className="HomeSecondPart">
         <div class="container">
         <div class="row">
            <div class="col-4">
                 <div className="HelpTool">
                     <h2>Help Tool</h2>
                      <ul>
                        <li><a href="/">How to Play</a></li>
                        <li><a href="/">ScoreBoard</a></li>
                        <li><a href="/ContactUs">Contact Us</a></li>
                      </ul>
                  </div>
              </div>
                 
                        <div class="col-7">
                          <AnnoucementSlider />
                        </div>
               </div>
          </div>
       </div>          
          
      </div> 
          
       
    
    )
export default Home;
