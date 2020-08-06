import React from 'react';

import TeamInfo from '../components/TeamInfo';
import {NavBar} from '../components/NavBar';
export const Team = () =>(
    <div className="HomeMain">
            <NavBar/>
         <h3>Team Score</h3>
         <TeamInfo/>
        
    </div>
)
export default Team;
