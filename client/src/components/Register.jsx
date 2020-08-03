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
    });
  }
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
