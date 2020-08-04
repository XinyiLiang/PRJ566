import React from 'react';
import Login from '../components/Login';


export const LoginPage = () =>(
    <div className="LoginPageContainer">
           <div className="LoginComponent">
              <div className="login-Title">
              <h2 ><a href="/">Detective</a></h2>
               <h1 >Log in to your account</h1>
               </div>
            <Login />
            
            </div>

      
     </div>
    )
export default LoginPage;
