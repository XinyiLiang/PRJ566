import React from 'react';
import Login from '../components/Login';
import {NavBar} from '../components/NavBar';


export const LoginPage = () =>(
    <div className="HomeMain">
         <NavBar/>
           <div className="LoginPageContainer">
               <img id="LoginPageLogo" src={"../images/detectiveLogo.png"} alt="loginLogo" /><span className="LogoBesidesText">Log In</span>
            <Login />
            
            </div>

      
     </div>
    )
export default LoginPage;
