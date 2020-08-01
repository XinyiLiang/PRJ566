import React from "react";
import { useForm } from "react-hook-form";
import { Form, Field } from 'react-advanced-form'
import { Input, Button } from 'react-advanced-form-addons'
import { Component } from "react";

const Account = () => {
  const registerUser = ({ serialized, fields, form }) => {
    return fetch('https://backend.dev', {
      body: JSON.stringify(serialized)
    })
  }
  return (

<Form  
        action={registerUser}
  >
        <Field.Group name="primaryInfo">
          <Input
            name="userEmail"
            type="email"
            label="E-mail"
            required />
        </Field.Group>

        <Input
          name="userPassword"
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
            name="firstName"
            label="First name"
            required={({ get }) => {
              return !!get(['primaryInfo', 'lastName', 'value'])
            }} />
          <Input
            name="lastName"
            label="Last name"
            required={({ get }) => {
              return !!get(['primaryInfo', 'firstName', 'value'])
            }} />
        </Field.Group>

        <Button primary>Register</Button>
      </Form>
  );
};
export default Account;
