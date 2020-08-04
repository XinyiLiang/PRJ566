import React, { useState } from "react";
import { Form, Field } from 'react-advanced-form'
import { Input, Button } from 'react-advanced-form-addons'
import { useHistory } from "react-router-dom";

export function Login() {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
 
const loginUser = ({ serialized, fields, form }) => {
  return fetch('/api/get/PlayerLogin', {
    body: JSON.stringify(serialized),
    method: 'POST',
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
    'Content-Type': 'application/json'
    // 'Content-Type': 'application/x-www-form-urlencoded',
    }
  }).then(res => res.json()).then(data => {
    if (data.length == 1) {

        console.log('user exists');
        sessionStorage.setItem("auth", "true");
        sessionStorage.setItem("email",data[0].EMAIL)
        sessionStorage.setItem("name",data[0].FIRST_NAME)
        sessionStorage.setItem("team",data[0].TEAM_ID)
 
        
        history.push({ 
          pathname: '/',
        })
    //window.location.reload();
      
  
    } else {
        //console.log("user doesn't exist");
        alert("user doesn't exist!!");
    }
  });
}




  return (


    
    <div id="Logintest">
       
      <Form action={loginUser}>
      <Field.Group >
        <Input
          name="email"
          type="email"
          label="E-mail"
          required
         
          onChange={e => setEmail(e.value)}
         />
      </Field.Group>
      <Field.Group >
      <Input
        name="password"
        type="password"
        label="Password"
        required
        onChange={e => setPassword(e.value)} />
        </Field.Group>
        
        <Button bsSize="large" variant="success" type="submit" primary  >Login</Button>
       
      </Form>
      <div className="registerLink">
      <span>New to Detective?</span>&nbsp;&nbsp;<a href='./register'>Register</a>
      </div>
    </div>
  );
}
       
export default Login;


