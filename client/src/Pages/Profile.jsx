import React from 'react';
import Profile from '../components/Profile';
import {NavBar} from '../components/NavBar';


export const ProfilePage = () =>(
    <div className="HomeMain">
            <NavBar/>
           <div className="ProfileContainer">
           <h1>Profile Info</h1>
            <Profile />
            </div>

      
     </div>
    )
export default ProfilePage;