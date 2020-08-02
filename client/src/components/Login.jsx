import React, { useState } from "react";
import { Button, FormGroup, FormControl} from "react-bootstrap";


export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
            <h5>Email</h5>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
         <h5>Password</h5>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button block bsSize="large" disabled={!validateForm() } variant="success" type="submit">Login</Button>
      </form>
      <Button id="registerButton" block bsSize="large" variant="danger" type="Register" href="/Register">Register</Button>
    </div>
  );
}

export default Login;