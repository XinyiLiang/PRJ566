import React from 'react';
import Login from '../components/Login';

export const LoginPage = () =>(
    <div className="HomeMain">
           <div className="LoginPageContainer">
               <img id="LoginPageLogo" src={"../images/detectiveLogo.png"} alt="loginLogo" />
            <Login />
            </div>
     </div>
    )
export default LoginPage;
