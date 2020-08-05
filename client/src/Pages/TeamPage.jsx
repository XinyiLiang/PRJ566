import React from 'react';

import TeamInfo from '../components/TeamInfo';
import {NavBar} from '../components/NavBar';
export const Team = () =>(
    <div className="HomeMain">
            <NavBar/>
         <p className="TeamPageTitle">All Teams in <span>Detective</span></p>
         <TeamInfo/>
        
    </div>
)
export default Team;
