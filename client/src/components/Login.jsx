import React, { useState } from "react";
import { Form, Field } from 'react-advanced-form'
import { Input, Button } from 'react-advanced-form-addons'


export function Login() {


  
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
    } else {
        console.log("user doesn't exist");
    }
  });
}

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    //loginUser()
    console.log(event);
  }

  return (
    <div className="Login">
      <Form action={loginUser}>
      <Field.Group >
        <Input
          
          name="email"
          type="email"
          label="E-mail"
          required
          value="alex@gmail.com"
          onChange={e => setEmail(e.value)}
         />
      </Field.Group>
      <Field.Group >
      <Input
        name="password"
        type="password"
        label="Password"
        value="QWE123"
        required
        onChange={e => setPassword(e.value)} />
        </Field.Group>
        <Button bsSize="large"  variant="success" type="submit" primary>Login</Button>
        <Button id="registerButton" block bsSize="large" variant="danger" type="Register" href="/Register" secondary >Register</Button>
      </Form>
      
    </div>
  );
}
       //disabled={!validateForm() }
export default Login;


