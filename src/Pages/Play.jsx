import React from 'react';
import styled from 'styled-components';
import { BsFillInfoCircleFill } from "react-icons/bs";
import {BsCardText}  from 'react-icons/bs';

import PhoneBook from '../components/PhoneBook'

const Styles = styled.div`
  
.help-section{
    display: inline;
    float:left;
    
}
.Main{
    background: #ded9ca; /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #ded9ca , #c4b5a9); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #ded9ca , #c4b5a9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    padding:3em;
    margin: 0 auto;
    display: inline-block;
}
.score{
    padding-right:20px;
}
.GroupName{
    font-family: 'Playfair Display SC';
    font-size:1.5em;
    color:#102169;
}
.SecondRowImg{
        width: 100%;
        max-height: 100%;
        display: block;
        margin: 0 auto;
        padding-top: 1em;
}
.CaseMain{
    margin: 3em;
    height:100%;
      color : #fff;    
}

.CaseMain h2{
    font-family: 'Kalam', cursive;
    font-size:50px;
    color:#383838;
}
.CaseMain p{
    font-family: 'Kalam', regular;
    font-size:18px;
    color:#383838;
}

.fixedTop{
    position: -webkit-sticky; /* Safari */  
    position: sticky;
    top: 10px;
    z-index:1;
    padding:10px;
    background: #ebeae8; /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #fff9ed ,#ebeae8); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #fff9ed , #ebeae8); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    border: 5px solid #995200;
    border-radius: 25px;
    margin: 0 auto;
}
`;

export const Play = () =>(

    <Styles>
    <div class="Main">
             
            <div class="fixedTop">
               <div class="row">
               <div  class="col-4 text-center" >
               <p class="font-weight-bold GroupName">Team: D-squad </p>
               </div>
               </div>
            <div class="row ">

            <div  class="col text-center " >
                <div class="d-inline font-weight-bold score">Step: 00</div>
                <div class="d-inline font-weight-bold score">Score: 00</div>
                <div class="d-inline font-weight-bold score">Timer: 00:00:00</div>
               
            </div>

                <div class="col help-section ">
                  <PhoneBook/>&nbsp;&nbsp;
                  <a href="/play" class="btn btn-outline-info font-weight-bold">Question&nbsp;<BsCardText /></a>&nbsp;&nbsp;
                  <a href="/play" class="btn btn-outline-info font-weight-bold">Clues&nbsp;<BsFillInfoCircleFill /></a> &nbsp;&nbsp;
                </div>

            </div>
         </div>
              
         

           <div class="Container text-center">
           

             <div class="row ">
                 <div class="col-md-6">
                 <img src={require('../Images/CityMap.jpg')}  alt="CityMap" class="SecondRowImg"/>
                 </div>
                 <div class="col-md-6">
                 <img src={require('../Images/CrimeScene.jpg')}  alt="CrimeScene" class="SecondRowImg"/>
                 </div>
                
             </div>
      
            <div class="row">
                <div class="col CaseMain"> 
                    <h2 class="text-center">Case overview</h2>
                    <br />

                    <p class="text-left">Alan Madison was an actor, and he was doing well. 
                        He recently got <strong>a role in the movie “Cats of Manhattan,” </strong>            
                                 a script from which he even drove in his car (which you 
                        could inspect at the parking lot, where he was towed after
                        taking him out of the lake).
                    </p>

                    <p class="text-left"> Success in work and almost success in personal life. 
                    Mr. Madison was a completely law-abiding citizen, for one detail -  <strong>he 
                    loved to play poker. In recent years, gambling in Saint Twins has become 
                    illegal, but because fans of the "throw in the cards" had to look for different
                    places for this.</strong> (you could learn about the complicated relationship 
                    of poker with the law from an article in the newspaper, which reported that 
                    “another poker room has been set up”)</p>

                    <p class="text-left">That ill-fated evening, August 17, Mr. Madison, borrowing some money from 
                        his colleagues, went to a closed poker tournament, which was held at the 
                        Grand Cascade Hotel. A very motley audience gathered there, among whom was
                        a very curious character - <strong>Balazs Adrian - a Hungarian collector who brought
                        to St. Twins a collection of Indian antiquities and, among others, a porcelain
                            figurine of Ganesha.</strong> (this information was also available in the newspaper)
                            Fortune was with Madison, but the collector who drank was not. As a result, 
                            the actor won the ill-fated figurine and set off home.
                    </p>

                    <p class="text-left">
                    A receptionist followed, serving guests at the hotel that evening. 
                    This person's name is <strong>Ray Wesley. He was seduced by the possibility of quick
                    enrichment </strong>(you can guess about his love of prosperity by talking with him -
                    he was very obsequious about a collector who dumped money right and left, 
                    and he followed the guest in the hotel parking lot (the parking guard, if 
                    you asked, answered you that he didn’t see any of the guests, but there was 
                    no talk of employees.) By the way, the owner of an antique store gives a
                        description of a person with Wesley’s appearance - this person wanted to 
                        sell Indian values.
                    </p>

                    <p class="text-left">Having led Mr. Madison long enough, Mr. Wesley stabbed him
                    in the head with a <strong>bar siphon</strong>. (you could find the gun at the bottom of the lake,
                    where the attacker threw it. Of course, nobody told you about this, but there is
                        a Poseidon diving center in the catalog, whose services you can use and find a 
                        siphon, as well as a broken bottle of whiskey “Morrisson's,” which Owen received
                        on the forehead, we will return to this a little later).
                    <br />
                    <br />   
                    Madison was seriously injured by the blow, but remained alive for some time. 
                        Weasley drove the victim to the bridge in order to simulate a car accident.
                        <br />   
                        <br />   
                        Upon reaching the bridge, Wesley got out of the car and poured a lot of
                        alcohol into Madison's mouth (that Madison didn’t get drunk on his own 
                        can be understood from the autopsy report: the coroner indicated a large
                        amount of alcohol in his stomach, but the ppm in the blood was strikingly less.)
                        <br />  
                        <br />   
                        It was at this time that <strong>Richard Owen</strong>, an ordinary hard worker returning home, 
                        rode across the bridge from the night shift. Being a kind and sympathetic person
                        (what they tell you at Owen’s place of work - at the Twin Electro factory), Owen
                            stopped the car, got out and asked if help was needed. <strong>Wesley grabbed a bottle</strong>,
                            which he poured into Madison's almost lifeless body, and smashed it on the 
                            forehead of an unsuspecting man to <strong>get rid of the witness</strong>. Owen lost 
                            consciousness (it was easy to guess that the injury was caused by the bottle
                            by reading the autopsy report, which mentions fragments of glass around the
                            forehead - whereas the windshield of Owen’s car is intact).
                            <br /> 
                            <br />   
                            
                            Wesley put both victims in cars and directed the transport in such a 
                            way that it looked like a car accident. In the penalty parking lot, you 
                            can see that one car has side damage. The cars flew down from the bridge,
                                one at a time, according to ranger McDuff - presumably Wesley pushed them 
                                one at a time. It was impossible to see this in more detail, because, as 
                                you know, there was rain and fog.
                            </p>
                    </div>
                </div>

           </div>
            
            
            
            
            
            </div>
    
    
      </Styles>
    )

export default Play;
