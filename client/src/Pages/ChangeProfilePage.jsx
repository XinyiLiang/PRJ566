import React from 'react';
import ChangePro from '../components/ChangeProfile';
import {NavBar} from '../components/NavBar';

export const ChangeProfilePage = () =>(
    <div className="HomeMain">
         <NavBar/>
           <div className="ChangeProfileContainer">
           <h1>Change User Profile</h1>
    <ChangePro/>
</div>
    </div>

    )
export default ChangeProfilePage;