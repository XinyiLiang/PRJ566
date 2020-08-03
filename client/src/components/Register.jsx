import React from "react";
import { Form, Field } from 'react-advanced-form'
import { Input, Button } from 'react-advanced-form-addons'
// import { post } from "../../../server/routes/userRoutes";


const Account = () => {
  const registerUser = ({ serialized, fields, form }) => {
    return fetch('/api/user/posttodb', {
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
   
        
      //history.push('/');
      window.location.reload();
        
    
      } else {
          console.log("user doesn't exist");
      }
    });
  };
  
  return (

<Form  
        action={registerUser}
  >
        <Field.Group name="primaryInfo">
          <Input
            
            name="email"
            type="email"
            label="E-mail"
            required
           />
            <Input
            
            name="username"
            type="username"
            label="Username"
            required
           />
        </Field.Group>

        <Input
          name="password"
          type="password"
          label="Password"
          required />
        <Input
          name="confirmPassword"
          type="password"
          label="Confirm password"
          required
          skip />

        <Field.Group name="primaryInfo">
          <Input
            name="first_name"
            label="First name"
            required={({ get }) => {
              return !!get(['primaryInfo', 'lastName', 'value'])
            }} />
          <Input
            name="last_name"
            label="Last name"
            required={({ get }) => {
              return !!get(['primaryInfo', 'firstName', 'value'])
            }} />
        </Field.Group>

        <Button id="registerButton" primary type="submit">Register</Button>
      </Form>
  );
};
export default Account;
