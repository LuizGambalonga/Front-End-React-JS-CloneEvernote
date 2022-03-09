import React, { Fragment, useState } from 'react';
import { Button, Field, Control, Input, Column, Section, Help, Label } from "rbx";
import { Navigate } from "react-router-dom";
import UserService from '../../../services/user';

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [RedirectToRegister, setRedirectToRegister] = useState(false);
  const [RedirectToNotes, setRedirectToNotes] = useState(false);
  const [error, setError] = useState(false);

  const HandleSubmit = async (evt) =>{
    evt.preventDefault();
    try {
        const user = await UserService.login({ email: email, password: password});
        setRedirectToNotes(true);
    } catch (error) {
        setError(true);
    }
}
  if (RedirectToRegister == true)
    return <Navigate to={{ pathname: "/register" }} />
  else if (RedirectToNotes == true)
    return <Navigate to={{ pathname: "/notes" }} />
  return (
    <Fragment>
      <Column.Group centered>
        <form onSubmit={HandleSubmit}>
          <Column size={12}>
            <Field>
              <Label size="small">Email:</Label>
              <Control>
                <Input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  name="email"
                />
              </Control>
            </Field>
            <Field>
              <Label size="small">Password:</Label>
              <Control>
                <Input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  name="password"
                />
              </Control>
            </Field>
            <Field>
              <Control>
                <Column.Group>
                  <Column>
                    <a onClick={e => setRedirectToRegister(true)} className="button is-white has-text-custom-purple">Register or</a>
                  </Column>
                  <Column>
                    <Button color="custom-purple" outlined>Login</Button>
                  </Column>
                </Column.Group>
              </Control>
            </Field>
            {error && <Help color="danger">Email or Password invalid</Help>}
          </Column>
        </form>
      </Column.Group>
    </Fragment>
  )
}

export default LoginForm;