import * as React from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";

const Login = () => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const submitForm = () => {};
  return (
    <Form>
      <FormGroup>
        <Input
          type="email"
          className="emailField"
          name="email"
          placeholder="example@gmail.com"
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setEmail(e.currentTarget.value)
          }
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="password"
          className="passwordField"
          name="password"
          placeholder="******"
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setPassword(e.currentTarget.value)
          }
        />
      </FormGroup>
      <Button type="submit">Login</Button>
    </Form>
  );
};

export default Login;
